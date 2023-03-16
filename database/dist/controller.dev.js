"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;

var _user = _interopRequireDefault(require("@/model/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Controllers */
function getUsers(req, res) {
  var users;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_user["default"].find({}));

        case 3:
          users = _context.sent;

          if (users) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            error: "Data not Found"
          }));

        case 6:
          res.status(200).json(users);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          res.status(404).json({
            error: "Error while Fetching Data"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}