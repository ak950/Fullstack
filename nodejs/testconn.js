let mysql=require('mysql');
let connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'karthu@123',
database:'testDb'});
connection.connect(function(err){
if(err){
return console.err('err' + err.message);}
console.log('connected to mysql server')});
connection.end(function(err){
if(err){
return console.err('err' + err.message);}
console.log('close mysql server')});