const tools = require('./tools');

const str = '<h1 title="你好">hello world</h1>'

console.log('格式化时间', tools.dateFormat(new Date()));

console.log('格式化标签', tools.htmlEnEscape(str));

console.log('还原标签', tools.htmlDeEscape('&lt;h1 title=&quot;你好&quot;&gt;hello world&lt;/h1&gt;'));

