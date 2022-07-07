import express from 'express';
const router = express.Router();

import {addCat, getAllCats, filterCatsByAge} from '../controls/catsCont';

router
.post('/add-cat', addCat)
.patch('/get-cats-age', filterCatsByAge)
.get('/get-all-cats', getAllCats)

export default router

