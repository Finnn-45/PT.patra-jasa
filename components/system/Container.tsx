import { cn } from "@/lib/utils";
import { createElement, type ElementType, type ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
};

/** Fluid site container with consistent max-width + responsive gutters. */
export default function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return createElement(Tag, { className: cn("container-site", className) }, children);
}
