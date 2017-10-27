'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    let a = add(1, 6);
    const temp = 120;
    let b = {
        name: a
    };
    res.render('index', { title: `abc ${a}` });
});
exports.default = router;
function add(a, b) {
    return a + b;
}
//# sourceMappingURL=index.js.map