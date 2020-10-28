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
      // TODO GTB-工程实践: - 建议把URL定义为常量
      // TODO GTB-工程实践: - 建议把API请求提取到单独的util，进行一定程度的封装
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

    // TODO GTB-知识点: * 这里没有必要写成两个方法
    group=()=>{
        this.update()
    }

    render(){
      // TODO GTB-知识点: - 不应该由前端来排序
      let index =0;
      // TODO GTB-工程实践: - 代码没有格式化
        return <div className="group">
        <div className="Titles"><span>分组列表</span></div>
        <button type="button" onClick={this.group} className="but">分组</button>
        <div className="content">{this.state.group.map(list => (
             <div className="groupTitle" key={list}>
               {/* TODO GTB-知识点: - 没有必要用indexOf，了解一些数组的map方法如何获取当前index */}
               <span className="title">{`${this.state.group.indexOf(list)+1} 组`}</span>
               <div className="list">
               {list.map(student =>{
                 index += 1;
                 return (
                   // TODO GTB-知识点: - class命名不合理，语义和规则都有问题，不建议使用驼峰，使用中横线，另外这里跟group 有什么关系？
                   // TODO GTB-知识点: - html标签使用不合理，div为什么type设置成button?
                  <div type="button" className="studentgroup">{`${index}.${student}`}</div>
              )
               })}
               </div>
            </div>
            ))}</div>
        </div>
    }
}
