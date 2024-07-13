import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const Header = (props) => {
  const { user } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Espresso
          </Typography>
          { user ? user.name : <Button color="inherit">Login</Button> }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header