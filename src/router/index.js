import React, { Component } from 'react'
// import Home from "../views/home.jsx"
// import User from "../views/user.jsx"
// import Phone from "../views/phone.jsx"
// import No from "../views/no.jsx"
// import All from "../views/all.jsx"
// import Demoa from "../views/demoa.jsx"
// import Demob from "../views/demob.jsx"
import {Route,Redirect,Switch,Link} from "react-router-dom"
import Toplink from "../components/toplink.jsx"
import loadable from "../util/routerload.js"
let Home=loadable(()=>import('../views/home.jsx'))
let User=loadable(()=>import('../views/user.jsx'))
let Phone=loadable(()=>import('../views/phone.jsx'))
let No=loadable(()=>import('../views/no.jsx'))
let All=loadable(()=>import('../views/all.jsx'))
let Demoa=loadable(()=>import('../views/demoa.jsx'))
let Demob=loadable(()=>import('../views/demob.jsx'))

export default class index extends Component {
    render() {
        return (
            <div>
                <Toplink/>
                <hr/>
                <Switch>
                    <Route path="/home" component={Home}/>  
                    <Route path="/user/:xiaoming" component={User}/>  
                    <Route path="/Phone" component={Phone}/>
                    <Route path="/all/:listid" component={All}/>
                    <Route path="/demo" render={(props)=>{return true?<Demoa {...props}/>:<Demob {...props}/>}}/>
                    <Redirect from="/" to="/home" exact/>
                    <Route component={No}/>
                </Switch>
            </div>
        )
    }
}
