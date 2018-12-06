var axios = require('axios');
// 引入node文件系统
var fs = require('fs');


//清空原有的静态化文件目录
function emptyDir() {
  console.log('删除原有目录(如果有的话)');
  var fileUrl = './dist'; //要删除的文件夹 url
  //删除所有的文件(将所有文件夹置空)
  var files = fs.readdirSync(fileUrl); //读取该文件夹
  files.forEach(function (file) {
    var stats = fs.statSync(fileUrl + '/' + file);
    if (stats.isDirectory()) {
      emptyDir(fileUrl + '/' + file);
    } else {
      fs.unlinkSync(fileUrl + '/' + file);
      console.log("删除文件" + fileUrl + '/' + file + "成功");
    }
  });

  //fs.rmdir 这个方法只能删除目录，不能删除文件  
  fs.rmdir('dist', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('删除目录成功');
  })
}

//生成存放静态化页面文件夹
function creatDir() {
  fs.mkdir('dist', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('创建目录成功');
  })
}

/*
 * 执行静态化方法
 * */
exports.runGenerate = function (req, res) {
  console.log("start generate");
  res.render('generate', {
    title: 'generate',
    message: ''
  });

  new Promise(function (resolve, reject) {
    axios.get('http://localhost:3000/login')
      .then(data => {
        if (data.status == 200 && data.data) {

          //清空原有目录
          emptyDir();

          //生成文件夹
          creatDir();

          //生成静态化页面
          fs.exists("./dist/login.html", function (exists) {
            if (!exists) {
              fs.writeFile('./dist/login.html', data.data, function (err) {
                if (err) {
                  return console.log(err);
                } else {
                  console.log('login.html ------- success');
                }
              });
            }
          });
          resolve({
            success: true
          });
        }
      })
      .catch(err => {
        console.log(err);
        resolve({
          success: false,
          error: JSON.stringify(err)
        });
      });
  })
};
