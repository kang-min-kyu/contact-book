var myModule = {
  name: "Kim",﻿
  age: 23,
  aboutMe: function(){
    console.log("Hi, my name is " + this.name + " and I'm " + this.age + " year's old.");
  }
};

module.exports = myModule;
