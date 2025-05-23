import { error } from 'console';
import express from 'express'
const app = express();
import fs from "fs/promises";
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// i write code from here

app.get("/search", async (req, res) => {
        const basicData = await fs.readFile("node.js/week2/documents.json", { encoding: "utf8" });
        const data = JSON.parse(basicData);
        const query = req.query.q;
        res.send(search(query, data));
});

app.get("/documents/:id", async (req, res) => {
    const basicData = await fs.readFile("node.js/week2/documents.json", { encoding: "utf8" });
        const data = JSON.parse(basicData);
        const {id} = req.params;
        res.send(findDocument(data, id));
});

app.post("/search", async (req, res) => {
  const basicData = await fs.readFile("node.js/week2/documents.json", { encoding: "utf8" });
        const data = JSON.parse(basicData);
        const query = req.query.q;
        const fields = req.body.fields;
        console.log(fields);

        if(query && fields){
          return res.status(404);
        } else if(fields){
          res.send(search(fields, data));
        } else if (query){
          res.send(search(query, data));
        } else {
          res.send(data)
        }
})

function search(q, data){
    if(!q){
        return data;
    } else {
      let searchResult = [];
        data.forEach((item) => {
          if(item.id == q || item.name == q || item.price == q || item.description == q || item.type == q || item.value == q){
            searchResult.push(item);
          }
        })
        return searchResult;
    }
}

function findDocument(data, id){
    data.forEach((item) => {
      //works, but doesn't return value... Why?
      if(item.id == id){
        console.log(item)
        return item;
      }
    })
  }