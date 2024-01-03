export interface Book {
  id?: string;
  title: string;
  author: string;
  genre: string;
}

export interface Caption {
  caption: string;
  description: string;
}

export interface BookTable {
  caption: Caption;
  header: string[];
  body: Book[];
}
