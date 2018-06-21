import React, { Component } from 'react';
import './Header.css';
// material Component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
//sidebar
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component{
    state = {
        isOpen : false,
        isClose: true
      }
    render(){
        return(
            <div>
            <AppBar>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon onClick = {
                                () => {
                                this.setState(
                                    {
                                    isOpen : true
                                    }
                                )
                                }
                            } />
                        </IconButton>
                    <Typography variant="title" color="inherit">
                        Laxman
                    </Typography>
                    </Toolbar>
                    <Drawer open={this.state.isOpen} onClose ={
                                () => {
                                this.setState(
                                    {
                                    isOpen : false
                                    }
                                )
                                }
                            } >
                            <List subheader={<ListSubheader>Network</ListSubheader>}>
                                <ListItem>
                                    <ListItemIcon>
                                    <WifiIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Wi-Fi" />
                                    <ListItemSecondaryAction>
                                    <Switch
                                        
                                    />
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                    <BluetoothIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Bluetooth" />
                                    <ListItemSecondaryAction>
                                    <Switch
                                    />
                                    </ListItemSecondaryAction>
                                </ListItem>
                             </List>
                             {/* data transfer */}
                            <MenuList>
                                <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Sent mail" />
                                </MenuItem>
                                <MenuItem>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Drafts" />
                                </MenuItem>
                                <MenuItem>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Inbox" />
                                </MenuItem>
                            </MenuList>
                    </Drawer>
                    
                </AppBar>
            </AppBar>
            
            </div>
        )
    }
}
export default Header;