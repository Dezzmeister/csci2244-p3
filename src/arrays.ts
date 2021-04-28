export type Generator<T> = (n: number) => T[];

export function generateCards(deckSize: number): number[] {
    const out: number[] = new Array(deckSize);

    for (let i = 0; i < deckSize; i++) {
        out[i] = i;
    }

    return out;
}

export function testOrder<T>(i: T, j: T, xs: T[]): boolean {
    for (const x of xs) {
        if (x === i) {
            return true;
        } else if (x === j) {
            return false;
        }
    }

    return false;
}
