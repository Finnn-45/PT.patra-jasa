"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import { MapPin, Mail, Phone, Send, ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function ContactPage() {
  const { t } = useI18n();

  const contactCards = [
    { title: t("kontak.0.title"), desc: t("kontak.0.desc"), icon: <MapPin className="h-7 w-7" />, href: "https://maps.google.com/?q=Jl.+Jend.+Gatot+Subroto+No.2,+Jakarta+Selatan", cta: t("common.lihatDiPeta") },
    { title: t("kontak.1.title"), desc: t("kontak.1.desc"), icon: <Mail className="h-7 w-7" />, href: "mailto:customer.care@patra-jasa.com", cta: t("common.kirimEmail") },
    { title: t("kontak.2.title"), desc: t("kontak.2.desc"), icon: <Phone className="h-7 w-7" />, href: "tel:+622152170282", cta: t("common.hubungiKami") },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/pt-patra-jasa/" },
    { label: "Instagram", href: "https://instagram.com/patrajasaofficial" },
    { label: "Youtube", href: "https://www.youtube.com/channel/UCtQW2zM43-z7s0zSQkUn4EA" },
    { label: "Facebook", href: "https://www.facebook.com/pajas.pt/" },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("nav.kontak")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("kontak.heroTitle1")}{" "}<span className="text-patragreen-600">{t("kontak.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("kontak.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad bg-sand border-t border-ash/10">
          <div className="container-site grid gap-4 md:grid-cols-3">
            {contactCards.map((card, i) => (
              <motion.a key={card.title} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600">{card.icon}</div>
                <h3 className="text-xl font-bold text-paper mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ash mb-6">{card.desc}</p>
                <span className="text-sm font-semibold text-patragreen-600 hover:text-patragreen-700 transition-colors">{card.cta}</span>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl border border-ash/15 bg-sand p-10 shadow-sm">
              <p className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("kontak.formEyebrow")}</p>
              <h2 className="t-section mb-6 text-paper">{t("kontak.formTitle")}</h2>
              <p className="text-sm leading-relaxed text-ash mb-8">{t("kontak.formDesc")}</p>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">{t("common.form.nama")} <span className="text-patragreen-600">*</span></label>
                    <input type="text" placeholder={t("common.form.namaLengkap")} required className="w-full rounded-lg border border-ash/20 bg-white px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:ring-1 focus:ring-patragreen-500/30 transition-all" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">{t("common.form.email")} <span className="text-patragreen-600">*</span></label>
                    <input type="email" placeholder={t("common.form.emailPlaceholder")} required className="w-full rounded-lg border border-ash/20 bg-white px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:ring-1 focus:ring-patragreen-500/30 transition-all" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">{t("common.form.telephone")}</label>
                    <input type="tel" placeholder={t("common.form.teleponPlaceholder")} className="w-full rounded-lg border border-ash/20 bg-white px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:ring-1 focus:ring-patragreen-500/30 transition-all" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">{t("common.form.perusahaan")}</label>
                    <input type="text" placeholder={t("common.form.namaPerusahaan")} className="w-full rounded-lg border border-ash/20 bg-white px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:ring-1 focus:ring-patragreen-500/30 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">{t("common.form.pesan")} <span className="text-patragreen-600">*</span></label>
                  <textarea rows={4} placeholder={t("common.form.pesanPlaceholder")} required className="w-full rounded-lg border border-ash/20 bg-white px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:ring-1 focus:ring-patragreen-500/30 transition-all resize-none" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-patragreen-600 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 active:scale-[0.99] transition-all shadow-md">
                  {t("common.kirimPesan")} <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

            {/* Social */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl border border-ash/15 bg-sand p-10 shadow-sm">
              <p className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("kontak.followEyebrow")}</p>
              <h2 className="t-section mb-6 text-paper">{t("kontak.followTitle")}</h2>
              <p className="text-sm leading-relaxed text-ash mb-8">{t("kontak.followDesc")}</p>
              <div className="space-y-3">
                {socials.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-ash/15 bg-white px-5 py-4 text-sm font-bold text-paper hover:border-patragreen-500/40 hover:bg-patragreen-50/50 shadow-sm transition-all duration-300">
                    <span className="flex items-center gap-4">
                      <span className="h-2 w-2 rounded-full bg-patragreen-600 group-hover:animate-pulse" />
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-ash group-hover:text-patragreen-600 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}