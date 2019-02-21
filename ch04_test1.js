const log = msg => console.log(msg);
var url = require('url');

var curURL = url.parse("https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty");

var curStr = url.format(curURL);

var querystring = require('querystring');
var param = querystring.parse(curURL.query);

log(param.query);
log(querystring.stringify(param));
