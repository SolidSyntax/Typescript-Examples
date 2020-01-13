import * as React from "react";

interface HomeProps {
    name: string;
}

export class Home extends React.Component<HomeProps,{}>{
    render () {
        return (
            <div>Hello there, {this.props.name} </div>
        );
    }
}