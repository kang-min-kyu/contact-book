var express = require(`express`);
var mongoose = require(`mongoose`);
var app = express();

/*
* mongoose에서 내는 몇가지 경고를 안나게 하는 코드. 이 부분이 없어도 실행에는 아무런 문제가 없음
* https://mongoosejs.com/docs/deprecations.html
*/
mongoose.set(`useNewUrlParser`, true);
mongoose.set(`useFindAndModify`, false);
mongoose.set(`useCreateIndex`, true);
mongoose.set(`useUnifiedTopology`, true);

/*
* node.js에서 기본으로 제공되는 process.env 오브젝트는 환경변수들을 가지고 있는 객체
* DB connection string을 MONGO_DB라는 이름의 환경변수에 저장하였기 때문에 node.js코드상에서 process.env.MONGO_DB로 해당 값을 불러올 수 있는것임
* mongoose.connect("CONNECTION_STRING")함수를 사용해서 DB를 연결할 수 있음
* ex) mongoose.connect("mongodb+srv://root:kang3593@cluster0-chyyt.mongodb.net/test?retryWrites=true&w=majority")
*/
mongoose.connect(process.env.MONGO_DB);

/*
* mongoose의 db object를 가져와 db변수에 넣는 과정
* 이 db변수에는 DB와 관련된 이벤트 리스너 함수들이 있음
*/
var db = mongoose.connection;

// db가 성공적으로 연결된 경우
/*
* DB연결은 앱이 실행되면 단 한번만 일어나는 이벤트 이기에 [db.once("이벤트_이름",콜백_함수)] 함수를 사용
* 그러므로 db.once() 함수 사용
*/
db.once(`open`, () => {
  console.log(`DB Connected`);
});

// db연결중 에러가 있는 경우
/*
* error는 DB접속시 뿐만 아니라, 다양한 경우에 발생할 수 있으며,
* DB 연결 후 다른 DB 에러들이 또 다시 발생할 수도 있기에 [db.on("이벤트_이름",콜백_함수)] 함수를 사용
*/
db.on(`error`, (error) => {
  console.log(`DB ERROR : `, error);
});

app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + `/public`));

var port = 8080;
app.listen(port, () => {
  console.log(`Server On! http://127.0.0.1:`+port);
});
