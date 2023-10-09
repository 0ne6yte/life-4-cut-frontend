interface BubbleProps {
  message: string;
}

export default function Bubble({ message }: BubbleProps) {
  return (
    <div className="relative w-60 leading-[30px] rounded-[20px] bg-black-80">
      <div className="px-[15px] text-center">
        <p className="text-white text-[13px] font-bold">{message}</p>
      </div>
      <div className="absolute left-10 bottom-0 -translate-x-1 translate-y-3/4 border-4 border-y-4 border-t-black-80 border-x-transparent border-b-transparent"></div>
    </div>
  );
}
