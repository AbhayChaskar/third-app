import React, { Component } from 'react'
const Myhoc=(WrappedComponent)=>{
    return class extends Component {
        componentDidMount(){
            this.setState({
                data: "High Order Component"
            })
        }
        render() {
            return <WrappedComponent {...this.props} {...this.state} />
        }
    }
}

export default Myhoc
