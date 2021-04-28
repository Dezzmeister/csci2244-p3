/**
 * Programming Assignment 3
 * Joe Desmond
 *
 * Written in Typescript 4.2.4
 * Tested in Node v15.0.1
 */

import { generateCards } from "./arrays";
import { gsr, topToRandom } from "./shuffles";
import { shuffleSimulation } from "./simulation";

function main() {
    console.log(shuffleSimulation(10, 9, 2, 9, topToRandom, generateCards));
    console.log(shuffleSimulation(15, 9, 1, 7, topToRandom, generateCards));
    console.log(shuffleSimulation(10, 7, 2, 8, topToRandom, generateCards));
    console.log(shuffleSimulation(15, 4, 0, 6, topToRandom, generateCards));
    console.log(shuffleSimulation(10, 1, 6, 7, gsr, generateCards));
    console.log(shuffleSimulation(10, 4, 5, 6, gsr, generateCards));
}

main();
