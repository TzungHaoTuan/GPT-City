import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export const MemberProfile = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center gap-4">
      <UserButton afterSignOutUrl="/" />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};
