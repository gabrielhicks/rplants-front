import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


export class Cart extends Component {



    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} key={this.props.cart.indexOf(item)} />))
    }


    render() {
        console.log(this.props.user ? this.props.user.id : "none")
        return (
            <>
                <section className="footerpage">
                    {this.props.cart.length > 0 ?
                    <> 
                    {this.renderCart()}
                    <h1>Total: ${this.props.total}</h1>
                    {/* <button onClick={this.purchaseHandler}>Purchase</button> */}

                    {
                        this.props.user ? 
                        <Link to="/checkout">Check out</Link>
                        :
                        <>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/checkout">Check out as guest</Link>
                        </>

                    }

                    </>

                    : <h1>No items to display</h1>}
                    <Footer />
                </section>
                
            </>
        )
    }
}

export default Cart
