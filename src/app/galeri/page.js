import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "Galeri | RDS Risk Management",
  description:
    "Dokumentasi program refreshment, pembekalan, dan kegiatan RDS bersama perbankan.",
};

const captions = [
  "Penyelenggaraan Program Refreshment bersama Bank CIMB Niaga (eksekutif)",
  "Program Refreshment Panin Bank dengan pembicara Ibu Aviliani",
  "Program Refreshment CIMB Niaga dengan pembicara Ibu Sarastri Baskoro",
  "Program Refreshment Bank ICBC dengan pembicara Ibu Miranti Gani",
  "Program Refreshment Bank Mandiri (eksekutif) dengan Bapak Johny Kandano",
  "Pembekalan Manajemen Risiko Bank Capital dengan pengajar Bapak Tamunan Kitting",
  "Pembekalan Manajemen Risiko Bank CIMB Niaga dengan pengajar Bapak Deni",
  "RDS bersama para pembicara Refreshment Bank Panin di Jakarta",
  "Program Refreshment Bank OCBC NISP dengan Bapak Wiryawan Yudiharto",
  "Program Refreshment Bank Maspion dengan Bapak Sumedi di Surabaya",
  "Program Refreshment Bank Mega di Bandung dengan Bapak Johny Kandano",
  "Program Refreshment Bank Artha Graha di Jakarta",
  "Program Refreshment Bank Index di Jakarta dengan Bapak Roy Arfandy",
  "Program Refreshment BTPN di Jakarta dengan Bapak Darma",
  "Pembekalan Ujian Manajemen Risiko Jtrust Bank dengan Ibu Miranti Gani",
  "Program Refreshment BOC/BOD BTPN (eksekutif) dengan Bapak Endo Priambodo",
  "Program Refreshment RDS bersama BTN di Jakarta",
  "Program Refreshment RDS bersama Bank Danamon di Ciawi",
  "Program Pembekalan SMR Level 3 Bank Mega bersama Bpk Filipus Deny",
  "Program Pembekalan SMR Level 1 Bank BJB bersama Bpk Fathur Rachman",
  "Program Pembekalan SMR Level 2 Bank Mega bersama Bpk Edward Leo",
  "Program Pembekalan SMR Level 1 Bank CIMB Niaga bersama Bpk Soeyamto",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <Badge>Galeri</Badge>
            <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
              Dokumentasi Kegiatan
            </h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              Cuplikan kegiatan refreshment, seminar, dan pembekalan RDS bersama
              berbagai bank di Indonesia.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {captions.map((caption, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-28 w-full bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src="/window.svg"
                    alt="Foto Kegiatan"
                    width={48}
                    height={48}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 dark:invert"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Foto Kegiatan</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">
                  {caption}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
