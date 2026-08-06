"use client";
import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

export default function HotelsResortsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Hotels & Resorts"
        title="Hospitalitas Premium di"
        titleAccent="Seluruh Indonesia."
        description="Katalog properti hotel dan resort Patra Jasa yang menonjolkan kenyamanan, layanan, dan lokasi terbaik."
        variant="blue"
      />

      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Hotels & Resorts"
            title="Hospitalitas Modern untuk Perjalanan Bisnis."
            description="Tiga fokus utama hotel dan resort Patra Jasa untuk tamu, event, dan layanan premium."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <CometCard
              title="Resort dan Villa"
              subtitle="Relaxation"
              description="Destinasi resort yang menyajikan kenyamanan, ketenangan, dan suasana tropis terbaik." 
              linkText="Lihat Resort"
              href="/bisnis/hotels"
            />
            <CometCard
              title="Event dan Conference"
              subtitle="Convention"
              description="Ruang pertemuan dan fasilitas MICE yang siap mendukung acara bisnis skala besar." 
              linkText="Telusuri Event"
              href="/bisnis/services"
            />
            <CometCard
              title="Layanan Tamu"
              subtitle="Service"
              description="Pelayanan tamu yang dirancang untuk kenyamanan maksimal, dari kedatangan hingga check-out." 
              linkText="Pelajari Guest Care"
              href="/kontak-kami"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-slate-600 leading-relaxed mb-8">Kunjungi halaman khusus Hotels & Resorts untuk melihat portofolio properti yang mendukung wisata, bisnis, dan MICE.</p>
        <Link href="/bisnis/hotels" className="inline-flex items-center gap-2 rounded-full bg-patra-blue-400 px-6 py-3 text-sm font-semibold text-white hover:bg-patra-blue-300 transition">Lihat Hotels & Resorts</Link>
      </section>
    </main>
  );
}