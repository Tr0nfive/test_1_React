import { Component } from "react";


export default class Sum extends Component{

    constructor(props){
        super(props)
        this.state={
          sum:0,
          num1:0
        }
    }

    num1=(e)=>{
        console.log(e.target.value)
        this.setState({num1:Number(e.target.value)})
    }

    num2=(e)=>{
        console.log(e.target.value)
        this.setState({num2:Number(e.target.value)})
    }

    plus=()=>{
        console.log(this.state.num1)
        this.setState({sum:Number(this.state.num1+this.state.num2)})
    }

    render()
    {
        return(

            <div>
                    num1: <input type="text" onChange={this.num1} />
                    num2: <input type="text" name="" id="" onChange={this.num2} />
                    <button onClick={this.plus}>+</button>
                    = {this.state.sum}
                    
            </div>
        )
    }
}