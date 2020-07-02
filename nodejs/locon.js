let mysql=require('mysql');
let connect=require('./l.js');
let connection=mysql.createConnection(connect);
let sqlCom="INSERT INTO employees (id, name, age, city) VALUES ('2', 'jeet Kumari', '26', 'hyderabad')"; 
connection.query(sqlCom,(err,results)=>{
if(err){
return console.error(err.message);
}
console.log('record is inserted') ;
});
connection.end();