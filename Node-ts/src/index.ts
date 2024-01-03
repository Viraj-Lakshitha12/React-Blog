import express from 'express'
import e from "express";
import bodyParser from "body-parser";
import mongoose, {Schema, Types} from "mongoose";
import UserModel from "./models/userModel";
import userModel from "./models/userModel";
import CustomResponse from "./dtos/customResponse";
import ArticleModel from "./dtos/articleModel";
import {ObjectId} from 'mongoose';
import articleModel from "./dtos/articleModel";
import dotenv from 'dotenv';
import * as process from "process";
import jwt, {Secret} from 'jsonwebtoken'
import UserRoutes from "./routes/userRoutes";
import ArticlesRoutes from "./routes/articlesRoutes";

dotenv.config();

let app = express();
app.use(bodyParser.json());

interface user {
    id: string,
    name: string,
    salary: string
}

mongoose.connect(process.env.MONGO_URL as string);
const db = mongoose.connection

db.on('error', (error) => {
    console.log("DB error : " + error);
});

db.on('open', () => {
    console.log("DB OK");
})

let allUsers: user[] = [];
app.listen(8080, () => {
    console.log("Server started 8080");
});


// ------------------------------------ user ------------------------------

app.use('/user', UserRoutes);


// ---------------------------------------------- articles------------------------------------

app.use('/article', ArticlesRoutes);