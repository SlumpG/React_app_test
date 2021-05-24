import {Component} from 'react';

export default class Form extends Component{
    constructor(){
        super();
    }

    render(){
        const {clickEvent,inputTitle,placeHolder,butonText} = this.props
        return(
            <div>
                <label >{inputTitle}</label>
                <input placeholder={placeHolder} />
                <button onClick={clickEvent}>{butonText}</button>
            </div>
        )
    }
}

