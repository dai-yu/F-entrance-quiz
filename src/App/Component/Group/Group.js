import React from 'react'
import './Group.css'

export default class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            group: [],
        };
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
  
    group=()=>{
        this.update()
    }

    render(){
      let index =0;
        return <div className="group">
        <div className="Titles"><span>分组列表</span></div>
        <button type="button" onClick={this.group} className="but">分组</button>
        <div className="content">{this.state.group.map(list => (
             // eslint-disable-next-line react/button-has-type
             <div className="groupTitle" key={list}>
               <span className="title">{`${this.state.group.indexOf(list)+1} 组`}</span>
               <div className="list">
               {list.map(student =>{
                 index += 1;
                 return (
                  <div type="button" className="studentgroup">{`${index}.${student}`}</div>
              )
               })}
               </div>
            </div>
            ))}</div>
        </div>
    }
}