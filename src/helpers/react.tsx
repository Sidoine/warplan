import * as React from "react";

export function join(e: JSX.Element[], separator: string) {
    const ret: JSX.Element[] = [];
    for (const el of e) {
        if (ret.length) ret.push(<>{separator}</>);
        ret.push(el);
    }
    return ret;
}