"use client";
import Container from "@/components/system/Container";
import Divider from "@/components/system/Divider";
import Eyebrow from "@/components/system/Eyebrow";
import ImageReveal from "@/components/system/ImageReveal";
import Metric from "@/components/system/Metric";
import PatraButton from "@/components/system/PatraButton";
import PatraLink from "@/components/system/PatraLink";
import SectionHeading from "@/components/system/SectionHeading";
import SiteNav from "@/components/system/SiteNav";
import { useI18n } from "@/components/i18n/LanguageProvider";

const fills = [
  { name: "Ink", value: "#ffffff", cls: "bg-ink text-paper" },
  { name: "Coal", value: "#ffffff", cls: "bg-coal text-paper" },
  { name: "Charcoal", value: "#efefef", cls: "bg-charcoal text-paper" },
  { name: "Graphite", value: "#e6e6e6", cls: "bg-graphite text-paper" },
  { name: "Stone", value: "#8a94a0", cls: "bg-stone text-paper" },
  { name: "Ash", value: "#4a545e", cls: "bg-ash text-ink" },
  { name: "Linen", value: "#f2f5f2", cls: "bg-linen text-ink" },
  { name: "Sand", value: "#f6f8f6", cls: "bg-sand text-ink" },
  { name: "Paper", value: "#222222", cls: "bg-paper text-ink" },
  { name: "Cream", value: "#ffffff", cls: "bg-cream text-ink" },
];

const greens = [
  { name: "PatraRed 700", value: "#a30c1d", cls: "bg-patragreen-700" },
  { name: "PatraRed 600", value: "#c90f22", cls: "bg-patragreen-600" },
  { name: "PatraRed 500", value: "#ed1b2f", cls: "bg-patragreen-500" },
  { name: "PatraRed 400", value: "#f25163", cls: "bg-patragreen-400" },
  { name: "PatraRed 300", value: "#f18692", cls: "bg-patragreen-300" },
  { name: "PatraRed 100", value: "#fbd7dc", cls: "bg-patragreen-100 text-ink" },
];

