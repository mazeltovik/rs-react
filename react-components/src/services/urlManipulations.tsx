export const headers = {
  Accept: 'application/json',
  Authorization: 'Bearer xvi06TocPJvBmrQC4yZv',
};
type Obj = {
  [key: string]: string;
};
export function getUrl(key: string, page: string): string {
  const urls: Obj = {
    book: 'https://the-one-api.dev/v2/book',
    movie: 'https://the-one-api.dev/v2/movie',
    character: `https://the-one-api.dev/v2/character?page=${page}&&limit=25`,
  };
  return urls[key];
}

export async function getDataWithId(category: string, id: string) {
  const urls: Obj = {
    book: `https://the-one-api.dev/v2/book/${id}`,
    movie: `https://the-one-api.dev/v2/movie/${id}`,
    character: `https://the-one-api.dev/v2/character/${id}`,
  };
  const res = await fetch(urls[category], {
    headers: headers,
  });
  if (res.ok) {
    return res.json();
  }
}
