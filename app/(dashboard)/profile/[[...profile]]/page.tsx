import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { fetchUserTokensById } from "@/app/utils/action";

const ProfilePage = async () => {
  const { userId } = await auth();
  const currentTokens = await fetchUserTokensById(userId!);
  return (
    <div className="flex flex-col items-center pt-12 pb-12">
      <div>
        <h2 className="mb-8 text-lg font-semibold">
          Token Amount : {currentTokens}
        </h2>
        {/* <UserProfile path="/profile" /> */}
        <UserProfile routing="hash" />
      </div>
    </div>
  );
};
export default ProfilePage;
