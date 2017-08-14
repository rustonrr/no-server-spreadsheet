import React, { Component } from 'react';
import './CompletedList.css'

class CompletedList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         completedList: null
    //     }
    // }

    // componentWillReceiveProps(props) {
    //     this.setState({ completedList: Object.assign({}, props.completedList), originalEmployee: props.selected });
    //   }


    render() {
        let exceptionAccount = this.props.completedList.accountNumber;
        let emailLink = `mailto:${this.props.completedList.empName}@bank.com?subject=Account:${exceptionAccount} Approved`;

        return (
            <div>
                <h4>Complete:</h4>
                
                <div>{this.props.completedList.map((account, id) => {
                    return (
                        <div className='CompletedList1' key={id}>
                            <div>
                                <b>Account: </b>{account.accountNumber} 
                                <a href={emailLink}><button>Email</button></a> 
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default CompletedList;