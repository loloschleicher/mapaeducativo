import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from 'react-redux';

const InfoBar = (props) => {
  const { establishments } = props
  const [visible, setVisible] = useState(false)
  const [minimize, setMinimize] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    establishments.length === 0 ? setVisible(false) : setVisible(true)
  }, [establishments])

  const handleMinimize = () => {
    setMinimize(!minimize)
  }

  if(visible){
    return (
      <div className={classes.root}>
        <div style={{ display: minimize ? "block" : "none", backgroundColor: 'white' }} onClick={handleMinimize} >
          ver infomracion
        </div>
        <div className={classes.headerInfo} style={{display: !minimize ? "block" : "none"}}>
          <Typography className={classes.titleHeaderInfo}>
            Informacion{" "}
            <span style={{ fontSize: 12 }} onClick={handleMinimize}>
              esconder
            </span>{" "}
          </Typography>
          <Typography className={classes.contentHeaderInfo}>
            Total: {establishments.length}
          </Typography>
        </div>
        {establishments.map((est, index) => (
          <Accordion style={{display: !minimize ? "block" : "none"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{est.nombre}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Info</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  }else{
    return (
      <React.Fragment></React.Fragment>
    )
  }

}


const useStyles = makeStyles((theme) => ({
    root: {
      width: '70%',
      height: '95vh',
      marginTop: '10%',
      zIndex: 1,
      overflowY: 'overlay'
    },
    headerInfo: {
      backgroundColor: 'white',
      height: '10%'
    },
    titleHeaderInfo: {
      fontSize: 22,
      textAlign: 'center'
    },
    contentHeaderInfo: {
      fontSize: 16,
      textAlign: 'left'
    }
  }));


  const mapStateToProps = state => {
    return {
        establishments: state.establishments
    };
  };
  
  export default connect(
    mapStateToProps
  )(InfoBar);