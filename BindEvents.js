import React,{Component} from 'react'
class EventBind extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message:'Hello'
        }
    }
    change=()=>
    {
        this.setState({
            message:'Good Bye'
        })
    }
    render()
    {
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.change}>Click</button>
                </div>
        )
    }
}
export default EventBind;
