type ChipAvatarProps = {
  avatarIcon: string;
};

const ChipAvatar: React.FC<ChipAvatarProps> = ({ avatarIcon = "X" }) => {
  return <div className="font-bold bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg h-8 w-8 md:h-10 md:w-10">{avatarIcon}</div>;
};
export default ChipAvatar;
