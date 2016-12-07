var moment = require('moment')

// DEBUGログ出力
function debug(message) {
    var date = moment().format('【YYYY-MM-DD HH:mm:ssZ】');
    console.log(date + '【DEBUG】' + message);
};

// INFOログ出力
function info(message) {
  var date = moment().format('【YYYY-MM-DD HH:mm:ssZ】');
  console.log(date + '【INFO】' + message);
};

// WARNログ出力
function warn(message) {
  var date = moment().format('【YYYY-MM-DD HH:mm:ssZ】');
  console.log(date + '【WARN】' + message);
};

// CRETICALログ出力
function cretical(message) {
  var date = moment().format('【YYYY-MM-DD HH:mm:ssZ】');
  console.log(date + '【CRETICAL】' + message);
};

module.exports = {
  debug: debug,
  info: info,
  warn: warn,
  cretical: cretical
}
