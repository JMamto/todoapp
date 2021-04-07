const pool = require("./db");

const sql = 'update public.assignment set todo_id = $1, cat_id = $2  where assign_id = 3 returning *';
const data = [7, 3];

pool.query(sql,data,(err,res) => {

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();