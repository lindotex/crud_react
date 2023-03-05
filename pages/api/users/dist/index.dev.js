"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _conn = _interopRequireDefault(require("@/database/conn"));

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
          _context.next = _context.t0 === 'GET' ? 5 : _context.t0 === 'POST' ? 7 : _context.t0 === 'PUT' ? 9 : _context.t0 === 'DELETE' ? 11 : 13;
          break;

        case 5:
          res.status(200).json({
            name: 'GET REQUEST'
          });
          return _context.abrupt("break", 15);

        case 7:
          res.status(200).json({
            name: 'POST REQUEST'
          });
          return _context.abrupt("break", 15);

        case 9:
          res.status(200).json({
            name: 'PUT REQUEST'
          });
          return _context.abrupt("break", 15);

        case 11:
          res.status(200).json({
            name: 'DELETE REQUEST'
          });
          return _context.abrupt("break", 15);

        case 13:
          res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
          res.status(405).end("Method ".concat(method, " is not allowed!"));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}