var a = [1,2];
var b  =[1,2,3]

var isSubsetOf =  (a, b) => { return b.filter(v => a.indexOf(v) > -1).length == a.length;}
var isSupersetOf = (a, b) => { return isSubsetOf(b,a);}
