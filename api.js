class api {
    constructor(app,con){
        this.app = app;
        this.con = con;
    }

    getEndpoint(mysql_query){
        this.app.get('/' , (req, res) => {
            this.con.query(mysql_query, (err, result)=>{
              if (err){
                res.send('error');
              }else{
                res.send(result);
              }
            });
        });
    }


    postEndpoint(mysql_query){
        this.app.post('/' , (req, res) => {
          const data = req.body;
          this.con.query(mysql_query,data, (err, result)=>{
            if (err){
              res.send('error');
            }else{
              res.send(result);
            }
          } ); 
        })
    }

    putEndpoint(mysql_query){
        this.app.put('/:id' , (req, res) => {
            const data = [req.body.name,req.params.id];
            this.con.query(mysql_query,data, (err, result)=>{
              if (err){
                res.send('error');
              }else{
                res.send(result);
              }
            })
        });
    }

    deleteEndpoint(mysql_query){
        this.app.delete('/:id' , (req, res) => {
            let id = req.params.id;
            this.con.query(mysql_query,id, (err, result)=>{
              if (err){
                throw err;
              }else{
                res.send(result);
              }
            });
        });
    }

}


module.exports = api;

  


//   app.delete('/:id' , (req, res) => {
//     let id = req.params.id;
//     con.query("DELETE FROM users WHERE UserID = ?",id, (err, result)=>{
//       if (err){
//         throw err;
//       }else{
//         res.send(result);
//       }
//     });
//   });