import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex overflow-hidden'>
      {/* sidebar */}
      <aside className=''>
        <Sidebar />
      </aside>
      <div className='w-full'>
        {/* Header */}
        <Navbar />
        {/* main content */}
        <main className='p-8 bg-slate-900 text-slate-50 min-h-screen mt-16 w-[calc(100vw_-_16rem)] ml-64'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
