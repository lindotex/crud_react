"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _conn = _interopRequireDefault(require("@/database/conn"));

var _controller = require("@/database/controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handler(req, res) {
  var method;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _conn["default"])()["catch"](function () {
            return res.status(405).json({
              error: "Error in the connection"
            });
          }); // Type of Request
          // ['GET', 'POST', 'PUT', 'DELETE']

          method = req.method;
          _context.t0 = method;
          _context.next = _context.t0 === 'GET' ? 5 : _context.t0 === 'POST' ? 8 : _context.t0 === 'PUT' ? 10 : _context.t0 === 'DELETE' ? 12 : 14;
          break;

        case 5:
          (0, _controller.getUsers)(req, res);
          res.status(200).json({
            name: 'GET REQUEST'
          });
          return _context.abrupt("break", 16);

        case 8:
          res.status(200).json({
            name: 'POST REQUEST'
          });
          return _context.abrupt("break", 16);

        case 10:
          res.status(200).json({
            name: 'PUT REQUEST'
          });
          return _context.abrupt("break", 16);

        case 12:
          res.status(200).json({
            name: 'DELETE REQUEST'
          });
          return _context.abrupt("break", 16);

        case 14:
          res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
          res.status(405).end("Method ".concat(method, " is not allowed!"));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}