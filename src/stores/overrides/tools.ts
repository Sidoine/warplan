export function override<T>(value:T, f: (x: T) => void) {
    f(value);
}
