"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 350);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-black/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">
            R
          </span>
          <span className="text-sm font-bold tracking-wide">
            RDS Risk Management
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Beranda</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">Tentang</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/services">Layanan</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/clients">Klien</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/gallery">Gallery</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Kontak</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
          onClick={() => {
            setClosing(false);
            setOpen(true);
          }}
        >
          <Menu className="size-5" />
        </button>
      </div>
      {open &&
        canUseDOM &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className={`fixed inset-0 z-[100] ${
              closing
                ? "animate-out fade-out duration-300 ease-in"
                : "animate-in fade-in duration-300 ease-out"
            } bg-black/50 dark:bg-black/60`}
            onClick={handleClose}
          >
            <div
              className={`absolute right-0 top-0 h-dvh w-4/5 max-w-sm border-l border-neutral-200 bg-white px-6 py-4 ${
                closing
                  ? "animate-out fade-out slide-out-to-right-2 duration-350 ease-in"
                  : "animate-in fade-in slide-in-from-right-2 duration-350 ease-out"
              } dark:border-neutral-800 dark:bg-black`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={handleClose}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black">
                    R
                  </span>
                  <span className="text-sm font-bold tracking-wide">
                    RDS Risk Management
                  </span>
                </Link>
                <button
                  aria-label="Tutup"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-700 dark:border-neutral-800 dark:bg-black dark:text-neutral-300"
                  onClick={handleClose}
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="mt-6 space-y-3">
                <Link
                  href="/"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={handleClose}
                >
                  Beranda
                </Link>
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={handleClose}
                >
                  Tentang
                </Link>
                <Link
                  href="/services"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={handleClose}
                >
                  Layanan
                </Link>
                <Link
                  href="/clients"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={handleClose}
                >
                  Klien
                </Link>
                <Link
                  href="/gallery"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={handleClose}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={handleClose}
                >
                  Kontak
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
