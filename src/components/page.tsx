import * as React from "react";

export interface IPageProps {
};

interface IPageState {
};

export class Page extends React.Component<IPageProps, IPageState> {
    constructor(props: IPageProps) {
        super(props);
        this.state = {};
    }

    render() {

        return(<div></div>);
    }

}