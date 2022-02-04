"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var circumference_1 = require("./circumference");
var rectangle_1 = __importDefault(require("./rectangle"));
console.log(rectangle_1.default(3, 4));
console.log(circumference_1.circumferenceArea(2));
