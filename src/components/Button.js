import React, { useState, useEffect} from "react"
import {
    Link
  } from 'react-router-dom'

export const Button = (props) =>{
    const [icon,setIcon] = useState("");
    const [text,setText] = useState("");
    const [route,setRoute] = useState("");
    useEffect(() =>{
        setIcon(props.icon)
        setRoute(props.route)
        setText(props.text)
    })
    return(
        <Link className="ahref" to={route}>
        <div className="main-btn">
            {icon ? <i className={icon}></i> : null}
            {text ? <p>{text}</p> : null}
            </div>
            </Link>
    )

}
