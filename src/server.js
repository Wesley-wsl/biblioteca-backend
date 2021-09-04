import express from "express";
import cors from "cors";
import router from "./routes/api.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Running in Port ${PORT}`);
});
