import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import PropTypes from 'prop-types'

const ProductListItem = ({ name, description, type, color, price }) => {
    return (
        <Card>
            <CardContent>
                <h4>{name}</h4>
                <p> {description}</p>
                <div>Type: {type}</div>
                <div>Color: {color}</div>
                <div>{price} $</div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductListItem
