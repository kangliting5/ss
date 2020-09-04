import React, { Component } from 'react'
import Fu from "../components/fu.jsx"
import axios from "axios"
export default class phone extends Component {


componentDidMount() {
    axios({
        url:"http://localhost:8888/demob",
        method:"post",
        data:{content:"haha"}
    }).then((ok)=>{
        console.log(ok)
    })
}


    render() {
        return (
            <div>
                phone--{this.props.location.state.xiaoming}

                <hr/>
                <Fu/>

            </div>
        )
    }
}
