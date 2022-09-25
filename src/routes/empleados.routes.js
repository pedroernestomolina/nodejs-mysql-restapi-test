import { Router } from 'express'
import { getEmpleadoById, getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado } from '../controllers/empleados.controller.js'

const router = Router()


router.get('/empleados/:id', getEmpleadoById )
router.get('/empleados', getEmpleados )
router.post('/empleados',createEmpleado )
router.patch('/empleados/:id', updateEmpleado)
router.delete('/empleados', deleteEmpleado)


export default router

