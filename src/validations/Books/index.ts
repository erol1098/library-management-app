import { z } from 'zod';

export const bookValidation = (formData: FormData) => {
  const schema = z.object({
    title: z.string().min(2, 'Kitap adı en az 2 karakter olmalıdır.'),
    author: z.string().min(3, 'Yazar adı en az 3 karakter olmalıdır.'),
    genre: z.string().min(3, 'Tür adı en az 3 karakter olmalıdır.'),
  });

  const parse = schema.safeParse({
    title: formData.get('title'),
    author: formData.get('author'),
    genre: formData.get('genre'),
  });

  if (!parse.success) {
    const error = parse.error.format();

    return { error };
  }

  const data = parse.data;

  return { data };
};
