export type ProjectStatus = "released" | "testing" | "development";

export interface ProjectArtwork {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  index: number;
  name: string;
  description: string;
  year: number;
  platforms: string[];
  href: string;
  status?: ProjectStatus;
  artwork?: ProjectArtwork;
}
