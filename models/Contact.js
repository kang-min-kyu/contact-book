var mongoose = require(`mongoose`);

/*
* mongoose.Schema 함수를 사용해서 DB에서 사용할 schema object를 생성
*/
// DB schema
var contactSchema = mongoose.Schema({
  name: {type:String, required:true, unique:true}
  , email: {type:String}
  , phone: {type:String}
});

/*
* mongoose.model함수를 사용하여 contact schema의 model을 생성
* 첫번째 parameter는 mongoDB에서 사용되는 콜렉션의 이름(테이블명(?))이며, 두번째는 mongoose.Schema로 생성된 오브젝트
* DB에 있는 contact라는 데이터 콜렉션을 현재 코드의 Contact라는 변수에 연결해 주는 역할
* 생성된 Contact object는 mongoDB의 contact collection의 model이며 DB에 접근하여 data를 변경할 수 있는 함수들을 가지고 있음
* DB에 contact라는 콜렉션이 존재하지 않더라도 괜찮, 없는 콜렉션은 알아서 생성
*/
var Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
