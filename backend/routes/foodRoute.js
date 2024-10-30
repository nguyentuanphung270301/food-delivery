import express from 'express';
import { addFood, listFood, removeFood } from '../controller/foodController.js';
import multer from 'multer';


const foodRoute = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

foodRoute.post('/add', upload.single('image'), addFood)
foodRoute.get('/list', listFood)
foodRoute.delete('/remove', removeFood)





export default foodRoute
