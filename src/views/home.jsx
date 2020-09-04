import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:[
                {id:1234353,title:"我是标题11"},
                {id:2234353,title:"我是标题12"},
                {id:3234353,title:"我是标题13"},
                {id:4234353,title:"我是标题14"},
                {id:5234353,title:"我是标题15"}
            ]
        }
    }
    fun(){
        // this.props.history.push("/phone")
        console.log(this.props.history)
    }
    pagelist(){

       return this.state.arr.map((v,i)=>{
            return (

            <li key={i}>
              
                <Link to={`/all/${i}`}>  {v.title}</Link>    
            </li>
            )
        })
    }
    render() {
        return (
            <div>
                home
                <ul>
                     {this.pagelist()}
                </ul>
             
                <button onClick={this.fun.bind(this)}>点我去phone</button>
            </div>
        )
    }
}
