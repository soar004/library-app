export interface Book {
  id: string;
  title: string;
  authors: string[];
  description?: string;
  tags?: string[];
  coverUrl?: string;
  publicationYear?: number;

  series?: {
    name: string;
    number: number;
  };
}
