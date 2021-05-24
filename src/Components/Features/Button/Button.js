import {Component} from 'react';

export default class Button extends Component{
    constructor(){
        super();
    }

    render(){
        const {text,clickEvent} = this.props
        return(
            <div>
                <button onClick={clickEvent}>{text}</button>
            </div>
        )
    }
}

