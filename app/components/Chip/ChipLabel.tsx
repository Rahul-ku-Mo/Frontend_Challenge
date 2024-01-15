type ChipLabelProps = {
  value: string;
};
const ChipLabel: React.FC<ChipLabelProps> = ({ value }) => {
  return <div className="text-sm tracking-tight">{value}</div>;
};

export default ChipLabel;
