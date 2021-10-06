import React, { Component } from 'react'
import json from '../products.json'

export class Products extends Component {
    render() {
        // console.log(json.Products)
        return (
            <div className="row">
                {json.Products.map(item=>
                <div className="col-sm-4">
                    <div className="card bg.dark">
                        {console.log(item)}
                        <img src={`${item.images}`} className="card-img-top" alt="Happy"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.pname}</h5>
                            <p className="card-text">Id:{item.pid}</p>
                            <p className="card-text">Price: {item.price} & Quantity: {item.quantity}</p>
                            <a href="#" className="btn btn-primary">Add in cart</a>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Products
