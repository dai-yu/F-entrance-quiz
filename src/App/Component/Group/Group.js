import React from 'react'
import './Group.css'

export default class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            group: [],
        };
    }

    componentDidMount() {
        this.update()
    }

    update=()=>{
        const url = "http://localhost:8080/group";
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
              group: data,
            });
          });
      }
  

    render(){
        return <div className="group">
        {this.state.group.map(list => (
             // eslint-disable-next-line react/button-has-type
             <div className="groupTitle" key={list}>
               {`${this.state.group.indexOf(list)+1} 组`}
               <div>
               {list.map(student =>(
                   <button type="button">{student}</button>
               ))}
               </div>
            </div>
            ))}
        </div>
    }
}