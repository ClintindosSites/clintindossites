"use client";

import { useEffect } from "react";

interface Props {
  slug: string;
}

export default function ServiceTracker({ slug }: Props) {
  useEffect(() => {
    // Visitou a página
    window.fbq?.("trackCustom", "ViewService", {
      service: slug,
    });

    // Ficou 30 segundos
    const timer = setTimeout(() => {
      window.fbq?.("trackCustom", "Read30Seconds", {
        service: slug,
      });
    }, 30000);

    // Scroll 75%
    const handleScroll = () => {
      const scroll =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (scroll >= 0.75) {
        window.fbq?.("trackCustom", "Scroll75", {
          service: slug,
        });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slug]);

  return null;
}
