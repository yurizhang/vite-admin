const schedule = require('node-schedule');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const ping=()=>{

        let  ping  =  require('child_process').spawn('ping', ['www.baidu.com']);
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
            console.log('data:', all);
        });

      axios({
          method: "get",
          responseType: "json",
          url: 'https://qqlykm.cn/api/ping/ping.php?host='+'www.baidu.com'
      }).then(res=>{
         console.log(res.data) 
      });
}

const  scheduleCronstyle = ()=>{
  //每分钟的第30秒定时执行一次:
    let countTime=1;
    schedule.scheduleJob('30 * * * * *',()=>{
        ping();
        countTime++
        console.log(`第${countTime}次运行:` + new Date());
    }); 
}

console.log(`第1次运行:` + new Date());
ping();
scheduleCronstyle();

module.exports = app;
