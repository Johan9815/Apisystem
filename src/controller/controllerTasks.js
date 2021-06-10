const sql = require('../database/conex');


module.exports = {
 
    
    async createTask(req,res){
        try {

            let {task}=req.body
            const [rows] = await (await sql).execute('INSERT INTO tasks (task) values (?)',[task])
            res.status(200).send({StatusCode:200,message:'Created',newTask:{id:rows.insertId,task}});
            
        } catch (error) {
            res.status(400).send(error.toString())
        }
    },

    async findAllTasks(req,res){
        try {
            const query = "SELECT * from tasks";
            rows = await (await sql).query(query)
            res.status(200).send(rows[0])
        } catch (error) { 
            res.status(400).send(error.toString())
        }
    },

    async updateTask(req,res){
        try {
            let {updatetask,trash,id}=req.body
            await (await sql).execute(`UPDATE tasks set task = ?, trash = ?, updatedAt = ? WHERE id = ?`,[updatetask,trash,new Date(),id])
            res.status(200).send({StatusCode:200,message:'Updated',updaTaks:{id,updatetask}})
        } catch (error) {
            res.status(400).send(error.toString())
        }
    },

    async delteTask(req,res){
        try {
            let {id}=req.params
           
            const [rows] = await (await sql).execute(`DELETE FROM tasks where id = ?`,[id])
            res.status(200).send({StatusCode:200,message:'Deleted',id:id})
            
        } catch (error) {
            res.status(400).sen(error.toString())
        }
    }

}