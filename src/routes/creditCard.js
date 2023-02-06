import express from "express";
import { store, list } from "../controllers/creditCardController.js";
import { getCode } from "../utils/exception.utils.js";

const router = express.Router();

router.get('/list', async (req, res) => {
    try {
        res.status(200).send(await list())
    } catch(e) {
        console.log(e)
        res.status(getCode(e)).send(JSON.parse(e.message));
    }
});

router.post('/create', async (req, res) => {
    try {
        res.status(201).send(await store(req.body))
    } catch(e) {
        res.status(getCode(e)).send(JSON.parse(e.message));
    }
});

export default router;