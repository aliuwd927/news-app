import express from "express";
import type  { Request , Response } from "express";
import * as puppeteer from "puppeteer";
const cors = require('cors');


const app = express();
const port = 4000;
app.use(cors(),express.json());


app.get("/server", async (req: Request, res: Response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com"); // URL is given by the "user" (your client-side application)
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

//This will tell us when the API is connected with localhost:4000
app.get("/",async (req:Request, res: Response) => {
  res.json(req.params)
})

app.get("/users/:userId/books/:bookId/watch/:watchId", async(req:Request, res: Response)=>{
  
   res.json(req.params);
})

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








Think about using redux to hold our websites in an array format.
Use Fetch to get items from pteer
We can use res.json() as a blueprint 
{

  {
    cnn: first choice
  }

  {
    npr: second cohice
  }

  {
    fox news: third choice
  }
}

*/