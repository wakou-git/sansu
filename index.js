const converter = require("./convert.js");
const parser = require("./parse.js");
exports.student = class {
    constructor(exp) {
        this.exp = exp;
    }
    doYourHomeWork() {
        const converted = converter(this.exp);
        const parsed = parser(converted);
        return parsed;
    }
}