const pool = require("./db");

pool.query('select * from public.category', (err, res) => {

    try{
        console.log(res.rows);
    }catch (err){
        console.log(err.message);
    }
});

pool.end();