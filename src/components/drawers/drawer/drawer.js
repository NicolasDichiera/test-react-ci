import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import PropTypes from 'prop-types'

import TemporaryDrawer from '../temporary-drawer/temporary-drawer'
import PermanentDrawer from '../permanent-drawer/permanent-drawer'

const ResponsiveDrawer = (props) => {
  const drawerContent =
  (
    <>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} onClick={props.onMobileOpen}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text} onClick={props.onMobileOpen}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  )

  return (
    <>
      <Hidden smUp implementation='css'>
        <TemporaryDrawer
          drawerContent={drawerContent}
          mobileOpen={props.mobileOpen}
          onMobileOpen={props.onMobileOpen}
        >
          {props.children}
        </TemporaryDrawer>
      </Hidden>

      <Hidden xsDown implementation='css'>
        <PermanentDrawer drawerContent={drawerContent}>
          {props.children}
        </PermanentDrawer>
      </Hidden>
    </>
  )
}

export default ResponsiveDrawer

ResponsiveDrawer.propTypes = {
  children: PropTypes.any.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onMobileOpen: PropTypes.func.isRequired
}
