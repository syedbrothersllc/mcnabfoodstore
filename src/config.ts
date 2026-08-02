export const STORE = {
  name: "McNab Food Store",
  tagline: "Your neighborhood stop for snacks, drinks & essentials",
  address: "8013 W McNab Rd, Tamarac, FL 33321",
  phone: "", // add e.g. "+1 (954) 555-0123" to enable the click-to-call button
  hoursText: "Open Daily · 8 AM – 9 PM",
  payments: [
    { label: "EBT / SNAP Accepted", icon: "banknote" },
    { label: "Cards", icon: "creditCard" },
    { label: "Cash", icon: "banknote" },
    { label: "Apple Pay", icon: "smartphone" },
    { label: "Google Pay", icon: "smartphone" },
  ],
  // Used to compute the live "Open now / Closed" badge. Same hours every day for now —
  // adjust openHour/closeHour (24hr) or extend into a per-day map if hours ever vary.
  hours: { openHour: 8, closeHour: 21 },

  // Backend endpoints — unchanged from the current site
  itemsApiUrl: "https://store-items-api.syedbrothersllc.workers.dev/api/items",
  formEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoRPM_AjhvplF4s-cBodntSrcVlJ2ZsRiq3YAF87u0jhSHVw/viewform?embedded=true",

  // Auto-generated Google Maps embed — no API key required
  get mapEmbedSrc() {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.address)}&output=embed`;
  },
  get mapDirectionsUrl() {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.address)}`;
  },
};
