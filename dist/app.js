"use strict";
/**
 * Programming Assignment 3
 * Joe Desmond
 *
 * Written in Typescript 4.2.4
 * Tested in Node v15.0.1
 */
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = require("./arrays");
const shuffles_1 = require("./shuffles");
const simulation_1 = require("./simulation");
function main() {
    console.log(simulation_1.shuffleSimulation(10, 9, 2, 9, shuffles_1.topToRandom, arrays_1.generateCards));
    console.log(simulation_1.shuffleSimulation(15, 9, 1, 7, shuffles_1.topToRandom, arrays_1.generateCards));
    console.log(simulation_1.shuffleSimulation(10, 7, 2, 8, shuffles_1.topToRandom, arrays_1.generateCards));
    console.log(simulation_1.shuffleSimulation(15, 4, 0, 6, shuffles_1.topToRandom, arrays_1.generateCards));
    console.log(simulation_1.shuffleSimulation(10, 1, 6, 7, shuffles_1.gsr, arrays_1.generateCards));
    console.log(simulation_1.shuffleSimulation(10, 4, 5, 6, shuffles_1.gsr, arrays_1.generateCards));
}
main();
//# sourceMappingURL=app.js.map