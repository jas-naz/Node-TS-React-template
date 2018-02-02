import * as React from 'react';
import * as classNames from 'classnames';

export interface IPaginationProps {
    totalCount: number,
    pageSize: number,
    whatPage: number,
    parentToggle: any
}

export interface IPaginationState {
    totalCount: number,
    pageSize: number,
    whatPage: number,
    counter: number
}

export class Pagination extends React.Component<IPaginationProps, IPaginationState> {
    constructor(props: IPaginationProps) {
        super(props);

        this.state = {
            totalCount: this.props.totalCount,
            pageSize: this.props.pageSize,
            whatPage: this.props.whatPage,
            counter: 0
        }
        this.doParentToggleFromChildUp = this.doParentToggleFromChildUp.bind(this);
        this.doParentToggleFromChildDown = this.doParentToggleFromChildDown.bind(this);
    }
    doParentToggleFromChildUp(){
        if (this.state.whatPage > 1) {
            this.setState({
                whatPage: this.state.whatPage-1
            })
            this.props.parentToggle(this.state.whatPage-1)
        }
    }
    doParentToggleFromChildDown(){
        if (this.state.whatPage < (this.props.totalCount / this.props.pageSize)) {
            this.setState({
                whatPage: this.state.whatPage+1
            })
            this.props.parentToggle(this.state.whatPage+1) 
        }
    }
    render() {
        const showPagination = (this.props.totalCount > this.props.pageSize )
        const upClass = classNames('button',{
            'disabled': this.state.whatPage == 1
        })
        const downClass = classNames('button',{
            'disabled': (this.props.totalCount / this.props.pageSize) < this.state.whatPage
        })

        return (
            <div>
                { showPagination &&
                    <div className="paginationTop">
                        <div className="pagination">
                            <div className="pages">{this.state.whatPage} of {Math.ceil(this.props.totalCount / this.props.pageSize)}</div>
                            {/* // TODO: make these buttons instead and just disable them */}
                            <div className={upClass} onClick={this.doParentToggleFromChildUp}><i className="ms-Icon ms-Icon--ChevronUpSmall x-hidden-focus"></i></div>
                            <div className={downClass} onClick={this.doParentToggleFromChildDown}><i className="ms-Icon ms-Icon--ChevronDownSmall x-hidden-focus"></i></div>
                        </div>    
                    </div>    
                }
            </div>
        );
    }
}
