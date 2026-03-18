/* ---------------- TYPES ---------------- */
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  highlights: string[];
  links?: {
    playstore?: string;
    appstore?: string;
    website?: string;
  };
};
