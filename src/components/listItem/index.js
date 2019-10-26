import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        const { title, desc} = this.props;
        if(!title){
            return null;
        }

        return (
            <div data-test="listItemComponent">
                <h4 data-test="componentTitle">{title}</h4>
                <p data-test="componentDesc">{desc}</p>
            </div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;