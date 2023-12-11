import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='fixed bg-gray-800 space-y-6 w-64 h-screen text-slate-50 p-5'>
      <Link href='#' className='mb-6'>
        Logo
      </Link>
      <div className='space-y-3 flex flex-col'>
        <Link href='#'>Dashboard</Link>
        <Link href='#'>Catalog</Link>
        <Link href='#'>Customers</Link>
        <Link href='#'>Markets</Link>
        <Link href='#'>Farmers</Link>
        <Link href='#'>Orders</Link>
        <Link href='#'>Staff</Link>
        <Link href='#'>Settings</Link>
        <Link href='#'>Online Store</Link>
      </div>
    </div>
  );
};

export default Sidebar;
