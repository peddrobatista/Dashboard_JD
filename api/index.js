import express from "express";
import dataRoutes from "./routes/datas.js"
import cors from 'cors';

const port = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", dataRoutes);

app.listen(port, () => console.log(`Rodando na porta ${port}...`));

// npm start
 