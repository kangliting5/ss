import React, { Component } from 'react'
import {Link,withRouter} from "react-router-dom"
 class toplink extends Component {
    fun(){
        this.props.history.push("/phone")
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                <Link to="/home"> home</Link>
                <Link to="/user/我是传递给user的数据"> user</Link>
                <Link to={{pathname:"/phone",state:{xiaoming:"state路由传参的数据"}}}> pohone</Link>
                <button onClick={this.fun.bind(this)}>点我去phone</button>
            </div>
        )
    }
}
export default withRouter(toplink)