import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core'
import SideBar from './sideBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Logo from '../logo.svg'
import { fade } from '@material-ui/core/styles';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240

export default function Header(props) {
  const { open, handleDrawerOpen } = props
    const styles = useStyles();
    return (
      <AppBar position="fixed" /*className={styles.appBar}*/  /*position="fixed"*/
      className={clsx(styles.appBar, {
        [styles.appBarShift]: open,
      })}>
        <Toolbar className={styles.toolbar}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(styles.menuButton, {
              [styles.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          {/*<Menu /> <img width="200" alt="Logo" src={Logo} /> */}
          <div className={styles.search}>
          <div className={styles.containerSearchIcon}>
              <SearchIcon className={styles.searchIcon} />
            </div>
            <div className={styles.containerSearchIcon}>
              <SearchIcon className={styles.searchIcon} />
            </div>
            <InputBase
              className={styles.inputBase}
              placeholder="Ingrese su búsqueda"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
}
/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));*/

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#8BC34A",
      height: '64px',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 36,
    },
    /*appBar: {
        width: '100%',
        backgroundColor: "#8BC34A",
        left: 0,
        height: '80px'
    },*/
    toolbar: {
      minHeight: '64px'
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      //marginRight: theme.spacing(2),
      width: '17%',
      margin: 'auto',
      border: '1px solid #287A34'
      /*[theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(10),
        width: '60%',
      },*/
    },
    containerSearchIcon: {
      padding: theme.spacing(0, 2),
      right: 0,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderLeft: '1px solid #287A34'
    },
    searchIcon: {
      color: '#33691E'
    },
    inputRoot: {
      color: 'rgba(0, 0, 0, 5)',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: '5%',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '80%',
      },
    },
    inputBase: {
      display: 'flex',
      height: '48px'
    },
    containerSearchBy: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderLeft: '1px solid #287A34'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  