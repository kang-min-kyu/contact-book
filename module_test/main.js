// https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EC%A3%BC%EC%86%8C%EB%A1%9D-%EB%A7%8C%EB%93%A4%EA%B8%B0/Node-js-Module
/**
 * 다른 파일에 있는 object를 불러와서 사용할 수 있는데, 이렇게 코드를 다른 파일로 분리하는 것을 module이라고 함.
 * 한 파일의 object를 다른 파일에서 사용가능하게 하기 위해서는 해당 object를 module.exports에 담아줘야 함.
 * 다른 파일의 module을 불러오기 위해서는 require 함수를 사용
 * require함수에 parameter로 대상 module의 상대위치와 파일이름을 문자열로 넣음
 * js파일만 module로 불러올 수 있기 때문에 파일이름에서 .js는 생략
 * 만약 module이 node_modules폴더에 있다면 위치를 생략할 수 있음. npm install로 설치된 package들이 이 경우에 해당
 */
var m = require("./my-module");
﻿
console.log(m.name);
// Kim
console.log(m.age);
// 23
﻿﻿m.aboutMe();
// Hi, my name is Kim and I'm 23 year's old.
