"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _conn = _interopRequireDefault(require("@/database/conn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
  (0, _conn["default"])();
  res.status(200).json({
    name: 'John Doe'
  });
}