import express from "express";
import type  { Request , Response } from "express";
import * as puppeteer from "puppeteer";
const cors = require('cors');


interface ServerQuery{
  url:string;
}

interface CustomRequest extends Request{
  query:{url:string};
}

const app = express();
const port = 4000;
app.use(cors(),express.json());

app.get("/", async (req: CustomRequest /*Request<{},{},{},ServerQuery>*/, res: Response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let url:string = req.query.url;
  // https://hn.algolia.com/ is a SPA, so the initial HTML does not have any content.  Need to wait a bit for the JS to fetch actual data.
  await page.goto(url, { waitUntil: 'networkidle2'}); // URL is given by the "user" (your client-side application)
  const contentBuffer = await page.$$eval('article',(articalTag => {
    return articalTag.map((element)=>{
      return element.innerHTML;
    })
  }));
  res.json(contentBuffer);
  
  await browser.close();
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



//Store in a JSON File
https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_text_value.js

https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_title.js
 
//Problbay to render
https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_list_of_links.js




//THINK AOBUT THISSS!!!
Step 1:
https://github.com/checkly/puppeteer-examples/blob/master/2.%20search/duck_duck_go.js

Step: 1:
https://www.nbcnews.com/search/?q=${someKeyword}
https://vox.com
https://foxnews.com


Step 2:
https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_text_value.js

https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_title.js

Step 3:
https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_list_of_links.js
*/





//Below is pokemon

// app.get("/pokemon/:name", (req, res) => {
//     // const data = req.params.name;
//     const {name} = req.params;
//     return res.json(name)
// })

// app.post("/pokemon/",(req, res) => {
//     const data = {name: req.body.name}
//     res.json(data)
//     console.log(res.json(data))
//   })