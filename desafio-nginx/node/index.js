const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'user',
    password: 'pass',
    database:'nodedb'
};
const mysql = require('mysql')
var connection = mysql.createConnection(config)



app.get('/', (req,res) => {

   connDb(res);

})

function connDb(res){

    const sql = `INSERT INTO people(name) values('Alex')`;
    connection.query(sql);
    connection.query("SELECT * FROM people", function (err, result, fields) {
        sendResponse(res, result);
    });

}

 function sendResponse(res, result) {
    var rows =  JSON.stringify(result);  
    rows =  JSON.parse(rows);   

    var html = `
    <h1>Full Cycle Rocks!</h1>
    <table border="1">
    <tr>
    <th>Id</th>
    <th>Nome</th>
    </tr>`;

    for (let i=0; i<rows.length; i+=1) {
        var html = html +`     
        <tr>
        <td>`+rows[i].id+`</td>
        <td>`+rows[i].name+`</td>
        </tr>`;
    }

    html = html + `</table>`;

    res.send(html);
}




app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})