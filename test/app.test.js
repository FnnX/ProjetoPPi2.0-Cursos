const test = require("node:test");
const assert = require("node:assert/strict");
const { createApp, prepararBanco } = require("../app");
const { sequelize } = require("../models");

let servidor;
let baseUrl;

test.before(async () => {
  await prepararBanco();
  servidor = createApp().listen(0);
  await new Promise((resolve) => servidor.once("listening", resolve));
  baseUrl = `http://127.0.0.1:${servidor.address().port}`;
});

test.after(async () => {
  await new Promise((resolve, reject) => {
    servidor.close((erro) => (erro ? reject(erro) : resolve()));
  });
  await sequelize.close();
});

test("a página inicial responde e apresenta o título", async () => {
  const resposta = await fetch(`${baseUrl}/`);
  const html = await resposta.text();
  assert.equal(resposta.status, 200);
  assert.match(html, /Cursos e Oficinas/);
});

test("a listagem apresenta as publicações do banco", async () => {
  const resposta = await fetch(`${baseUrl}/publicacoes`);
  const html = await resposta.text();
  assert.equal(resposta.status, 200);
  assert.match(html, /Cursos cadastrados/);
  assert.match(html, /Introdução ao Git/);
  assert.match(html, /<strong>\d+<\/strong> registros/);
});

test("a página de detalhes apresenta uma publicação", async () => {
  const resposta = await fetch(`${baseUrl}/publicacoes/1`);
  const html = await resposta.text();
  assert.equal(resposta.status, 200);
  assert.match(html, /Introdução ao Git/);
  assert.match(html, /Fulano de Tal/);
});

test("o endpoint de saúde responde em JSON", async () => {
  const resposta = await fetch(`${baseUrl}/saude`);
  const dados = await resposta.json();
  assert.equal(resposta.status, 200);
  assert.equal(dados.status, "ok");
});

test("um endereço inexistente retorna 404", async () => {
  const resposta = await fetch(`${baseUrl}/nao-existe`);
  const html = await resposta.text();
  assert.equal(resposta.status, 404);
  assert.match(html, /Página não encontrada/);
});
