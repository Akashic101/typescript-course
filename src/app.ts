import express from "express"; //When using the ES6 import you will get typescript-support
// const express = require("express"); This is the commonJS import which is default in Node

const app = express();

app.listen(3000);