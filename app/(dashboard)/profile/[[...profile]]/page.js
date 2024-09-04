import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { fetchUserTokensById } from "@/app/utils/action";

const ProfilePage = async () => {
  const { userId } = auth();
  // if (!userId) return;
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <div className="pt-12 pb-12 flex flex-col items-center">
      <div>
        <h2 className="text-lg font-semibold mb-8">
          Token Amount : {currentTokens}
        </h2>
        {/* <UserProfile path="/profile" /> */}
        <UserProfile routing="hash" />
      </div>
    </div>
  );
};
export default ProfilePage;
