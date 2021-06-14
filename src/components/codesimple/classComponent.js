import react,{Component} from 'react';


class FirstClass extends Component {
    constructor(){
        super();
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    
    changeVisitorVal(){
        this.setState({
            message:'Thanks for subscribe'
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeVisitorVal()}>Click me</button>
                
            </>
        )
    }
}

export default FirstClass;