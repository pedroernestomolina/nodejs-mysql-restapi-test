import { pool } from '../db.js'

export const getEmpleadoById = async (req, res) =>{
    try {
        const id = req.params.id
        const [rows] = await pool.query('SELECT * from employee where Id = ?', [id])
        if (rows.length>0)
            res.json(rows[0])
        else
            throw new Error("empleado no encontrado")
    } catch (error) {
        return res.status(500).json({"message":error.message})
    }
} 

export const getEmpleados = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * from employee')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
} 

export const createEmpleado =async (req, res) => {
    try {
        const {nombre, salario} = req.body
        const [rows] = await pool.query('INSERT INTO employee (nombre, salario) values(?,?)', [ nombre, salario])
        res.send({
            id: rows.insertId,
            nombre,
            salario
        })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteEmpleado = async (req, res) =>{
    try {
        const id = req.body.id
        const [rows] = await pool.query('delete from employee where Id = ?', [id])
        if (rows.affectedRows>0)
            res.sendStatus(204)
        else
            throw new Error("empleado no encontrado");
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const updateEmpleado =async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, salario}= req.body
        const [rows] = await pool.query('update employee set nombre=IFNULL(?,nombre), salario=IFNULL(?,salario) where Id = ?', [nombre, salario, id])
        console.log(rows)
        if (rows.affectedRows>0)
            res.send('empleado actualizado')
        else
            throw new error("empleado no encontrado")
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}