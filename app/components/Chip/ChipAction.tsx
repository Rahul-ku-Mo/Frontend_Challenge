import { User } from "../DropdownInput/index";

type ChipActionProps = {
  user: User;
  handleClick: (user: User) => void;
};

const ChipAction: React.FC<ChipActionProps> = ({ handleClick, user }) => {
  return (
    <div
      onClick={() => handleClick(user)}
      className="font-bold tracking-wide cursor-pointer p-1 hover:bg-emerald-950 rounded-full h-5 w-5 flex items-center transition-all ease-linear justify-center "
    >
      x
    </div>
  );
};

export default ChipAction;
