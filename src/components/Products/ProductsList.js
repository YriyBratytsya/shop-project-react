import Typography from '@mui/material/Typography'
import React from 'react'
import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from './productsArray'

const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                marginTop={2}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            color={product.color}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
