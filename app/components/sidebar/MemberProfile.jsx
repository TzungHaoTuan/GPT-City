import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { fetchOrGenerateUserTokens } from "@/app/utils/action";

export const MemberProfile = async () => {
  const { userId } = auth();
  await fetchOrGenerateUserTokens(userId);
  return (
    <div className="flex items-center gap-4">
      <UserButton />
    </div>
  );
};
