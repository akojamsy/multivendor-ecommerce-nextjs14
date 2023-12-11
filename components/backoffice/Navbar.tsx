import { Bell, Menu, Sun, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className='fixed w-[calc(100vw_-_16rem)] flex items-center justify-between bg-slate-800 text-gray-50 px-8 py-4 h-16 ml-64'>
      {/* icon */}
      <div className=''>
        <Menu />
      </div>
      <div>
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
