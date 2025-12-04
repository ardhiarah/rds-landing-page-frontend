import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Layanan | RDS Risk Management",
  description: "Ringkasan layanan utama RDS Risk Management",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <Badge>Layanan</Badge>
          <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
            Layanan Utama
          </h1>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Program pelatihan dan pembekalan sertifikasi Manajemen Risiko untuk
            berbagai level.
          </p>
        </div>

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Refreshment Manajemen Risiko</CardTitle>
            </CardHeader>
            <CardContent>
              Program penyegaran kebijakan dan praktik terbaru bagi karyawan
              perbankan.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pembekalan Ujian Sertifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              Materi komprehensif dan latihan soal up to date untuk persiapan
              efektif.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Try Out & Bank Soal</CardTitle>
            </CardHeader>
            <CardContent>
              Simulasi dan akses bank soal 2.000 butir untuk meningkatkan
              kepercayaan diri.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Training Non-Risiko & Soft Skill</CardTitle>
            </CardHeader>
            <CardContent>
              Leadership, selling skill, negotiation, dan customer service.
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
