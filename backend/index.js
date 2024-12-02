import express from "express";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFoundHandler from "./middleware/notFound.js";
import products from "./routes/productsRoute.js";

const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use("/api/products", products);

app.use(notFoundHandler);
app.use(errorHandler);
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
