import React from 'react'
import './StudentList.css'

export default class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentlist: ["xiaom"],
            student: "",
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
        student: event.target.value,
      })
    }

    saveStudent=()=>{
      const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-type":"text/plain"
      });
    fetch(`http://localhost:8080/save?student=${this.state.student}`,{
        method:"get",
        headers:myHeaders,
        mode: "no-cors",
    })
    .then(()=>{
      this.update()
      this.setState({
        student: "",
      })
    })
    .catch(error=>error)
    }

    render(){
      let index =0;
        return <div className="studentList">
          <div className="title">学员列表</div>
            {this.state.studentlist.map(student => {
             index += 1;
              return (
            <button className="student" key={student} type="button">
               <span>{`${index}.${student}`}</span>
            </button>
            )
            })}
            <input type="text" onChange={this.handleChange}  value={this.state.student} className="value" onKeyPress={this.saveStudent}/>
        </div>
    }
}