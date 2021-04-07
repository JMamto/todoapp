const pool = require("./db");

const sql = 'update public.category set cat_desc = $1  where cat_id = 4 returning *';
const data = ['workstation'];

pool.query(sql,data,(err,res) => {

    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});

pool.end();