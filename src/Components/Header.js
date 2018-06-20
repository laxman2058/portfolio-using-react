import React, { Component } from 'react';
import './Header.css';
// material Component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'


class Header extends Component{
    state = {
        isOpen : false,
        isClose: true
      }
    render(){
        return(
            <div>
            <AppBar>
                <AppBar position="static">
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
                    HELLO
                    </Drawer>
                </AppBar>
            </AppBar>
            </div>
        )
    }
}
export default Header;