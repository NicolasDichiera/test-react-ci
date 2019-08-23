import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import HeaderBar from '../header/header'
import ResponsiveDrawer from '../drawer/drawer'

function App () {
  return (
    <>
      <CssBaseline />
      <HeaderBar />
      <ResponsiveDrawer />

      <Container maxWidth='md'>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Container>

    </>
  )
}

export default App
