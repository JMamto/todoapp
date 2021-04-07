const pool = require("./db");

const sql = 'insert into public."Todo"(todo_desc) values ($1) returning *';
const data = ['biking'];

pool.query(sql,data,(err,res) => {

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();
