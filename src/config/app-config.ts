import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Talent Insider",
  version: packageJson.version,
  copyright: `© ${currentYear}, Talent Insider.`,
  meta: {
    title: "Talent Insider - Digital Solutions & Software Development",
    description:
      "Talent Insider adalah digital agency yang menyediakan layanan pengembangan website, aplikasi, dan solusi digital modern. Kami membantu bisnis berkembang melalui teknologi yang scalable, cepat, dan user-friendly.",
  },
  wa_number: "6285178137881",
  email: "bisadevindonesia@gmail.com",
  address: "Bekasi, Indonesia"
};