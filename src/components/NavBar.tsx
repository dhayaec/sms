import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] bg-white ring-gray-400 px-2">
        <Image src={`/img/search.png`} alt="Search" width={20} height={20} />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={`/img/message.png`}
            alt="Messages"
            width={20}
            height={20}
          />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src={`/img/announcement.png`}
            alt="Announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">
            3
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3">John Doe</span>
          <span className="text-sm text-right text-gray-400">Admin</span>
        </div>
        <Image
          src={`/img/avatar.png`}
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
