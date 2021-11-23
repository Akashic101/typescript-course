import express, { Request, Response, NextFunction } from "express"; //When using the ES6 import you will get typescript-support
// const express = require("express"); This is the commonJS import which is default in Node

import todoRoutes from "./routes/todos";

const app = express();

app.use("/todos", todoRoutes);

//Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

app.listen(3000);
