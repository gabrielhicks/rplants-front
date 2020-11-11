import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Purchases from '../../components/Purchases/Purchases'
import {PurchaseWrapper, OrderHistory, LastOrderTitle, LastOrder, AllOrders, PurchaseColumn} from './ProfileStyle'

export class Profile extends Component {

    state = {
        orders: [],
        purchases: [],
        clicked: null
    }

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}` 
            }
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, options)
        .then(res => res.json())
        .then(res => (this.setState({
            orders: res.orders.reverse(),
            // purchases: res.purchases
        })))
        .catch(console.log)
    }


    renderPurchases = () => {
        return this.state.orders.slice(1).map( order =>  <Purchases key={order.id} order={order} />)
    }
    
    renderLatestPurchase = () => {
        return <Purchases className="latest-order" order={this.state.orders[0]}/>
    }

    render() {
        // console.log(this.state.orders.length)
        return (
            <>

            {this.props.user ? 
            <PurchaseWrapper>
            <PurchaseColumn>
                <OrderHistory>Order History for {this.props.user.name}</OrderHistory>
                {this.state.orders.length > 0 ? 
                <>
                <LastOrderTitle>Your latest purchase was...</LastOrderTitle>
                <LastOrder>{this.renderLatestPurchase()}</LastOrder>
                </>
                : 
                <h2>You haven't made any purchases yet!</h2>
                }
                <hr/>
                <LastOrderTitle>Previous orders:</LastOrderTitle>
                <AllOrders>  
                    {this.renderPurchases()}
                </AllOrders>
                </PurchaseColumn>
            </PurchaseWrapper>
            :
            <Redirect to="/login"/>}
            
            </>
        )}
}

export default Profile
