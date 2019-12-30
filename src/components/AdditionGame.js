import React, {useState,useEffect,useCallback} from 'react';
//import logo from './logo.svg';
import '../App.css';
import '../AdditionGame.css';
import {Button} from './Button';
import urs1 from '../images/urs1.PNG';
import urs2 from '../images/urs2.PNG';
import urs3 from '../images/urs3.PNG';
import urs4 from '../images/urs4.PNG';
import urs5 from '../images/urs5.PNG';
import urs6 from '../images/urs6.PNG';
import urs7 from '../images/urs7.PNG';
import plus from '../images/plus.PNG';


export  class AdditionGame extends React.Component {
    constructor(){
        super();
        this.state= {
            n1: 0,
            n2: 1,
            r1: -1,
            r2: -1,
            r3: -1,
            scor:0,
            gresele: 0,
            obiecte: [[urs1,urs2,urs3,urs4,urs5,urs6,urs7]]
        }

    }

     _setNr(){
        this.setState({
            n1: this._random(7)
        },()=>{this._setRasp()})
    }

     componentWillMount() {
        this._setNr();
    }




    _shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    _clicku(r) {
        switch (r) {
            case 1:
                if (this.state.r1 === this.state.n1 + this.state.n2) {
                    this.setState({scor:this.state.scor+1})
                    
                    }
                    else {
                        this.setState({gresele: this.state.gresele+1});
                    }
                break;
            case 2:
                if (this.state.r2 === this.state.n1 + this.state.n2) {
                    this.setState({scor:this.state.scor+1})
                    
                }
                else {
                    
                    this.setState({gresele: this.state.gresele+1});
                }
                break;
            case 3:
                if (this.state.r3 === this.state.n1 + this.state.n2) {
                    this.setState({scor:this.state.scor+1})
                    


                }else{
                    
                    this.setState({gresele: this.state.gresele+1});
                }
                break;
        }
        this._setNr();
    }

    _setRasp(){
        let x=this.state.n1+this.state.n2;
        console.log(x);
        let arr=[];
        arr.push(x);
        let y= x;
        while(y==x)
            y=this._random(7);
        let z=x;
        while(z==x||z==y)
            z=this._random(7);
        arr.push(y);
        arr.push(z);
        arr=this._shuffle(arr);
        this.setState({
            r1:arr[0],
            r2:arr[1],
            r3:arr[2],
            obiecte: this._shuffle(this.state.obiecte)
        });
    }

    _random(x){
        let r = Math.floor(Math.random() * x) + 1;
        return r;
    }

    render() {
        return (
            <div className="AdditionGame">
             <div className="home-btn">
            <Button  icon="fas fa-home" route="/"/>
            </div>
                <div className="results">
                <h1><i class="fas fa-check" ></i>{this.state.scor}</h1>
                <h1><i class="fas fa-times"></i>{this.state.gresele}</h1>
                </div>
                <div>
                    <div>
                        <img src={this.state.obiecte[0][this.state.n1-1]} style={{marginRight: 20}}></img>
                        <img src={plus} style={{marginBottom: 100 }}></img>
                        <img src={this.state.obiecte[0][this.state.n2-1]}></img>
                    <div className="btn-group">
                    <button onClick={()=>{this._clicku(1)}}>{this.state.r1}</button>
                    <button onClick={()=>{this._clicku(2)}}>{this.state.r2}</button>
                    <button onClick={()=>{this._clicku(3)}}>{this.state.r3}</button>
                    </div>
                    </div>
                </div>
            </div>);
    }
}