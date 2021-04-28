export type Shuffler<T> = (xs: T[]) => T[];

export function topToRandom<T>(xs: T[]): T[] {
    const out = [...xs];
    const index = Math.floor(Math.random() * xs.length);

    out.splice(0, 1);
    out.splice(index, 0, xs[0]);

    return out;
}

export function gsr<T>(xs: T[]): T[] {
    const flips = flipNTimes(xs.length);
    const heads = flips.reduce((p, c) => c + p, 0);

    let leftIndex = 0;
    let rightIndex = heads;
    const out: T[] = new Array(xs.length);

    for (let i = 0; i < flips.length; i++) {
        out[i] = flips[i] ? xs[leftIndex++] : xs[rightIndex++];
    }

    return out;
}

function flipNTimes(n: number): number[] {
    const out: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        out[i] = Math.floor(Math.random() * 2);
    }

    return out;
}
