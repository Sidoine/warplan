export function someFrom<T>(
    array: T[],
    from: number,
    condition: (x: T) => boolean
) {
    for (let i = from; i < array.length; i++) {
        if (condition(array[i])) return true;
    }
    return false;
}

export function distinct<T extends { id: string }>(array: T[]) {
    return array.filter((x, i) => !someFrom(array, i + 1, y => x.id === y.id));
}
