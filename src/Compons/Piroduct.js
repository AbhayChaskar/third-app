import React, { Component } from 'react'
import data from '../products.json'

export class Piroduct extends Component {
    constructor(props){
        super(props);
        this.state={proData:[]}
    }
    componentDidMount(){
        console.log(data)
        setTimeout(() => {
            this.setState({proData:data.Products})
        }, 2000);
    }
    render() {
        return (
            <div>
                <h2>Piroducts</h2>
                <ul>
                    {this.state.proData.map(pro=>
                        <li>{pro.pname}</li>
                    )}
                </ul>
                
            </div>
        )
    }
}

export default Piroduct
