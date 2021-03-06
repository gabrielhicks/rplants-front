import React, { Component } from 'react';
import { FilterStyle, AnimalPrint } from './FilterStyle';

export class Filter extends Component {
    state = {
        clicked: false,
    };

    //need to fix
    localClickHandler = () => {
        // eslint-disable-next-line
        this.setState(
            // eslint-disable-next-line no-sequences
            (prev) => ({ clicked: !prev.clicked }, this.props.filter())
        );
    };

    render() {
        return (
            <FilterStyle onClick={this.props.filter}>
                Pet-Friendly:&nbsp;&nbsp;&nbsp;
                <AnimalPrint
                    alt='pet friendliness'
                    src={
                        this.props.isFiltered
                            ? 'https://i.ibb.co/QkX6rPD/paw.webp'
                            : 'https://i.ibb.co/1ZZH9Sf/img-411676.webp'
                    }
                />
            </FilterStyle>
        );
    }
}

export default Filter;
