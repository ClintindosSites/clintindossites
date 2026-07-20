"use client";

import Link from "next/link";
import { reportConversion } from "@/lib/tracking";

type Props = {
  href: string;
  children: React.ReactNode;
  service?: string;
  origin?: string;
  value?: number;
};

export default function CTAButton({
  href,
  children,
  service,
  origin,
  value = 1,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button whatsapp-track m-auto"
      onClick={e => {
        e.preventDefault();

        reportConversion({
          url: href,
          service,
          origin,
          value,
        });
      }}
    >
      {children}
    </Link>
  );
}
