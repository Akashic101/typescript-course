"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //When using the ES6 import you will get typescript-support
// const express = require("express"); This is the commonJS import which is default in Node
const app = (0, express_1.default)();
app.listen(3000);
