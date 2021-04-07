const pool = require("./db");

const sql = 'insert into public.assignment(todo_id, cat_id) values ($1, $2) returning *';
const data = [4, 2];

pool.query(sql,data,(err,res) => {

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();