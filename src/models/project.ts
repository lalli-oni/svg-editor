import type { Image } from "./image";

export interface Project {
	id: string;
	name: string;
	isDirty: boolean;
	images: Array<Image>;
}