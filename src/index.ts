import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: port ${port}`);
});
