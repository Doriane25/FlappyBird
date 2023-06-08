const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port =3000;
//const levelRouter = require("./routes/level");

// const corsOption ={
//     origin: "*",
//     credentials: true,
//     optionSuccessStatus: 200
// };

// app.use(cors(corsOption));
// app.use(express.json());
// app.use(
//     express.urlencoded({
//        extended: true, 
//     })
// );

//     app.listen(port, () => {
//         console.log(`Example app listening at http://localhost:${port}`);
//     });

//     var server = app.listen(8081, function() {
//         var host = server.address().address;
//         var port = server.address().port;

//         console.log("Example server listening at http://%s:%s, host, port");
//     });

    // shows hello word on the default link
    // app.get("/", function(req, res) {
    //     res.send("Hello World");
    // });

    // Shows an "ok" message on the default database link
// app.get("/db", (req, res) => {
//     res.json({ message: "ok" });
//   });
  
  // Used to visualize the "characters" table
//   app.use("/characters", levelRouter); // j'avais d'abord characters

    // Error handler middleware//
    // app.use((err, req, res, next) =>{
    //     const statuscode = err.statuscode || 500;
    //     console.error(err.message, err.stack);
    //     res.status(statuscode).json({ message: err.message });
    //     return;
    // });
    //let the "public"folder be seen by everyone 
    // app.use(express.static("public"));




// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'game_js'
});

// Serve the game
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API endpoint to store the score
app.post('/api/score', (req, res) => {
    const { player, score } = req.body;
    // Insert the score into the database
    pool.query('INSERT INTO scores (player, score) VALUES (?, ?)', [player, score], (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).send('Score saved');
      }
    });
  });
  
  app.listen(port, () => {
    console.log('Server is listening on port 3000');
  });




