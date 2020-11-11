import React, { Component } from 'react'
import SearchStyling from './SearchStyle'

export class Search extends Component {

    state = {
        search: ""
    }

    localSearchHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            search : e.target.value
        })
        
        this.props.search(e.target.value)
    }
        

    render() {
        return (
            <>
                Search<SearchStyling onChange={this.localSearchHandler} type="text" name="search" value={this.state.search}></SearchStyling>
            </>
        )
    }
}

export default Search
