interface BubbleProps {
  message: string;
  className?: string;
}

export default function Bubble({ message, className = '' }: BubbleProps) {
  return (
    <div className={`relative w-60 leading-[30px] rounded-[20px] bg-black ${className}`}>
      <div className="px-[15px] text-center">
        <p className="text-white text-[13px] font-bold">{message}</p>
      </div>
      <div className="absolute h-0 w-0 left-10 bottom-[-7px] border-4 border-t-black border-x-transparent border-b-transparent"></div>
    </div>
  );
}
