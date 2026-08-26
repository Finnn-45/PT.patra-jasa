import type { Metadata } from "next";
import CorporateExperience from "@/components/3d-corporate/CorporateExperience";

export const metadata: Metadata = {
  title: "Patra Jasa 3D | Pengalaman Korporat",
  description:
    "Konsep single-page 3D corporate PT Patra Jasa — anak perusahaan Pertamina. Pengalaman web 3D yang mulus dengan identitas korporat.",
};

export default function ThreeDExperiencePage() {
  return <CorporateExperience />;
}
