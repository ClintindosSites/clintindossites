export const reportConversion = (
  url?: string,
  service?: string,
  value: number = 1
) => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  // Google Ads (Chamou no WhatsApp)
  window.gtag?.("event", "conversion", {
    send_to: "AW-17677408224/K9cRCLf3kMocEOCvn-1B",
    value,
    currency: "BRL",
    event_callback: callback,
  });

  // Meta Pixel
  window.fbq?.("track", "Contact", {
    content_name: service,
    value,
    currency: "BRL",
  });

  // Google Tag Manager
  window.dataLayer?.push({
    event: "whatsapp_click",
    service,
    value,
  });

  // garante que o WhatsApp será aberto
  setTimeout(callback, 500);
};
