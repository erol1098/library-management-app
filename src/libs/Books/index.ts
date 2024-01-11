'use server';
import { revalidatePath } from 'next/cache';

import { Book } from '@/types/BookTypes';
import { bookValidation } from '@/validations/Books';

const baseUrl = process.env.NEXT_PUBLIC_API;

export const getBooks = async () => {
  const response = await fetch(`${baseUrl}/books`);
  const data = await response.json();
  return data as Book[];
};

export const getBook = async (id: number) => {
  const response = await fetch(`${baseUrl}/books/${id}`);
  const data = await response.json();
  revalidatePath('/kitaplar');
  return data as Book;
};

export const addBook = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const { data, error } = bookValidation(formData);

  if (error) {
    return {
      message: 'Eksik veya hatalı bilgi girdiniz.',
      error,
    };
  }

  const response = await fetch(`${baseUrl}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 201) {
    console.log('response.status !== 201', response.status);
    return {
      message: 'Kitap eklenirken bir hata oluştu.',
      book: null,
      error,
    };
  }
  const book = await response.json();
  revalidatePath('/kitaplar');

  return {
    message: 'Kitap başarıyla eklendi.',
    book,
    error,
  };
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
  try {
    await fetch(`${baseUrl}/books/${id}`, {
      method: 'DELETE',
    });
    revalidatePath('/kitaplar');
    return {
      message: 'Kitap başarıyla silindi.',
    };
  } catch (error) {
    return {
      message: 'Kitap silinirken bir hata oluştu.',
    };
  }
};
