import React from 'react'
import {Button} from "./Button"
export const Home = () =>{
    return(
        <div className="App">
            <Button icon="fas fa-film" route="/learning"/>
            <Button icon="fas fa-gamepad" route="/game"/>  
        </div>
    )
}