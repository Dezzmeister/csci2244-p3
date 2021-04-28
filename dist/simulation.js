"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleKTimes = exports.shuffleSimulation = void 0;
const arrays_1 = require("./arrays");
function shuffleSimulation(n, k, i, j, shuffle, generate) {
    let xs = generate(n);
    let out = 0;
    for (let l = 0; l < 15000; l++) {
        const ys = shuffleKTimes(k, xs, shuffle);
        out += arrays_1.testOrder(i, j, ys) ? 1 : 0;
    }
    return out / 15000;
}
exports.shuffleSimulation = shuffleSimulation;
function shuffleKTimes(k, xs, shuffle) {
    let ys = [...xs];
    for (let i = 0; i < k; i++) {
        ys = shuffle(ys);
    }
    return ys;
}
exports.shuffleKTimes = shuffleKTimes;
//# sourceMappingURL=simulation.js.map