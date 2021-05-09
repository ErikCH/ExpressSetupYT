import { db } from "../db/index.js";

import express from "express";
const router = express.Router();

const getUsers = router.get("/getUsers", function (req, res) {
  db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

export default getUsers;
