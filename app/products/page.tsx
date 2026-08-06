"use client";
import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

export default function ProductsOverviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Bisnis"
        title="Pilar Bisnis"
        titleAccent="Patra Jasa."
        description="Jelajahi tiga pilar utama kami: Property, Hotels & Resorts, dan Services, yang menjadi inti kekuatan operasional perusahaan."
        variant="blue"
      />

      <section className="bg-slate-950 py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Pilihan Bisnis"
            title="Portofolio Bisnis Patra Jasa"
            description="Sorotan komponen strategis kami untuk properti, hospitalitas, dan layanan corporate."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <CometCard
              title="Pengembangan Properti"
              subtitle="Property"
              description="Rangkaian hunian, kawasan komersial, dan aset terintegrasi yang menghadirkan nilai investasi jangka panjang."
              linkText="Jelajahi Property"
              href="/products/property-1"
            />
            <CometCard
              title="Hotel & Resort Premium"
              subtitle="Hotels & Resorts"
              description="Pengalaman menginap eksklusif dengan standar layanan terbaik dan destinasi pilihan di Indonesia."
              linkText="Lihat Hotels"
              href="/bisnis/hotels"
            />
            <CometCard
              title="Layanan Terintegrasi"
              subtitle="Services"
              description="Solusi fasilitas, transportasi, dan operasional yang dirancang untuk mendukung kebutuhan bisnis korporat."
              linkText="Pelajari Services"
              href="/bisnis/services"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid gap-8 lg:grid-cols-3">
        <Link href="/products/property-1" className="group rounded-3xl bg-white p-10 shadow-lg border border-slate-100 transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Property</h2>
          <p className="text-slate-600 leading-relaxed">Pengembangan properti hunian dan komersial dengan desain modern dan nilai investasi yang kuat.</p>
        </Link>
        <Link href="/bisnis/hotels" className="group rounded-3xl bg-white p-10 shadow-lg border border-slate-100 transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Hotels & Resorts</h2>
          <p className="text-slate-600 leading-relaxed">Rangkaian hotel dan resort Patra Jasa yang menawarkan pengalaman tamu premium di destinasi strategis.</p>
        </Link>
        <Link href="/bisnis/services" className="group rounded-3xl bg-white p-10 shadow-lg border border-slate-100 transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-slate-600 leading-relaxed">Layanan pendukung terpadu untuk fasilitas, transportasi, MICE, dan operasi perusahaan.</p>
        </Link>
      </section>
    </main>
  );
}