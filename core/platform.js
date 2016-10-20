

var platform = process.platform;

var platformName = '';
switch(platform){
  case 'linux' : platformName = 'linux';break;
  case 'win32' : platformName = 'windows';break;
}
console.log(platformName);
module.exports = platformName;
