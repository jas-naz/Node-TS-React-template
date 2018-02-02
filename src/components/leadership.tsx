import * as React from 'react';

export interface ILeadershipProps {
    data: Array<any>,
    DEV: boolean
}

export class Leadership extends React.Component<ILeadershipProps, any> {
    constructor(props : ILeadershipProps) {
        super(props);
        this.state = {
            data: this.props.data,
            DEV: this.props.DEV
        };
    }
    render() {
        const data = this.state.data;
        return (
            <div>
                {data.map((item:any,index:number)=>{
                    return(
                        <div key={index}>{item.name}</div>
                    )
                })}
            </div>
        );
    }
}
