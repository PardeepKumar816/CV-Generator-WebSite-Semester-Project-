const express = require('express')
const mysql = require('mysql')


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'pardeep',
	database: 'my_db',
	port: 3306 // default port for MySQL is 3306
  });
  


  async function insertDataToMySQL(){
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

      var sql = "INSERT INTO userdata (name, address,phone,email,education,experience,skills,projects,objective) VALUES ('Pardeep Kumar', 'Jamshoror',334343434,'pardeepkumar@gmail.com','muet','muet','muet','muet','muet')";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });

    connection.end();
  
  }

async function fetchDataFromMySQL() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

  try {
    const [rows, fields] = await connection.execute('SELECT * FROM mytable');
    console.log(rows);
  } catch (error) {
    console.log(error);
  } finally {

    connection.end();
  }
  return fields;
}


function deleteUser(name) {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
   
    const sql = `DELETE FROM users WHERE name = ${name}`;
  
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`Deleted ${result.affectedRows} user(s).`);
    });

    connection.end();
  }