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

export function value(val: Value) {
    if (val === undefined) return undefined;
    if (typeof(val) === "string" || typeof(val) === "number") {
        return val;
    }
    return "*";
}