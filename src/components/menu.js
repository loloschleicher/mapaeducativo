import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ExitIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom'


const AvatarProfile = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        orange: {
          color: theme.palette.getContrastText(deepOrange[500]),
          backgroundColor: deepOrange[500],
        },
        purple: {
          color: theme.palette.getContrastText(deepPurple[500]),
          backgroundColor: deepPurple[500],
          marginBottom: '10px'
        },
        avatar: {
            display: 'flex',
            paddingTop: '30px',
            paddingBottom: '30px',
            flexDirection: 'column',
            alignItems: 'center'
        }
      }));
    const classes = useStyles();
    return (
        <div className={classes.avatar}>
            <Avatar className={classes.purple}>OP</Avatar>
            <div>Mapa</div>
        </div>
    );
}

export default function TemporaryDrawer() {
  let history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
                <React.Fragment>
                    <Divider />
                    <List>
                          <List>
                            <ListItem button>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={'Productos'} onClick={() => { history.push("/productos") }}/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><PersonIcon /></ListItemIcon>
                                <ListItemText primary={'Perfil'} onClick={() => { history.push("/perfil") }}/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                <ListItemText primary={'Pedidos'} onClick={() => { history.push("/pedidos") }}/>
                            </ListItem>
                          </List>
                        <ListItem button>
                            <ListItemIcon><ExitIcon /></ListItemIcon>
                            <ListItemText primary={'Cerrar Sesión'} onClick={() => console.log("click logout") }/>
                        </ListItem>
                    </List>
                    <Divider />
                </React.Fragment>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <IconButton  edge="start" color="red" className={classes.menuIcon} onClick={toggleDrawer('left', true)}>
                <MenuIcon></MenuIcon>
          </IconButton>
          <Drawer left={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}


const useStyles = makeStyles({
  menuIcon: {
    color: "white"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});