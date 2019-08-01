import React, { Component } from 'react';
import "./Table.css";

export default class Table extends Component {
    constructor(props){
        super(props);
        this.state = this.starting();
    }

    starting=()=>({
            Info:[
                {eventName: '',Email : '',Fee : '',StudentName  : '',Contact : ''}
            ],
            input:[],
            isture: false
})

    
    gettingInput=(e)=>{
        this.setState({
            Info: {
                ...this.state.Info,
                [e.target.name]: e.target.value
            }
        })
    }
    checkingEmpty=()=>{
        console.log(this.state.Info);
        let error=false;
        if(this.state.Info.eventName === undefined){
            return(
                error=true       )}
            if(this.state.Info.Email === undefined){
                return(
                    error=true              )}
                if(this.state.Info.Fee === undefined){
                    return(
                        error=true                )}
                    if(this.state.Info.Contact === undefined){
                        return(
                            error=true                      )}
                        if(this.state.Info.StudentName === undefined){
                            return(
                                    error=true
                            )}
                            return error;
        }

            
        addRecord=(event)=>{
            event.preventDefault();
            const error=this.checkingEmpty();
            if(error){
                alert("Please Write all the data");
            }else
            {
            let dataInfo=this.state.Info;
            this.state.input.push(dataInfo);
            
            this.setState({
                isture:true,
                Info : '',
                eventName:'',
                Fee :'',
                Contact: '',
                StudentName:'',
                Email : ''

            })
        }
        }

        deleteall=()=>{
            this.setState(
                this.starting()
            )
        }
    reset=(e,idx)=>{
        let datainput= this.state.input
        datainput.splice(idx,1)
        this.setState({
            input : datainput
        }
        )
        }
    
  render() {
        let data=null;
        if(this.state.isture){
            data=this.state.input.map((hero,idx)=>{
                return(
                    <div>
                    <table key={hero.id} className="tableSetting2">
                        <tbody>
                            <tr>
                        <td key={hero.id}> {hero.eventName}</td>
                        <td key={hero.id}> {hero.Email}</td>
                        <td key={hero.id}> {hero.Fee}</td>
                        <td key={hero.id}> {hero.Contact}</td>
                        <td key={hero.id}> {hero.StudentName}</td>
                        <td><button onClick={e=>this.reset(e,idx)} className='btn-delete'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
                );
            })
        }
        console.log(this.state.Info)
        console.log(this.state.input)
    return (
      <div>
          <h1 className="textHeading">Enter Data to Add</h1>
        <div className="responsive">
        <table className="inputTop">
                <tbody>
                    <tr>
                    <th><input type="text" placeholder="   Event Name" name="eventName" onChange={this.gettingInput} value={this.state.eventName}></input></th>
                    <th><input type="text" placeholder="   Email Id" name="Email" onChange={this.gettingInput} value={this.state.Email}></input></th>
                    <th><input type="text" placeholder="   Registration Fee" name="Fee" onChange={this.gettingInput} value={this.state.Fee}></input></th>
                    <th><input type="text" placeholder="   Student Name" name="StudentName" onChange={this.gettingInput} value={this.state.StudentName}></input></th>
                    <th><input type="text" placeholder="   Contact Information" name="Contact" onChange={this.gettingInput} value={this.state.Contact}></input></th>
                    </tr>    
                </tbody>
            </table>
            <button onClick={this.addRecord} className="btn-table">Add Record</button>
            <table className="tableSetting1">
                <tbody>
                    <tr>
                    <th>Event</th>
                    <th>Email</th>
                    <th>Fee</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Delete</th>
                    </tr>
                </tbody>
            </table>
            
           <div>{data}</div>
           <button className="btn-table changeBtn"onClick={this.deleteall}>Delete All</button>
        </div>
      </div>
    )
  }
}
