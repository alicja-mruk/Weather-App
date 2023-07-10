export type ConfigType = {
  baseUrl: string;
  apiKey: string;
  googleUrl: string;
  googleApiKey: string;
};

const config: ConfigType = {
  baseUrl: process.env.BASE_URL ?? '',
  apiKey: process.env.API_KEY ?? '',
  googleUrl: process.env.GOOGLE_URL ?? '',
  googleApiKey: process.env.GOOGLE_API_KEY ?? '',
};

export default config;
