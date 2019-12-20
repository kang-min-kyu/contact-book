var express = require(`express`);
var router = express.Router();
var Contact = require(`../models/Contact`);

// Contacts - Index = list
router.get("/", (req, res) => {
  // 모델.find(검색조건, function(에러, 검색결과)) 검색결과는 "배열", 검색결과가 없으면 "빈배열"
  Contact.find({}, (err, contacts) => {
    if (err) return res.json(err);
    res.render("contacts/index", { contacts: contacts })
  });
});

// Contacts - New = writeFrm
router.get("/new", (req, res) => {
  res.render("contacts/new");
});

// Contacts - create = writeAct
router.post("/", (req, res) => {
  // 모델.create(생성할 data의 object, function(에러, 생성된 data))
  Contact.create(req.body, (err, contact) => {
    if (err) return res.json(err);
    res.redirect("/contacts");
  });
});

// Contacts - show = views
router.get("/:id", (req, res) => {
  // 모델.findOne(검색조건, function(에러, 검색결과)) 검색결과는 "배열", 검색결과가 없으면 "null"
  Contact.findOne({ _id: req.params.id }, (err, contact) => {
    if (err) return res.json(err);
    res.render("contacts/show", { contact: contact });
  });
});

// Contacts - edit = modifyFrm
router.get("/:id/edit", (req, res) => {
  Contact.findOne({ _id: req.params.id }, (err, contact) => {
    if (err) return res.json(err);
    res.render("contacts/edit", { contact: contact });
  });
});

// Contacts - update
router.put("/contacts/:id", (req, res) => {
  // 모델.findOneAndUpdate(검색조건, update할 정보 object, function(에러, 검색결과)) 검색결과는 "배열"
  // callback함수로 넘겨지는 값은 수정되기 전의 값
  // 업데이트 된 후의 값을 보고 싶다면 콜백 함수 전에 parameter로 {new:true}를 넣어 줘야 함
  Contact.findOneAndUpdate({ _id: req.params.id }, req.body, (err, contact) => {
    if (err) return res.json(err);
    res.redirect("/contacts/"+req.params.id);
  });
});

// Contacts - destory = delete
router.delete("/:id", (req, res) => {
  // 모델.deleteOne(검색조건, function(에러))
  Contact.deleteOne({ _id: req.params.id}, (err) => {
    if (err) return res.json(err);
    res.redirect("/contacts");
  });
});

module.exports = router;
