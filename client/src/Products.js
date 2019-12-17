import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'

class Products extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            
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

        let allPhotoLength = mappedProducts.length/2
        let mapped1 = mappedProducts.slice(0, allPhotoLength)
        let mapped2 = mappedProducts.slice(allPhotoLength, mappedProducts.length)
        return (
            <div className="prod-map">
                {/* {mappedProducts} */}
                <div className="column1">
                    {mapped1}
                </div>
                <div className="column2">
                    {mapped2}
                </div>
                
            </div>
        )
    }
}


export default Products