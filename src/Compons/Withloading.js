import React,{Component} from 'react';
const Withloading=(Component)=>{
    return class extends Component{
        
        render(){
            console.log(this.props.isLoading)
            return (
                <>
                {!this.props.isLoading?
                <Component {...this.props}/> :
                <p> Hold On! Data is fetching</p>}
                </>
            )
        }
    }
}
export default Withloading;