import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

// import { makeStyles } from '@mui/material'
// const usesStyles = makeStyles(() => ({
//     menuBatton: {
//         marginRight: 5,
//     },
//     title: {
//         flexGrow: 1,
//     },
// }))

const Header = () => {
    // const classes = usesStyles()

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        xyi
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
