const express = require("express");

const path = require("path");
const app = express();

const routes = require("./routes/index.routes");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../views")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", routes);

app.use((req, res, next) => {
  res.status(404).render("error-404");
});

app.listen(process.env.PORT || 3009, function () {
  console.log("Servidor corriendo en el puerto 3009");
});
