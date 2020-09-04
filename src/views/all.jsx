import React, { Component } from 'react'

export default class all extends Component {
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
    // pagelist(){
    //     return this.state.arr.forEach((v) =>{
    //         if(v.id==this.props.match.params.listid){
    //             console.log(v.id==this.props.match.params.listid)
    //             return v
    //         }
    //     })
    // }
    render() {
        return (
            <div>
                我是详情页---{this.props.match.params.listid}
                {/* <h1>11111{this.pagelist()}</h1> */}
               
                {/* <h1>{this.pagelist()}</h1> */}


                {
                    this.state.arr[this.props.match.params.listid].title
                }
            </div>
        )
    }
}
