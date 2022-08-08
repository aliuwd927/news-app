import express, { Request, Response } from "express";
const puppeteer = require('puppeteer');

const app = express();
const port = 4000;

app.get('/server', async (req:Request, res:Response) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url); // URL is given by the "user" (your client-side application)
    const screenshotBuffer = await page.screenshot();

    // Respond with the image
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': screenshotBuffer.length
    });
    res.end(screenshotBuffer);

    await browser.close();
})

app.listen(port);