import Image from 'next/image';

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-300 even:bg-yellow-300 p-4 flex-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white rounded-full px-2">24/2024</span>
        <Image src={`/img/more.png`} alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <span className="capitalize text-sm text-gray-800">{`${type}s`}</span>
    </div>
  );
};

export default UserCard;
