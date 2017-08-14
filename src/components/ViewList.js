import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Papa from 'papaparse';
import './ViewList.css';
import CompletedList from './CompletedList';
import ExceptionList from './ExceptionList';

class ViewList extends Component {
    constructor() {
        super();
        this.state = {
          buttonInvisible: true,
          accountList: [
            {
              accountNumber: '948391029',
              ssn: '123-59-4930',
              branchNumber: '2243',
              empName: 'Kevin',
              openDate: '08/03/2017',
              color: 'black',
              isProcessed: false
            },
            {
              accountNumber: '948302901',
              ssn: '123-59-4930',
              branchNumber: '2243',
              empName: 'Scott',
              openDate: '08/03/2017',
              color: 'black',
              isProcessed: false
            },
            {
              accountNumber: '904394301',
              ssn: '123-59-4930',
              branchNumber: '2243',
              empName: 'Hobbes',
              openDate: '08/03/2017',
              color: 'black',
              isProcessed: false
            }
            // [
            //     "923485101", "945-23-6845", "0023", "Grey Worm", "08/01/2017", 'black'
            //   ],
            //   [
            //     "924357534", "945-23-6843", "0023", "Grey Worm", "08/01/2017", 'black'
            //   ],
            //   [
            //     "934537654", "945-23-2345", "0023", "Grey Worm", "08/01/2017", 'black'
            //   ],
            //   [
            //     "905934245", "945-23-6543", "0023", "Grey Worm", "08/01/2017", 'black'
            //   ],
            //   [
            //     "920349101", "945-23-2453", "0023", "Grey Worm", "08/01/2017", 'black'
            //     ]
          ],
          completedList: [],
          exceptionList: []
        }
        this.completeAccount = this.completeAccount.bind(this);
        this.exceptionAccount = this.exceptionAccount.bind(this);
      }

      processCSV() {
        var fileInput = document.getElementById("csv-input")
        if(!fileInput.value){
          alert("No file")
          return;
        }
        Papa.parse(fileInput.files[0], {
          error: (err, file, inputElem, reason) => {
            alert(reason)
          },
          complete: (results) => {
            let processed = results.data.map( (row) => {
              return {
                accountNumber: row[0],
                ssn: row[1],
                branchNumber: row[2],
                empName: row[3],
                openDate: row[4],
                color: 'black',
                isProcessed: false

              }
            })

            fileInput.value = "";
            this.setState({
              accountList: this.state.accountList.concat(processed),
              buttonInvisible: true
            })
          }
        });
      }
    
      onInputFileChange() {
        this.setState({buttonInvisible: false})
      }

      completeAccount(account, id) {
          account.color = 'green';
          account.isProcessed = true;
          this.setState({
              completedList: [...this.state.completedList, this.state.accountList[id]]
          })
          
      }

      exceptionAccount(account, id) {
          account.color = 'red'
          account.isProcessed = true;
          this.setState({
              exceptionList: [...this.state.exceptionList, this.state.accountList[id]]
          })
      }

    render() {
        return (
          <div>

            <div className='ChooseFile'>
              <input onChange={this.onInputFileChange.bind(this)} id="csv-input" type="file"></input>
              <button className='UploadButton' hidden={this.state.buttonInvisible} onClick={this.processCSV.bind(this)}>Upload</button>
            </div>

            {/* style={ {color: (!this.state.accountColor) ? null : this.state.accountColor } } */}
    
            <div>
              {this.state.accountList.map( (account, id, index) => {
                return <div style={ {color: account.color } }  key={id} className="AccountList">
                    <div>
                        <b>Account:</b> {account.accountNumber} - 
                        <b>SSN:</b> {account.ssn} - 
                        <b>Branch:</b> {account.branchNumber} - 
                        <b>Employee:</b> {account.empName} - 
                        <b>Open Date:</b> {account.openDate}
                        {/* <b>isCompleted:</b> */}
                    </div>
                    <div className='CompleteButton' hidden={(account.isProcessed)}>
                        <button onClick={ () => {this.completeAccount(account, id) } } >Complete</button>
                        <button onClick={ () => {this.exceptionAccount(account, id) } }>Exception</button>
                    </div>
                </div>
              })}
            </div>

            <div className='AccountLists'>
                <div className='CompletedList'>                
                  <CompletedList completedList={this.state.completedList} />
                </div>
                <div className='ExceptionList'>
                  <ExceptionList exceptionList={this.state.exceptionList} />
                </div>
            </div>

            <div className='BackToHome'>
                <Link to={"/"}><button className="myButton">Back To Home</button></Link>
            </div>
    
          </div>
        );
    }
}

export default ViewList;