var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var ENV = require('./env.json')

global.index=0;

const HOST=ENV.HOST;
const USER=ENV.USER;
const PASSWORD=ENV.PASSWORD;
const DATABASE=ENV.DATABASE;

var database = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE
});

function CHECK_USER_AVAILABILITY(user){
  return new Promise(
    (resolve, reject)=>{
      database.query((("SELECT useer FROM users WHERE useer = '").concat(user,"'"))
        ,function(err,result){
          if (err) throw err;
          if (typeof (result[0]) === "undefined"){
            console.log("DISTINTO")
            var sw=true;
          }else{
            console.log("IGUAL")
            var sw=false;
          }
          return err ? reject(err): resolve(sw)
        }
      );
    }
  );
}

function SAVE_USER(user, password, name, birth, cellphone){
  return new Promise(
    async (resolve, reject)=>{
      try{
        var sw = await CHECK_USER_AVAILABILITY(user);
        console.log(sw)
        if (sw){
          database.query(
            (("INSERT INTO users (useer, passwoord, name, birthday, cellphone) VALUES(").concat(
              '"',user,'"',
              ",",
              '"',password,'"',
              ",",
              '"',name,'"',
              ",",
              '"',birth,'"',
              ",",
              cellphone,
              ")"
              )
            )
            ,function(err, result){
              if (err) throw err;
              return err ? reject(err): resolve(1)
            }
          );
        }else{
          return resolve(0)
        }
        
      }catch(err){
        console.error();
      }
    }
  );
}

function SIGNIN(user, password){
  return new Promise(
    (resolve, reject)=>{
      database.query((("SELECT useer, passwoord, name, birthday, cellphone FROM users WHERE useer = '").concat(user,"'")),
      function(err, result){
        if (err) throw err;
        console.log(result)
        if ((password) === (result[0].passwoord)){
          var res=result;
        }else{
          var res={useer:"xxxx",paswoord:"xxxx",name:"xxxx",birthday:"xxxx",cellphone:"xxxx"}
        }
        return err ? reject(err):resolve(res)
      })
    }
  )
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/input", function(req, res, next){
  var user = req.body.user;
  var password = req.body.password;
  var name = req.body.name;
  var birth = req.body.birth;
  var cellphone = req.body.cellphone;
 
  async function SAVE(){
    try{
      var response=await SAVE_USER(user, password, name, birth, cellphone);
      console.log(response);
      res.json(response);
    }catch{error}{
      console.log(error);
      res.json(0);
    }
  }

  
  SAVE();

});

router.post("/signin", function(req, res, next){

  var user = req.body.user;
  var password = req.body.password;
  console.log("SIGNIN");
  async function SIGN(){
    var data= await SIGNIN(user,password);
    res.json(data);
  }

  SIGN();
})

module.exports = router;
