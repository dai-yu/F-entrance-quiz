import React from 'react'
import './StudentList.css'

export default class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentlist: ["xiaom"],
        };
    }

    componentDidMount() {
       this.update()
    }

    update=()=>{
      const url = "http://localhost:8080/students";
      const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      });
      fetch(url, {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
      })
      .then(res => {
        const data = res.json()
        return data
      })
      .then(data => {
          this.setState({
            studentlist: data,
          });
        });
    }

    handleChange= (event) =>{
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        student: event.target.value,
      })
      
    }

    saveStudent=()=>{
      const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-type":"text/plain"
      });
    fetch(`http://localhost:8080/group?student=${this.state.student}`,{
        method:"get",
        headers:myHeaders,
        mode: "no-cors",
    })
    .then(()=>{this.update()})
    .catch(error=>error)
    }

    render(){
        return <div>
            {this.state.studentlist.map(student => (
             // eslint-disable-next-line react/button-has-type
             <button className="student" key={student}>
               {student}
            </button>
            ))}
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.saveStudent} type="button">保存</button>
        </div>
    }
}