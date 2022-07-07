import express from "express";
const app = express();
const port: number = 3001;
app.use(express.json());
app.use(express.static("public"));



import router from "./routes/routes";
app.use("/api", router);

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
  });