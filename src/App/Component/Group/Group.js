import React from 'react'

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
        return <div>
        {this.state.group}
        </div>
    }
}