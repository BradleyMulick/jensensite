import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'

class Products extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('/products').then(res => {
            console.log(res.data)
            this.setState({products: res.data})
        })
    }

    render() {
        let mappedProducts = this.state.products.map((products) => {
                        return <Product         title={products.title}
                                                artist={products.artist}
                                                price={products.price}
                                                url={products.url} />                 
        })
        return (
            <div className="prod-map">
                {mappedProducts}
            </div>
        )
    }
}


export default Products