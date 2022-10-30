import { rest } from 'msw';

export const handlers = [
  rest.get('https://the-one-api.dev/v2/book', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cf5805fb53e011a64671582',
            name: 'The Fellowship Of The Ring',
          },
        ],
      })
    );
  }),
  rest.get('https://the-one-api.dev/v2/movie', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cd95395de30eff6ebccde56',
            name: 'The Lord of the Rings Series',
          },
        ],
      })
    );
  }),
  rest.get('https://the-one-api.dev/v2/character', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccfbbe',
            name: 'Adanel',
          },
        ],
      })
    );
  }),
  rest.get('https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cf5805fb53e011a64671582',
            name: 'The Fellowship Of The Ring',
            page: '654',
          },
        ],
      })
    );
  }),
];
