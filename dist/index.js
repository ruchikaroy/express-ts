"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/api", (req, res) => {
    res.status(200).send({ response: "This is a typescript app!" });
});
app.get("/api/hi", (req, res) => {
    res.status(200).send({ response: "Hello!" });
});
app.listen(port, () => {
    console.log(`Now listening on port ${port}!`);
});
