import React, { Component } from 'react'
import Plant from '../Plant/Plant'
import PlantContainerStyle from './PlantContainerStyle'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DetailedPlant from '../DetailedPlant/DetailedPlant'
import {plants} from '../../db'

export class PlantsContainer extends Component {

    state = {
        plants: plants
    }

    renderPlants = () => {
        let plants = this.state.plants
        return plants.map(plant => <Plant plant={plant} addToCart={this.props.addToCart} key={plant.id}/>)
    }

    render() {
        // when to render plants
            // right time to render the "index" == /plant

        //when to render a single plant
            // "show" ==/plants/:id
        return (
            <>
                <Switch>
                    <Route path="/plants/:id" render={(routerProps) =>  {
                        let id = parseInt(routerProps.match.params.id)
                        let plant;
                        if (this.state.plants.length > 0) {
                            plant = this.state.plants.filter( plant => plant.id === id)
                            return <DetailedPlant key={plant.id} plant={plant}/>
                        }
                    }}/>
                    <Route path="/plants" render={() => {
                        return (
                        <>
                        <PlantContainerStyle>
                            {this.renderPlants()}
                        </PlantContainerStyle>
                        </>
                        )
                    }}/>
                </Switch>
            </>
        )
    }
}

export default PlantsContainer
