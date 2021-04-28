"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gsr = exports.topToRandom = void 0;
function topToRandom(xs) {
    const out = [...xs];
    const index = Math.floor(Math.random() * xs.length);
    out.splice(0, 1);
    out.splice(index, 0, xs[0]);
    return out;
}
exports.topToRandom = topToRandom;
function gsr(xs) {
    const flips = flipNTimes(xs.length);
    const heads = flips.reduce((p, c) => c + p, 0);
    let leftIndex = 0;
    let rightIndex = heads;
    const out = new Array(xs.length);
    for (let i = 0; i < flips.length; i++) {
        out[i] = flips[i] ? xs[leftIndex++] : xs[rightIndex++];
    }
    return out;
}
exports.gsr = gsr;
function flipNTimes(n) {
    const out = new Array(n);
    for (let i = 0; i < n; i++) {
        out[i] = Math.floor(Math.random() * 2);
    }
    return out;
}
//# sourceMappingURL=shuffles.js.map