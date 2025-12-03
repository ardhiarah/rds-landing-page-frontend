import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-black/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">R</span>
          <span className="text-sm font-bold tracking-wide">RDS Risk Management</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#layanan" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">Layanan</Link>
          <Link href="#keunggulan" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">Keunggulan</Link>
          <Link href="#klien" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">Klien</Link>
          <Link href="#testimoni" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">Testimoni</Link>
          <Link href="#kontak" className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">Kontak</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://rds-indonesia.com/" target="_blank" rel="noreferrer">
            <Button size="sm">Kunjungi Website</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
