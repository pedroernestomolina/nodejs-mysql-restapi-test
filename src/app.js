import express from 'express'
import empleadosRoutes from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

//creando las rutas del proyecto
app.use(indexRoutes)
app.use('/api',empleadosRoutes)

//en caso de no encontrar ninguna de las rutas definidas
app.use((req,res,next) => {
    res.status(404).json({
        message:"ruta no encontrado"
    })
})

export default app