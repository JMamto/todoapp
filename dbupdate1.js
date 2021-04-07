const pool = require("./db");

const sql = 'update public."Todo" set todo_desc = $1  where todo_id = 7 returning *';
const data = ['hiking'];

pool.query(sql,data,(err,res) => {

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();