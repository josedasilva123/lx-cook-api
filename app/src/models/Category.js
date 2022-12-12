"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    slug: { type: String, required: true },
    name: { type: String, required: true },
}, {
    timestamps: true,
});
const Category = (0, mongoose_1.model)("Category", categorySchema, "categories");
exports.default = Category;
