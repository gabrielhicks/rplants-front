import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import {NavLink as Link} from 'react-router-dom'
import {
    Page, 
    TopDetails, 
    Details, 
    Photo, 
    BottomDetails,  
    AddtoCart, 
    CareType, 
    Description,
    Heading,
    SubHeading,
    PetFriendly,
    CareCard,
    Background,
    PlantHeading,
    UnselectedLabel,
    SelectedLabel,
    Price
} from './DetailedPlantStyle'

export class DetailedPlant extends Component {

    state = {
        clicked: false,
        careInstructions: true,
        size: "small",
        price: this.props.plant.price.small,
        quantity: 1
    }
    

    localAddToCart = (e) => {
        e.preventDefault()
        this.props.clearFilterSearch()
        const newPlant = Object.assign({}, this.props.plant)
        console.log(newPlant)
        this.props.addToCart(newPlant, this.state.size, this.state.quantity)
    }

    imageFlipHandler = () => {
        this.setState((prev) => ({ clicked: !prev.clicked}))
    }

    showCareInstructions = () => {
        this.setState((prev) => ({ careInstructions: !prev.careInstructions}))
        
    }

    formEdit = (e) => {
        const price = this.props.plant.price[e.target.value]
        this.setState( () => ({
            [e.target.name] : e.target.value,
            price : price
        }))
    }

    quantityHandler = (e) => {
        this.setState({ quantity: e.target.value })
    }

    render() {
        return (
            <>
            <Background>
            <Page>
                <TopDetails>
                    <Photo alt={this.props.plant.name} onClick={this.imageFlipHandler} src={this.state.clicked ? this.props.plant.image2 : this.props.plant.image}></Photo>
                    <Details>
                        <PlantHeading>{this.props.plant.name}</PlantHeading>
                        <SubHeading>{this.props.plant.scientific}</SubHeading>
                    
                            {this.props.plant.pet_friendly ? 
                            <PetFriendly>
                                <img alt="plant friendliness" src="https://svgsilh.com/svg/155322.svg"/>&nbsp;&nbsp;Pet-friendly!
                            </PetFriendly>
                            : null}<br/>
                        <Price>Price: ${this.state.price}</Price><br/>
                        
                        <form onSubmit={this.localAddToCart}>
                            {this.state.size === "small" ? <SelectedLabel><input onChange={this.formEdit} type="radio" id="small" name="size" value="small" checked={this.state.size === "small"}/>&nbsp;Small</SelectedLabel> : <UnselectedLabel><input onChange={this.formEdit} type="radio" id="small" name="size" value="small" checked={this.state.size === "small"}/>&nbsp;Small</UnselectedLabel>}
                            {this.state.size === "medium" ? <SelectedLabel><input onChange={this.formEdit} type="radio" id="medium" name="size" value="medium" checked={this.state.size === "medium"}/>&nbsp;Medium</SelectedLabel> : <UnselectedLabel><input onChange={this.formEdit} type="radio" id="medium" name="size" value="medium" checked={this.state.size === "medium"}/>&nbsp;Medium</UnselectedLabel>}
                            {this.state.size === "large" ? <SelectedLabel><input onChange={this.formEdit} type="radio" id="large" name="size" value="large" checked={this.state.size === "large"}/>&nbsp;Large</SelectedLabel> : <UnselectedLabel><input onChange={this.formEdit} type="radio" id="large" name="size" value="large" checked={this.state.size === "large"}/>&nbsp;Large</UnselectedLabel>}
                            <br/><br/>
                            <label for="quantity" className="quantity">Quantity:</label>
                                <select onChange={this.quantityHandler} name="quantity" id="quantity"  value={this.state.quantity}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select><br/><br/>
                            
                            <AddtoCart>Add to cart</AddtoCart>
                        </form>
                    </Details>
                </TopDetails>
                {/* <Heading onClick={this.showCareInstructions}>Care Instructions</Heading> */}
                {this.state.careInstructions ? <Heading onClick={this.showCareInstructions}>Care Instructions ➖</Heading> : <Heading onClick={this.showCareInstructions}>Care Instructions ➕</Heading>}
                <BottomDetails>
                    {this.state.careInstructions ? 
                    <>
                    <CareCard>
                        <CareType>Light</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.light}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Water</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.water}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Fertilizer</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.fertilizer}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Humidity</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.humidity}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Temperature</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.temperature}</Description>
                    </CareCard>
                    </>
                    : null}
                </BottomDetails>

            </Page>
            </Background>
            <Footer />
            </>
        )
    }
}

export default DetailedPlant
