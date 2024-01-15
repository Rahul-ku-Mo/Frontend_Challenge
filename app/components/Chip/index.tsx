"use client";
import { User } from "@/app/types";

import ChipAction from "./ChipAction";
import ChipAvatar from "./ChipAvatar";
import ChipLabel from "./ChipLabel";
import { joinedTag } from "@/app/utils/nameJoin";

type ChipProps = {
  user: User;
  lastBackspacedUser: User | null;
  handleUserSelect: (user: User) => void;
};

const Chip: React.FC<ChipProps> = ({
  handleUserSelect,
  user,
  lastBackspacedUser,
}) => {
  const chipClass =
    user === lastBackspacedUser
      ? "flex items-center gap-2 bg-emerald-800 opacity-50 rounded-full w-fit min-w-40 pr-2 justify-between cursor-pointer m-1"
      : "flex items-center gap-2 bg-emerald-800 rounded-full w-fit min-w-40 pr-2 justify-between cursor-pointer m-1";

  return (
    <div className={chipClass}>
      <div className="flex items-center gap-2">
        <ChipAvatar avatarIcon={joinedTag(user)} />
        <ChipLabel value={user.name} />
      </div>
      <ChipAction user={user} handleClick={handleUserSelect} />
    </div>
  );
};

export default Chip;
