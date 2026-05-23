import { links } from "./constants";

/** Nav sections from `links`, plus hidden `#contact` when Contact component is mounted */
export type SectionName =
  | (typeof links)[number]["name"]
  | "Contact"
  | "Certifications";
