"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testOrder = exports.generateCards = void 0;
function generateCards(deckSize) {
    const out = new Array(deckSize);
    for (let i = 0; i < deckSize; i++) {
        out[i] = i;
    }
    return out;
}
exports.generateCards = generateCards;
function testOrder(i, j, xs) {
    for (const x of xs) {
        if (x === i) {
            return true;
        }
        else if (x === j) {
            return false;
        }
    }
    return false;
}
exports.testOrder = testOrder;
//# sourceMappingURL=arrays.js.map