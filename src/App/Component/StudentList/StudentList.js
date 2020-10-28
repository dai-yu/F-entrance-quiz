import React from 'react'
import './StudentList.css'

export default class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // TODO GTB-工程实践: - 变量命名不合规
            studentlist: ["xiaom"],
        };
    }

    componentDidMount() {
       this.update()
    }

    update=()=>{
      // TODO GTB-工程实践: - 把API请求进行一定程度的封装以复用
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
    if(this.state.student!==undefined){
      // TODO GTB-工程实践: - 新增学生为什么用get请求?
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
    }else{
      alert("输入不能为空，请重新输入！")
    }
    }

    render(){
      // TODO GTB-知识点: - id 应该由后端生成
      let index =0;
        return <div className="studentList">
          <div className="title">学员列表</div>
            {this.state.studentlist.map(student => {
             index += 1;
              return (
                // TODO GTB-知识点: - 学生信息为什么用button ? 建议提取组件以便在Group中复用
            <button className="student" key={student} type="button">
               <span>{`${index}.${student}`}</span>
            </button>
            )
            })}
            {/* TODO GTB-知识点:  - 没有必要在state里面保存一个student，输入完成直接拿到数据请求API 就可以了，onChang 每次输入都触发方法调用， onKeyPress是按下去的时候触发，应该用onKeyUp或者onBlur */}
            {/* TODO GTB-知识点:  - input 不应该一直出现，需求是按钮和input 交替出现的 */}
            <input type="text" onChange={this.handleChange}  value={this.state.student} className="value" onKeyPress={this.saveStudent}/>
        </div>
    }
}
