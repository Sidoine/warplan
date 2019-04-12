import * as React from "react";
import "./hidden-card.less";

export interface HiddenCardProps {
    name: string;
    onClick: (name: string) => void;
}

export class HiddenCard extends React.Component<HiddenCardProps> {
    render() {
        return <div className="hidden-card" onClick={() => this.props.onClick(this.props.name)}>{this.props.name}</div>
    }
}