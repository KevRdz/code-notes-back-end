import { Router } from "express";
import * as notesCtrl from '../controllers/notes.js'
import {decodeUserFromToken, checkAuth} from '../middleware/auth.js'
const router = Router()

// Public Routers
router.get('/', notesCtrl.index)


// ProtectedRouters
router.use(decodeUserFromToken)
router.post('/', checkAuth, notesCtrl.create)


export {
  router
}