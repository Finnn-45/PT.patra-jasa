import { cn } from "@/lib/utils";

interface PatraSectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export function PatraSectionTitle({ eyebrow, title, description, align = "center" }: PatraSectionTitleProps) {
  const alignmentClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={cn(alignmentClass, "max-w-4xl mx-auto")}> 
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-patra-blue-400 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
      {description ? <p className="text-base md:text-lg text-slate-600 leading-relaxed">{description}</p> : null}
    </div>
  );
}
