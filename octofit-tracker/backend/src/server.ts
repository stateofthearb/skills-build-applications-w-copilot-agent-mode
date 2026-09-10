import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 8000);

app.use(express.json());

app.get("/", (_request, response) => {
  response.json({ name: "OctoFit Tracker API", status: "ok" });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});