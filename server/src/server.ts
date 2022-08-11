import express from "express";
import type  { Request , Response } from "express";
import * as puppeteer from "puppeteer";

const app = express();
const port = 4000;

app.get("/server", async (req: Request, res: Response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://pokeapi.co/api/v2/pokemon/pikachu"); // URL is given by the "user" (your client-side application)
  const screenshotBuffer = await page.screenshot();

  // Respond with the image
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": screenshotBuffer.length,
  });
  res.end(screenshotBuffer);

  await browser.close();
});

app.get("/pokemon/:name", async (req, res) => {
  const data = { name: req.params.name };
  res.json(data);
});

app.listen(port);


/*

app.get("/server", async (req: Request, res: Response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(req.query.url); // URL is given by the "user" (your client-side application)
  const screenshotBuffer = await page.screenshot();

  // Respond with the image
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": screenshotBuffer.length,
  });
  res.end(screenshotBuffer);

  await browser.close();
});




*/