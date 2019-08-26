import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
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

const PermanentDrawer = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{ paper: classes.drawerPaper }}
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

export default PermanentDrawer

PermanentDrawer.propTypes = {
  drawerContent: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
}
