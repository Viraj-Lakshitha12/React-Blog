import express from 'express'
import e from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserModel from "./models/userModel";
import userModel from "./models/userModel";

let app = express();
app.use(bodyParser.json());

interface user {
    id: string,
    name: string,
    salary: string
}

mongoose.connect("mongodb://localhost/blog");
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

app.get('/user/all', async (req: express.Request, res: express.Response) => {
    try {
        let users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(100).send("error");
    }

});
//
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
        await userModel.save();
        res.status(200).send('Success: User saved');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error: Unable to save user');
    }
});
