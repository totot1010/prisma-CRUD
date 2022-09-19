import express, { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import userController from "./controllers/userController";

const app = express();
const fs = require("fs");
const os = require("os");
const hbs = require("hbs");

app.set("view engine", "hbs");
console.log(__dirname);
hbs.registerPartials("/usr/src/app/src" + "/views/partials");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "Home Page",
    content: "当ホームページへようこそ",
    currentYear: new Date().getFullYear(),
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    content: "コンテンツです",
    currentYear: new Date().getFullYear(),
  });
});

app.listen(3000);
