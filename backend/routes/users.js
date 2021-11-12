const express = require('express');
const router = express.Router();


//引入mysql模块
const mysql = require("mysql");
//引入文件
const dbConfig = require('../db/conn.js'); 

// console.log(dbConfig)
// //使用DBConfig中配置信息创建一个MySQL连接池
// const mysqlConn = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'matomo',
//   port: 3306
// };
const pool = mysql.createPool(dbConfig);
//响应JSON数据
const responseJSON = function (res, ret) {
  if (typeof ret == 'undefined') {
    res.json({
      code: "0",
      msg: "操作失败"
    });
  } else {
    res.json(ret);
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  pool.getConnection(function (err, connection) {
    const params = req.query || req.params; //前端传的参数（暂时写这里，在这个例子中没用）
    console.log(params);
    connection.query('SELECT * FROM matomo_user order by date_registered Desc', function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  });

  // const response={
  //   username:'Yuri Zhang',
  //   id:1,
  //   email: 'yuri_zhang@126.com'
  // }
  // res.json(response);
});
/* GET users listing. */
router.get('/query', function(req, res, next) {
    const response={
      username:'Yuri Zhang',
      id:1,
      email: 'yuri_zhang@126.com'
    }
    res.json(response);
});

router.get('/ping', function(req, res, next) {

  //ping
    console.log(req.query)

    let  ping  =  require('child_process').spawn('ping', [req.query.ip]);
    let  iconv  =  require('iconv-lite');
    const axios = require("axios");
    var all = "";
        //  var logname = __dirname + '/' + 'log.txt';
    ping.stdout.on('data', data => {    
        // fs.writeFileSync(logname, iconv.decode(data, 'cp936'))
        // let info = fs.readFileSync(logname, 'utf8')
        all += iconv.decode(data, 'cp936')
        // all.push(iconv.decode(data, 'cp936'));
            // res.send(info)
            //  console.log(info)
    });
    ping.stderr.on('data', data => {    
        // console.log(data);
    });
    ping.on('close', code => {
        //console.log('data:', all);

        axios({
          method: "get",
          responseType: "json",
          url: 'https://qqlykm.cn/api/ping/ping.php?host='+req.query.ip
        }).then(res=>{
          res.json([res.data,all]);
        }).catch(()=>{
          res.send(all)
        });        
        
    });



   


  

  //res.json(response);
});

module.exports = router;
