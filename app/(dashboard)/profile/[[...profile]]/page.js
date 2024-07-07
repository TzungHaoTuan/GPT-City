import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { fetchUserTokensById } from "@/app/utils/action";

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <div>
      <h2 className="mb-8 ml-8 text-xl font-bold">
        Token Amount : {currentTokens}
      </h2>
      <UserProfile routing="hash" />
    </div>
  );
};
export default ProfilePage;
