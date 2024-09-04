import { UserButton } from "@clerk/nextjs";
import { currentUser, auth } from "@clerk/nextjs/server";
import { fetchOrGenerateUserTokens } from "@/app/utils/action";

export const MemberProfile = async () => {
  // const user = await currentUser();
  const { userId } = auth();
  await fetchOrGenerateUserTokens(userId);
  // console.log(user);
  return (
    <div className="flex items-center gap-4">
      <UserButton />
      {/* <p>{user.username}</p> */}
    </div>
  );
};
