export interface TrackingParams {
  url?: string;
  service?: string;
  origin?: string;
  plan?: string;
  value?: number;
}
export interface EventParams {
  service?: string;
  origin?: string;
  plan?: string;
  project?: string;
  value?: number;
  [key: string]: unknown;
}

export const reportConversion = ({
  url,
  service,
  origin,
  plan,
  value = 1,
}: TrackingParams) => {
  const callback = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Google Ads
  window.gtag?.("event", "conversion", {
    send_to: "AW-17677408224/K9cRCLf3kMocEOCvn-1B",
    value,
    currency: "BRL",
    event_callback: callback,
  });

  // Google Analytics 4
  window.gtag?.("event", "generate_lead", {
    service,
    origin,
    plan,
    value,
    currency: "BRL",
  });

  // Meta Pixel
  window.fbq?.("track", "Contact", {
    content_name: service,
    origin,
    plan,
    value,
    currency: "BRL",
  });

  // Google Tag Manager
  window.dataLayer?.push({
    event: "whatsapp_click",
    service,
    origin,
    plan,
    value,
  });

  setTimeout(callback, 500);
};

export const trackEvent = (event: string, params?: EventParams) => {
  window.fbq?.("trackCustom", event, params);

  window.gtag?.("event", event, params);

  window.dataLayer?.push({
    event,
    ...params,
  });
};
