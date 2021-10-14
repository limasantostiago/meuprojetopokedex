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
    numero: "008",
    nome: "Wartortle",
    tipo: "Water",
    imagem: "/img/wartortle.png",
    descricao: "É reconhecido como um símbolo de longevidade. Se sua casca contém algas, esse Wartortle é muito antigo.",
    altura: "1.0 m",
    peso: "22.5 kg",
    categoria: "Turtle",
    habilidade: "Torrent"
  },
  {
    numero: "005",
    nome: "charmeleon",
    tipo: "fire",
    imagem: "/img/charmeleon.png",
    descricao: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e o corta com garras afiadas.",
    altura: "1.1m",
    peso: "19.0",
    categoria: "flame",
    habilidade: "blaze"
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
