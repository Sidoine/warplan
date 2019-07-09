import * as React from "react";
import { Value } from "../stores/units";

export function join(e: JSX.Element[], separator: string) {
    const ret: JSX.Element[] = [];
    let index = 0;
    for (const el of e) {
        if (ret.length) ret.push(<span key={`sep${index++}`}>{separator}</span>);
        ret.push(el);
    }
    return ret;
}

export function value(val: Value, defaut?: string) {
    if (val === undefined) return defaut;
    if (typeof(val) === "string" || typeof(val) === "number") {
        return val;
    }
    return "*";
}

export function groupBy<TKey, T>(list: T[], keyGetter: (value: T) => TKey) {
    const map = new Map<TKey, T[]>();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}