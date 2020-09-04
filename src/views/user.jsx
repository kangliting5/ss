import React, { Component } from 'react'

export default class user extends Component {
    fun(){
        this.props.history.push("/phone")
    }
    render() {
        return (
            <div>
                user----{this.props.match.params.xiaoming}
                <button onClick={this.fun.bind(this)}>点我去phone</button>
            </div>
        )
    }
}
