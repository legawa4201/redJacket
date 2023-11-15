import express, { Application } from "express";
import cors from "cors"

import connection from "./config/config";
import v1_router from "./routes/v1_api";
import errorHandler from "./middlewares/errorHandler";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(`/api/v1`, v1_router);

app.use(errorHandler);

connection.sync()
.then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
})
.catch(console.log);
