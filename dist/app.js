"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //When using the ES6 import you will get typescript-support
// const express = require("express"); This is the commonJS import which is default in Node
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use("/todos", todos_1.default);
//Error-handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
