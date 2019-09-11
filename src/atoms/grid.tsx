import * as React from "react";
import './grid.less';
import { observer } from "mobx-react";
import { observable } from "mobx";

interface Column {
    width: number;
    title: string;
}

@observer
export class Grid extends React.Component {
    @observable
    private resizing: Column | null = null;

    private ref: HTMLTableElement | null = null;
    private headerRef: HTMLDivElement | null = null;
    private contentRef: HTMLDivElement | null = null;

    private handleRef = (instance: HTMLTableElement | null) => {
        this.ref= instance;
    }

    private handleMouseDown(column: Column) {
        return () => {
           this.resizing = column;
        }
    }

    private handleMouseUp = () => {
        this.resizing = null;
    }

    private handleMouseMove = (event: React.MouseEvent) => {
        if (!this.ref || !this.resizing) return;
        let width = event.clientX - this.ref.offsetLeft;
        for (const col of this.columns) {
            if (col === this.resizing) break;
            width -= col.width - 5;
        }
        this.resizing.width = width;
    }

    @observable
    private columns:Column[] = [ { title: 'Test', width: 50 }, { title: 'Bla', width: 120 }, { title: 'Tutu 1 ', width: 300 }, { title: 'Tutu 2', width: 300 }, { title: 'Tutu 3', width: 300 }, { title: 'Tutu 4', width: 300 }];

    private get lines(): string[]  {
        const result = [];
        for (let i = 0; i < 50; i++) {
            result.push(`DZJIdzoidzijozdjiodzjioz ${i}`);
        }
        return result;
    }

    private handleContentScroll = () => {
        if (this.headerRef && this.contentRef) {
            this.headerRef.scrollLeft = this.contentRef.scrollLeft;
        }
    }

    private handleHeaderRef = (element: HTMLDivElement | null) => {
        this.headerRef =element;
    }

    private handleContentRef = (element: HTMLDivElement | null) => {
        this.contentRef =element;
    }

    render() {
        return <div className="grid" onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} ref={this.handleRef}>
            <div className="grid__header" ref={this.handleHeaderRef}>
                    <table><thead><tr>{
                        this.columns.map((x, i) => <td style={{width: `${x.width}px`, maxWidth: `${x.width}px`}} key={i}>{x.title}
                        <span className="grid--separator" onMouseDown={this.handleMouseDown(x)}>-</span></td>)
                    }</tr></thead></table>
            </div>
        <div className="grid__content" ref={this.handleContentRef} onScroll={this.handleContentScroll}>
         <table>
            <colgroup>
            {this.columns.map((x, i) =><col  key={i} style={{width: `${x.width}px`}}/>)}
            </colgroup>
            <tbody>
                {this.lines.map((y, j) => 
                <tr key={j}>
                    {
                        this.columns.map((x, i) => 
                        <td key={i}>{y}</td>)
                    }
                </tr>)}
            </tbody>
        </table></div>
        <div className="grid_footer">Footer</div>
        </div>;
    }
}