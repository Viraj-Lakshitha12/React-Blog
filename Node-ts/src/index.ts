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


// get all users
app.get('/user/all', async (req: express.Request, res: express.Response) => {
    try {
        let users = await userModel.find();
        res.status(200).send(new CustomResponse(
            200, "find all users", users
        ));
    } catch (error) {
        res.status(100).send("error");
    }

});

//save users
app.post('/user/save', async (req: express.Request, res: express.Response) => {
    try {
        const req_body: any = req.body;
        const userModel = new UserModel({
            username: req_body.username,
            f_name: req_body.f_name,
            l_name: req_body.l_name,
            email: req_body.email,
            password: req_body.password
        });
        let saveUser = await userModel.save();
        saveUser.password = "";
        res.status(200).send(new CustomResponse(
            200, "user saved successfully", saveUser
        ));
    } catch (error) {
        console.error(error);
        res.status(500).send('Error: Unable to save user');
    }
});

//check email password
app.post('/user/auth', async (req: express.Request, res: express.Response) => {

    try {
        const req_body = req.body;
        let user = await UserModel.findOne({email: req_body.email});
        if (user) {
            if (user.password == req_body.password) {
                res.status(200).send(new CustomResponse(
                    200, "success login"
                ));
            } else {
                res.status(401).send(new CustomResponse(401, "Invalid"));
            }
        } else {
            res.status(401404).send(new CustomResponse(404, "user not found"));
        }

    } catch (error) {
        res.status(100).send(error);
    }
})


// ---------------------------------------------- articles------------------------------------

app.post('/article', async (req: express.Request, res: express.Response) => {
    try {
        let req_body = req.body;
        const articleModel = new ArticleModel({
            title: req_body.title,
            description: req_body.description,
            user: req_body.user
        });
        const saveArticles = await articleModel.save();

        // Send a response back to the client
        res.status(200).send(new CustomResponse(
            200, "article saved successfully", saveArticles
        ));
    } catch (error) {
        // Send an error response back to the client
        res.status(500).send(new CustomResponse(100, "error"));
    }
});

//get all of articles
app.get('/article', async (req: express.Request, res: express.Response) => {
    try {
        let req_query: any = req.query;
        let size: number = req_query.size;
        let page: number = req_query.page;


        let allArticles = await articleModel.find().limit(size).skip(size * (page - 1));
        let DocumentCount = await articleModel.countDocuments();
        let pageCount = Math.ceil(DocumentCount / size);

        res.status(200).send(new CustomResponse(200, "find all articles", allArticles, pageCount))

    } catch (error) {
        res.status(100).send("error");
    }
});

app.get('/article/:username', async (req: express.Request, res: express.Response) => {
    let username: string = req.params.username
    let req_query: any = req.query;

    let user = await UserModel.findOne({username: username});
    let size: number = req_query.size;
    let page: number = req_query.page;

    let countDocument: number = await articleModel.countDocuments();
    let pageCount: number = Math.ceil(countDocument / size);
    if (!user) {
        res.status(404).send(new CustomResponse(404, 'user not found'))
    } else {
        let articles = await articleModel.find({user: user.id}).limit(size).skip(size * (pageCount - 1));
        res.status(200).send(new CustomResponse(200, 'articles are found', articles, pageCount))

    }
});
