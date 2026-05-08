declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Conversão principal Google Ads
 */
export const reportConversion = (service?: string, value: number = 1) => {
  // GOOGLE ADS
  window.gtag?.("event", "conversion", {
    send_to: "AW-17677408224/8Zy7CLmXj5ocEOCvn-1B",
    value,
    currency: "BRL",
  });

  // GOOGLE ANALYTICS
  window.gtag?.("event", "manual_event_CONTACT", {
    service,
    value,
    currency: "BRL",
  });

  // META PIXEL
  window.fbq?.("track", "Lead", {
    content_name: service,
    value,
    currency: "BRL",
  });

  // GTM
  window.dataLayer?.push({
    event: "manual_event_CONTACT",
    service,
    value,
  });
};

/**
 * Clique em Saiba Mais
 */
export const trackViewService = (service?: string) => {
  window.gtag?.("event", "view_service", {
    service,
  });

  window.dataLayer?.push({
    event: "view_service",
    service,
  });
};

/**
 * Scroll profundo
 */
export const trackScrollDepth = (percent: number) => {
  window.gtag?.("event", "scroll_depth", {
    percent,
  });

  window.dataLayer?.push({
    event: "scroll_depth",
    percent,
  });
};