export default function SystemPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-ink py-24 text-paper md:py-32">
      {/* Live system navigation (fixed) */}
      <SiteNav />
      {/* Hero */}
      <Container>
        <Eyebrow className="mb-6 text-patragreen-300">
          PT Patra Jasa · Redesign Stage 01
        </Eyebrow>
        <h1 className="t-display max-w-4xl text-paper">
          Corporate Foundation.
          <br />
          <span className="text-ash">Editorial &amp; Precise.</span>
        </h1>
        <p className="t-lead mt-8 max-w-2xl text-ash">
          A restrained, architectural visual system for a modern Indonesian
          company inside the Pertamina ecosystem — built on near-black,
          charcoal and warm white, with a single, disciplined accent.
        </p>

        <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {["Color", "Type", "Buttons", "Metrics", "Section"].map((label, i) => (
            <a
              key={label}
              href={`#fs-${label.toLowerCase()}`}
              className="t-eyebrow text-patragreen-300 transition-colors hover:text-paper"
            >
              {String(i + 1).padStart(2, "0")} — {label}
            </a>
          ))}
        </nav>
      </Container>

      <div className="mt-20 md:mt-28">
        <Container>
          <Divider />
        </Container>
      </div>

      {/* Color */}
      <section id="fs-color" className="pt-24 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="01 — Color"
            title="A quiet, confident palette."
            description="Near-black foundations for weight, warm paper for editorial light, and one restrained Pertamina green used sparingly. Brass appears only as a deliberate highlight."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fills.map((c) => (
              <div key={c.name} className={`flex items-end justify-between rounded-md p-5 ${c.cls}`}>
                <span className="text-xs font-semibold uppercase tracking-wider">{c.name}</span>
                <span className="text-[0.7rem] opacity-70">{c.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {greens.map((c) => (
              <div key={c.name} className={`flex h-24 flex-col justify-end rounded-md p-4 ${c.cls}`}>
                <span className="text-xs font-semibold uppercase tracking-wider">{c.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Type */}
      <section id="fs-type" className="pt-24 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="02 — Typography"
            title="Oversized, editorial, structured."
          />
          <div className="mt-14 space-y-14 border-t border-ash/20 pt-10">
            <div className="grid gap-4 md:grid-cols-[240px_1fr]">
              <span className="t-caption pt-2 text-ash">Display</span>
              <p className="t-display text-paper">Patra, Terbang Bersama Energi.</p>
            </div>
            <Divider />
            <div className="grid gap-4 md:grid-cols-[240px_1fr]">
              <span className="t-caption pt-2 text-ash">Section</span>
              <p className="t-section max-w-3xl text-paper">
                Property, Hotels &amp; Resorts, dan Services — satu misi korporat.
              </p>
            </div>
            <Divider />
            <div className="grid gap-4 md:grid-cols-[240px_1fr]">
              <span className="t-caption pt-2 text-ash">Lead</span>
              <p className="t-lead max-w-2xl text-ash">
                Sebagai anak perusahaan Pertamina, kami memadukan tata kelola
                yang solid, kualitas hospitality, dan ketahanan lingkungan
                dalam setiap pengembangan.
              </p>
            </div>
            <Divider />
            <div className="grid gap-4 md:grid-cols-[240px_1fr]">
              <span className="t-caption pt-2 text-ash">Metric</span>
              <div className="flex flex-wrap gap-10">
                <span className="t-metric text-paper">0850<span className="text-[0.35em]">+</span></span>
                <span className="t-metric text-patragreen-400">0022</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Buttons */}
      <section id="fs-buttons" className="pt-24 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="03 — Buttons & Links"
            title="Clear actions, precise motion."
            description="Rounded pills for primary action and quiet arrows for exploration. Movement is short and directional — never decorative for its own sake."
          />
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <PatraButton href="#fs-color">Jelajahi Bisnis</PatraButton>
            <PatraButton href="#fs-color" variant="outline">
              Pelajari Perusahaan
            </PatraButton>
            <PatraButton href="#fs-color" variant="ghost" arrow>
              Lihat Proyek
            </PatraButton>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <PatraLink href="#fs-buttons">Property</PatraLink>
            <PatraLink href="#fs-buttons">Hotels &amp; Resorts</PatraLink>
            <PatraLink href="#fs-buttons">Services</PatraLink>
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section id="fs-metrics" className="pt-24 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="04 — Metrics"
            title="Numbers with gravity."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Metric value="22" label="Proyek Strategis" />
            <Metric value="09" label="Hotel & Resorts" />
            <Metric value="850" unit="+" label="Karyawan" />
            <Metric value="09" label="Proyek Mendatang" />
          </div>
        </Container>
      </section>

      {/* Navigation */}
      <section className="pt-24 md:pt-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <SectionHeading
              eyebrow="05 — Navigation"
              title="Quiet chrome, clear hierarchy."
              description="A minimal fixed header that stays transparent over hero imagery and gains a restrained translucent blur only after scrolling — never a heavy glass bar. Links share one animated-underline primitive; motion is short and purposeful."
            />
            <div className="self-end">
              <p className="t-caption text-ash">Live component</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ash/80">
                The header rendered at the top of this page is the system&rsquo;s
                SiteNav component. Try scrolling — the chrome appears only when
                needed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Image treatment */}
      <section id="fs-image" className="pt-24 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="06 — Image Treatment"
            title="Architectural, editorial imagery."
            description="Framed, slightly desaturated, warming to full colour on hover. Each image reveals with a clean clip motion as it enters the viewport."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ImageReveal
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1400&auto=format&fit=crop"
              alt="Hotel resort by the water"
              aspect="aspect-[16/10]"
              caption="Hotels &amp; Resorts — base treatment"
            />
            <ImageReveal
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
              alt="Architectural office building"
              aspect="aspect-[16/10]"
              caption="Property — architectural crop"
            />
          </div>
        </Container>
      </section>

      {/* Sample section */}
      <section id="fs-section" className="pt-24 md:pt-32">
        <Container as="div" className="pb-24 md:pb-32">
          <div className="grid gap-12 border border-ash/20 bg-coal/60 p-8 md:p-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow className="mb-5 text-patragreen-300">{t("system.sampleEyebrow")}</Eyebrow>
              <h3 className="t-section text-paper">
                {t("system.sampleTitle")}
              </h3>
              <p className="t-lead mt-6 max-w-xl text-ash">
                {t("system.sampleDesc")}
              </p>
              <div className="mt-8">
                <PatraButton>{t("system.sampleCta")}</PatraButton>
              </div>
            </div>
            <div className="grid content-end gap-6">
              <Metric value="1997" label={t("system.sampleMetric")} />
              <p className="t-caption text-ash">
                {t("system.sampleCaption")}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}