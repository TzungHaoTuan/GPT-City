"use server";
import OpenAI from "openai";
import prisma from "./db";
import type {
  ChatMessage,
  TourData,
  TourStop,
  UnsplashSearchResult,
} from "@/app/types";
import type { Tour } from "@prisma/client";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (
  chatMessages: ChatMessage[],
): Promise<{ message: ChatMessage; tokens: number } | null> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      temperature: 0,
      max_tokens: 200,
    });
    return {
      message: response.choices[0].message as ChatMessage,
      tokens: response.usage!.total_tokens,
    };
  } catch (error) {
    return null;
  }
};

export const generateTourResponse = async ({
  city,
  country,
}: {
  city: string;
  country: string;
}): Promise<{ tour: TourData; tokens: number } | null> => {
  const query = `Find a exact ${city} in this exact ${country}.
If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}.
Once you have a list, create a one-day tour from morning to night. Response should be in the following JSON format:
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": [{
      "name": "stop name",
      "time": "what time to be there",
      "description": "short description of features of this stop"
    }]
  }
}
"stops" property should include three to five stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a tour guide" },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const tourData = JSON.parse(response.choices[0].message.content!) as {
      tour: TourData | null;
    };
    if (!tourData.tour) {
      return null;
    }
    return { tour: tourData.tour, tokens: response.usage!.total_tokens };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExistingTour = async ({
  userId,
  city,
  country,
}: {
  userId: string;
  city: string;
  country: string;
}): Promise<Tour | null> => {
  return prisma.tour.findUnique({
    where: {
      user_tour: {
        userId,
        city,
        country,
      },
    },
  });
};

export const createNewTour = async (
  tour: TourData & { userId: string },
): Promise<Tour> => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getAllTours = async (
  userId: string | null | undefined,
  searchTerm: string,
): Promise<Tour[]> => {
  if (!userId) {
    return [];
  }
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      where: {
        userId,
      },
      orderBy: {
        city: "asc",
      },
    });
    return tours;
  }
  const tours = await prisma.tour.findMany({
    where: {
      userId,
      OR: [
        {
          city: {
            contains: searchTerm,
          },
        },
        {
          country: {
            contains: searchTerm,
          },
        },
      ],
    },
    orderBy: {
      city: "asc",
    },
  });

  return tours;
};

export const getSingleTour = async (id: string): Promise<Tour | null> => {
  return prisma.tour.findUnique({
    where: {
      id,
    },
  });
};

export const searchUnsplashPhoto = async (
  url: string,
): Promise<UnsplashSearchResult | undefined> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const images = data?.results;
    const photo = data?.results[0]?.urls?.regular;
    const blurHash = data?.results[0]?.blur_hash;

    return {
      images,
      photo,
      blurHash,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserTokensById = async (
  clerkId: string,
): Promise<number | undefined> => {
  const result = await prisma.token.findUnique({
    where: {
      clerkId,
    },
  });

  return result?.tokens;
};

export const generateUserTokensForId = async (
  clerkId: string,
): Promise<number | undefined> => {
  const result = await prisma.token.create({
    data: {
      clerkId,
    },
  });
  return result?.tokens;
};

export const fetchOrGenerateUserTokens = async (
  clerkId: string,
): Promise<number | undefined> => {
  const result = await fetchUserTokensById(clerkId);
  if (result) {
    return result;
  }
  return generateUserTokensForId(clerkId);
};

export const subtractTokens = async (
  clerkId: string,
  tokens: number,
): Promise<number> => {
  const result = await prisma.token.update({
    where: {
      clerkId,
    },
    data: {
      tokens: {
        decrement: tokens,
      },
    },
  });
  return result.tokens;
};
