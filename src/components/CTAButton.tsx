"use client";

import Link from "next/link";
import { reportConversion } from "@/lib/tracking";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function CTAButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button whatsapp-track m-auto"
      onClick={e => {
        e.preventDefault();
        reportConversion(href);
      }}
    >
      {children}
    </Link>
  );
}
