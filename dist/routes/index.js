"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _index = require("../controllers/index.controller");

var router = (0, _express.Router)();
router.get("/", _index.renderIndexPage);
router.get("/about", _index.renderAboutPage);
router.get("/new-entry", _index.renderNewEntryPage);
router.post("/new-entry", _index.createNewEntry);
router.get("/delete/:id", _index.deleteGame);
var _default = router;
exports["default"] = _default;