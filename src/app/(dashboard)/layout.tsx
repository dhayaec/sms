import Menu from '@/components/Menu';
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
      <div className="w-[14%] md:w-[16%] xl:w-[18%]">
        <Link
          href={`/`}
          className="flex justify-center items-center lg:justify-start gap-2"
        >
          <Image src="/img/logo.png" alt="" width={32} height={32} priority />
          <span className="hidden lg:block">SMS</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[84%] xl:w-[82%] bg-slate-600">R</div>
    </div>
  );
}
