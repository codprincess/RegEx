//实例化
//1.字面量 var reg = \/bis/b\g;
//2.构造函数 var reg=new RegExp('\\bis\\b',g);
// 二.修饰符
// 1.    g    ：global

// 2.    i      ：ignore case ,忽略大小写 默认是大小写敏感
// 3.    m:      multiple lines  多行搜索
//使用，浏览器测试

var reg = /\bis\b/;
'He is a boy. It is a dog. what is she'.replace(reg, 'IS')//He IS a boy ...
var reg = /\bis\b/g;//全局
'He is a boy. It is a dog. what is she'.replace(reg, 'IS')//is=>IS

var reg = new RegExp('\\bis\\b', 'g')

'He is a boy.Is he?'.replace(reg, 'IS')//is=>IS

var reg = new RegExp('\\bis\\b', 'gi')

'He is a boy.Is he?'.replace(reg, 'IS')//He IS a boy.IS he?