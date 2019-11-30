import React from 'react'
import {Button} from './Button'
import numbers from '../assets/numbers.png'
import rem from '../assets/substitution.png'
import add from '../assets/addition.jpg'
export const LearningPage = () =>{
    return(
        <div>
            <div className="grid-list">
                <div className="section">
                    <img src={numbers} alt="numberz"/>
                    <Button icon="fas fa-list-ol" route="/learning/numbers"/>
                </div>
                <div className="section">
                    <img src={add} alt="adunare"/>
                    <Button icon="fas fa-calculator" route="/learning/addition"/>
                </div>
                <div className="section">
                    <img src={rem} alt="scadere"/>
                    <Button icon="fas fa-calculator" route="/learning/substitution"/>
                </div>
            </div>
        </div>
    )
}