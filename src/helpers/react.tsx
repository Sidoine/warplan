import * as React from "react";

export function join(e: JSX.Element[], separator: string) {
    const ret: JSX.Element[] = [];
    let index = 0;
    for (const el of e) {
        if (ret.length) ret.push(<span key={`sep${index++}`}>{separator}</span>);
        ret.push(el);
    }
    return ret;
}