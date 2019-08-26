import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}))

const Header = (props) => {
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Hidden smUp implementation='js'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={props.onMobileOpen}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography variant='h6' noWrap>
          My Custom Header
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header

Header.propTypes = {
  onMobileOpen: PropTypes.func.isRequired
}
