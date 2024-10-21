import Menu from '@/components/Menu';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'School Management Dashboard',
  description: 'Next.js School Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[16%] xl:w-[18%] p-2">
        <Link
          href={`/`}
          className="flex justify-center items-center lg:justify-start gap-2"
        >
          <Image src="/img/logo.png" alt="" width={32} height={32} priority />
          <h1 className="hidden lg:block text-2xl font-semibold">SMS</h1>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[84%] xl:w-[82%] bg-slate-200 overflow-x-hidden overflow-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
