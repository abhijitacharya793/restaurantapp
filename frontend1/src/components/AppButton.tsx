type AppButtonProps = {
  color: string;
  fill: string;
  text: string;
  fontcolor: string;
};

export function AppButton({ color, fill, text,fontcolor }: AppButtonProps) {
  return (
    <>
      <button className={`text-white py-2 px-4 border ${color} ${fill} ${fontcolor} w-48`}>
        {text}
      </button>
    </>
  );
}
