"use client";

import ChipAction from "./ChipAction";
import ChipAvatar from "./ChipAvatar";
import ChipLabel from "./ChipLabel";
import { User } from "../DropdownInput/index";

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
        <ChipAvatar avatarIcon={user.name.slice(0, 1).toUpperCase()} />
        <ChipLabel value={user.name} />
      </div>
      <ChipAction user={user} handleClick={handleUserSelect} />
    </div>
  );
};

export default Chip;
