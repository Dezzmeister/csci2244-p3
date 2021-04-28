import { Generator, testOrder } from "./arrays";
import { Shuffler } from "./shuffles";

export function shuffleSimulation<T>(n: number, k: number, i: T, j: T, shuffle: Shuffler<T>, generate: Generator<T>): number {
    let xs = generate(n);
    let out = 0;

    for (let l = 0; l < 15000; l++) {
        const ys = shuffleKTimes(k, xs, shuffle);
        out += testOrder(i, j, ys) ? 1 : 0;
    }

    return out / 15000;
}

export function shuffleKTimes<T>(k: number, xs: T[], shuffle: Shuffler<T>): T[] {
    let ys = [...xs];

    for (let i = 0; i < k; i++) {
        ys = shuffle(ys);
    }

    return ys;
}
