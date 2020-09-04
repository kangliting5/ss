import React, { Component } from 'react'
import Zia from "./zia.jsx"
import Zib from "./zib.jsx"
export default class fu extends Component {
    constructor(props){
        super(props)
        this.state={
            futext:"我是组件的状态"
        }
    }
    fun(){
        this.setState({
            futext:"我被修改了"
        })
    }
    render() {
        return (
            <div>
                fu
                <button onClick={()=>{this.fun()}}>点我修改数据</button>
                <Zia ziatext={this.state.futext}/>
                <Zib zibtext={this.state.futext}/>
            </div>
        )
    }
}
