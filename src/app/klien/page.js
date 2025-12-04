import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Klien | RDS Risk Management",
  description:
    "Daftar klien dan institusi yang dilayani oleh RDS Risk Management.",
};

export default function ClientsPage() {
  const items = Array.from({ length: 12 });
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <Badge>Klien</Badge>
            <h1 className="mt-3 text-3xl font-bold text-black dark:text-white">
              Klien yang Dilayani
            </h1>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              RDS melayani bank dan lembaga keuangan di Indonesia, termasuk Bank
              BUMN, Bank Swasta Nasional, BPD, dan Bank Asing.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {items.map((_, i) => (
              <Card key={i} className="items-center justify-center text-center">
                <CardHeader>
                  <CardTitle>Logo Klien</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-400">
                  Instansi Perbankan/Keuangan
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
