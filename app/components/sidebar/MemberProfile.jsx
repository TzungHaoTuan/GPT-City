import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
export const MemberProfile = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center">
      <UserButton />
      {user && (
        <div className="ml-4">{user.emailAddresses[0].emailAddress}</div>
      )}
    </div>
  );
};
