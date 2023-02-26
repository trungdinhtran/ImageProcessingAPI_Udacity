"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const fileUtils_1 = __importDefault(require("./common/fileUtils"));
const app = (0, express_1.default)();
const port = 3000;
app.use(routes_1.default);
app.listen(port, () => {
    fileUtils_1.default.createDirThumnail();
    console.log(`Server started in http://localhost:${port}`);
});
exports.default = app;
