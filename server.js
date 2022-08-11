/*============================[Modulos]============================*/
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import path from "path";

const app = express();

/*============================[Middlewares]============================*/

/*----------- Session -----------*/
app.use(
  session({
    secret: "pepe",
    resave: false,
    saveUninitialized: false,
  })
);

/*----------- Motor de plantillas -----------*/
app.set("views", path.join(path.dirname(""), "./src/views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/*============================[Base de Datos]============================*/
const usuariosDB = [];

/*============================[Rutas]============================*/
app.get("/", (req, res) => {});

app.get("/login", (req, res) => {});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {});

app.post("/register", (req, res) => {});

app.get("/datos", (req, res) => {});

app.get("/logout", (req, res) => {});

/*============================[Servidor]============================*/
const PORT = 4141;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});
