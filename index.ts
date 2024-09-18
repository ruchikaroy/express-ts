import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ response: "This is a typescript app!" });
});
app.get("/api/hi", (req: Request, res: Response) => {
  res.status(200).send({ response: "Hello!" });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}!`);
});
