import express from 'express';
import { metedata, getRows, addRow, updateValue, deleteValue } from '../controllers/data.js';

const router = express.Router();

router.get("/metadata", metedata);
router.get("/rows", getRows);
router.post("/addRow", addRow);
router.put("/updateValue", updateValue);
router.delete("/deleteValue", deleteValue);

export default router;

// a API tá funionando