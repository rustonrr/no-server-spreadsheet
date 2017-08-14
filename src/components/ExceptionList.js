import React, { Component } from 'react';
import './ExceptionList.css';

class ExceptionList extends Component {

    render() {
        let exceptionAccount = this.props.exceptionList.accountNumber;
        let emailLink = `mailto:${this.props.exceptionList.empName}@bank.com?subject=You Have Received an Exception on Account:${exceptionAccount}`;

        return (
            <div>
                <h4>Exception:</h4>
                
                <div>{this.props.exceptionList.map((account, id) => {
                    return (
                        <div className='ExceptionList1' key={id}>
                            <b>Account: </b>{account.accountNumber} 
                            <a href={emailLink}><button>Email</button></a>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default ExceptionList;