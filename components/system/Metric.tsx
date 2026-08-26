import { cn } from "@/lib/utils";

type MetricProps = {
  value: string;
  unit?: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
};

/** Extremely large numeral paired with an uppercase caption. */
export default function Metric({
  value,
  unit,
  label,
  tone = "light",
  className,
}: MetricProps) {
  return (
    <div
      className={cn(
        "border-t pt-6",
        tone === "dark" ? "border-white/15" : "border-patragreen-600/30",
        className
      )}
    >
      <div className={cn("t-metric", tone === "dark" ? "text-patragreen-300" : "text-patragreen-600")}>
        {value}
        {unit && (
          <span className="ml-1 align-top text-[0.35em] font-semibold">
            {unit}
          </span>
        )}
      </div>
      <p
        className={cn(
          "t-caption mt-3",
          tone === "dark" ? "text-gray-300" : "text-ash"
        )}
      >
        {label}
      </p>
    </div>
  );
}
