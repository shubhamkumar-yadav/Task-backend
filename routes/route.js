import express from 'express';
import { getUser,getData } from '../controller/user-controller.js';
const route = express.Router();
route.post('/formData',getUser);
route.get('/getData/:secret',getData);
export {route};