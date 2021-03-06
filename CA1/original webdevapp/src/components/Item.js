import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Item extends Component {
    getStyle = () => {
        return {
            background: 'rgba(200, 200, 200, 0.3)',
            padding: '10px',
            width: '60%',
            borderBottom: '1px #ccc dotted',
            margin: '0 auto'
        }
    }

    infoStyle = () => {
        return {
            display: 'inline',
            background: 'rgba(0, 255, 0)',
            borderRadius: '45%',
            padding: '5px 10px',
            textAlignment: 'right',
    
            opacity: this.props.item.bought ? '30%' : '100%'
        }
    }


    render() {
        const { id, title, type } = this.props.item;

        const typeLink = '/'+ type

        return (
            <div style={this.getStyle()}>
                <table style={{width: "100%"}}>
                    <tr>
                    <td style={{width: '25%'}}>
                    {<input style={checkStyle} type="checkbox" onChange={this.props.isBought.bind(this, id)}/>} {' '}
                    </td>
                    <td style={{width: '25%'}}>
                    <span style = {spanStyle}><p style = {this.infoStyle()}>{title}</p></span>
                    </td>
                    <td style={{width: '25%'}}>
                    <span style = {spanStyle}><Link style = {this.infoStyle()} to={type}>{typeLink}</Link></span>
                    </td>
                    <td style={{width: '25%'}}>
                    <button onClick={this.props.delete.bind(this, id)} style={btnStyle}>x</button>
                    </td>
                    </tr>
                </table>
            </div>
        )
    }
}


// PropTypes
Item.propTypes = {
    items: PropTypes.object
}

const spanStyle = {
    width: '25%',
    padding: '5px 10px',
    textAlignment: 'right'
}

const checkStyle = {
    float: 'left'
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Item
