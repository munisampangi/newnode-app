const sqlite=require('sqlite3').verbose();
const db=new sqlite.Database("./database.db",sqlite.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)
});

const sql=`create table users(username,password);`
db.run(sql)

const moviesSql=`create table movies(ID integer primary key,movie,hero,director,genere);`
db.run(moviesSql)