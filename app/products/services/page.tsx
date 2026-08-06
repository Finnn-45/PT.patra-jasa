"use client";
import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

export default function ProductsServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Services"
        title="Solusi Layanan untuk"
        titleAccent="Operasional dan Fasilitas."
        description="Layanan multi-sektor Patra Jasa mencakup manajemen gedung, transportasi korporat, event, dan dukungan operasional."
        variant="green"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-slate-600 leading-relaxed mb-8">Temukan layanan yang membantu perusahaan Anda beroperasi lebih efisien dan aman di setiap lini bisnis.</p>
        <Link href="/bisnis/services" className="inline-flex items-center gap-2 rounded-full bg-patra-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-patra-green-400 transition">Lihat Services</Link>
      </section>

      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Service Highlights"
            title="Solusi Jasa yang Menjadi Pondasi Operasional."
            description="Tiga inti layanan yang memberi nilai tambah bagi operasional perusahaan, mulai dari fasilitas hingga event."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <CometCard
              title="Manajemen Fasilitas"
              subtitle="Facility"
              description="Pengelolaan gedung dan fasilitas terpercaya untuk menjaga efisiensi operasional setiap hari."
              linkText="Pelajari Facility"
              href="/bisnis/services"
            />
            <CometCard
              title="Transportasi Korporat"
              subtitle="Mobilitas"
              description="Layanan transportasi yang aman dan nyaman untuk mendukung perjalanan bisnis serta event perusahaan."
              linkText="Lihat Transport"
              href="/bisnis/services"
            />
            <CometCard
              title="Event dan Konvensi"
              subtitle="MICE"
              description="Dukungan MICE komprehensif mulai dari perencanaan acara hingga pelaksanaan di lokasi terbaik."
              linkText="Jelajahi MICE"
              href="/bisnis/services"
            />
          </div>
        </div>
      </section>
    </main>
  );
}