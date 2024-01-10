import { Book } from '@/types/BookTypes';

const baseUrl = process.env.NEXT_PUBLIC_API;

export const getBooks = async () => {
  const response = await fetch(`${baseUrl}/books`);
  const data = await response.json();
  return data as Book[];
};

export const getBook = async (id: number) => {
  const response = await fetch(`${baseUrl}/books/${id}`);
  const data = await response.json();
  return data as Book;
};

export const addBook = async (book: Book) => {
  const response = await fetch(`${baseUrl}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const data = await response.json();
  return data as Book;
};

export const updateBook = async (id: number, book: Book) => {
  const response = await fetch(`${baseUrl}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const data = await response.json();
  return data as Book;
};

export const deleteBook = async (id: number) => {
  await fetch(`${baseUrl}/books/${id}`, {
    method: 'DELETE',
  });
};
