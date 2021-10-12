const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const pokedex = [
  {
    numero: "007",
    nome: "Squirtle",
    tipo: "Water",
    imagem: "/img/Squirtle.png",
    descricao: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrent"
  },
  {
    numero: "",
    nome: "",
    tipo: "",
    imagem: "",
    descricao: "",
    altura: "m",
    peso: "",
    categoria: "",
    habilidade: ""
  },
  {
    numero: "",
    nome: "",
    tipo: "",
    imagem: "",
    descricao: "",
    altura: "m",
    peso: "",
    categoria: "",
    habilidade: ""
  }
];
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.render("index", {
    pokedex,
  });
});
app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});
app.get("/detalhes/:indice", (req, res) => {
  const indice = parseInt(req.params.indice);
  const pokemon = pokedex[indice];
  res.render("detalhes", { pokemon });
});
app.post("/subscription", (req, res) => {
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;
  pokedex.push({
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  })
  res.redirect("/");
});
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
