import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import PropTypes from 'prop-types'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}))

const TemporaryDrawer = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <Drawer
        className={classes.drawer}
        variant='temporary'
        anchor='left'
        open={props.mobileOpen}
        onClose={props.onMobileOpen}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        <div className={classes.toolbar} />
        {props.drawerContent}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default TemporaryDrawer

TemporaryDrawer.propTypes = {
  children: PropTypes.any.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onMobileOpen: PropTypes.func.isRequired
}
