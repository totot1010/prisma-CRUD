import express, { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import userController from "./controllers/userController";

const app = express();
const fs = require("fs");
const os = require("os");
const hbs = require("hbs");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express</h1>");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
  // res.send("aaa");
});

// app.use(express.json());
// app.use("/users", userController);

app.listen(3000);
