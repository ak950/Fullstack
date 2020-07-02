var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "karthu@123",  
database: "testDb"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "UPDATE employees SET city = 'Delhi' WHERE city = 'Allahabad'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record(s) updated");  
});  
});  