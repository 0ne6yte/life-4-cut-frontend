import { Tag } from './Tag';

export function Filter() {
  return (
    <div className="w-full">
      <div className="flex items-center px-6 py-4 gap-x-[10px] overflow-x-scroll bg-black-80">
        {Array.from({ length: 10 }).map((_, i) => (
          <Tag key={i} text={`${i}번`} variant={i % 2 ? 'default' : 'gradient'} />
        ))}
      </div>
    </div>
  );
}
