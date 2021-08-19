import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import {postRoutes} from './routes/posts'
const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes)
const CONNECTION_URL = "mongodb+srv://bikash:bikash123@cluster0.j6es8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.port | 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
}))
.catch((error)=>{
    console.log(error.message);
})

mongoose.set('useFindAndModify',false); 