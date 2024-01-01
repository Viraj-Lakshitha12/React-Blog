import mongoose, {Schema, Types} from "mongoose";
import ObjectId = module

interface myArticles extends mongoose.Document {
    title: string,
    description: string,
    publishedDate: Date,
    user: ObjectId
}


let articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    publishedDate: {type: String, required: true, default: Date.now()},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},

});
const ArticleModel = mongoose.model('Articles', articleSchema)

export default ArticleModel;

