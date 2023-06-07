export interface Book {
  title: string;
  authors: [
    {
      name: String;
    }
  ];
  cover_edition_key: string;
  price: number;
  subject: string[];
}


export interface BooksResponse {
  works: Book[];
}