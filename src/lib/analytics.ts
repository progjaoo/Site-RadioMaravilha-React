export const GA_TRACKING_ID = "G-GPTD1QBWNS";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const pageview = (url: string) => {
  if (!window.gtag) return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
