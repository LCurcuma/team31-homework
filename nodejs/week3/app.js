import knex from 'knex'
// import "dotenv/config";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");
  console.log(req.query);

  //implementing the allowed filters (column names) and allowed directions (asc/desc)
  const allowedFilters = ["id", "first_name", "last_name", "email", "phone"];
  const allowedDirections = ["asc", "desc"];

  if ("sort" in req.query) {

    //so... taking the column and direction from the query string
    const [column, direction] = req.query.sort.toString().split(" ");

    //checking if the column is in the allowed filters and if the direction is in the allowed directions
    //if we shouldn't have a direction, so i will remove it
    //but i guess, it's better to have also direction, because user can(or want) sort by asc or desc
    if (allowedFilters.includes(column) && allowedDirections.includes(direction)) {
      query = query.orderBy(column, direction);
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});