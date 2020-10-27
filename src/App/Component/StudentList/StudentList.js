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

    render(){
        return <div>
            {this.state.studentlist.map(student => (
             <button className="student" key={student}>
               {student}
               </button>
            ))}
        </div>
    }

}