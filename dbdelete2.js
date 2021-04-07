const pool = require("./db");

const sql = 'delete from public.category where cat_id = $1 returning *';
const data = [5];

pool.query(sql,data,(err,res) => {

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();