import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import { localities } from "../services/filterBar";

export default function FilterLocalities(props) {
  const { deptSelected } = props;
  const classes = useStyles();
  const [localSelected, setLocalSelected] = useState({});
  const [localSelectedAll, setLocalSelectedAll] = useState(false);
  const [localitiesAll, setLocalitiesAll] = useState([]);
  const [checked, setChecked] = useState([]);

  /*useEffect(() => {
    localities(deptSelected).then((localities) => {
        setLocalitiesAll(localities)
        let departObject = {}
        departments.forEach(d => {
          departObject[d.id] = false
        });
        setFilterDepart(prevState => {
          return {...prevState, ...departObject};
        });
        console.log("DEPARTOBJECT1", departObject)
        console.log("DEPARTOBJECT", filterDepart)
      },
      (error) => {
        console.log("error", error)
      }
      );
  }, []);*/

  /*useEffect(() => {
    let selectedDeptCount = Object.values(departSelected).filter(
      (d) => d === true
    ).length;
    if (selectedDeptCount === 1) {
      let deptId = "";
      let depts = Object.keys(departSelected);
      depts.forEach((d) => {
        departSelected[d] && (deptId = d);
      });
      slocalities(deptId).then((localities) => {
        etLocalitiesAll(localities)
        let departObject = {}
        departments.forEach(d => {
          departObject[d.id] = false
        });
        setFilterDepart(prevState => {
          return {...prevState, ...departObject};
        });
        console.log("DEPARTOBJECT1", departObject)
        console.log("DEPARTOBJECT", filterDepart)
      },
      (error) => {
        console.log("error", error)
      }
      );
  }, [departSelected]);
    }*/

  /*const handleChangeLocal = (event) => {
    !localSelectedAll && setChecked([]);
    setLocalSelectedAll(!localSelectedAll);
    if (!localSelectedAll) {
      let array = [];
      for (let i = 0; i < 25; i++) {
        array.push(i);
      }
      setChecked(array);
    } else {
      setChecked([]);
    }
    Object.keys(localSelected).forEach((l) => {
      setLocalSelected((prevState) => ({
        ...prevState,
        [l]: !localSelectedAll ? true : false,
      }));
    });
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    Object.keys(localSelected).forEach((d, i) => {
      setLocalSelected((prevState) => ({
        ...prevState,
        [d]: newChecked.includes(i) && true,
      }));
    });
    if (newChecked.length !== 25) {
      setLocalSelectedAll(false);
    } else {
        setLocalSelectedAll(true);
    }
  };*/

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
      <Typography className={classes.heading}>Localidades</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {deptSelected === "" ? (
          <Typography>Mantener solo 1 deprtamento seleccionado</Typography>
        ) : (
          /*<FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localSelectedAll}
                    onChange={handleChangeLocal}
                    name="all"
                  />
                }
                label="TODOS"
              />
              {localitiesAll.map((item, index) => (
                <ListItem key={item.id} button>
                  {localSelectedAll ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={handleToggle(index)}
                          name={item.nombre}
                        />
                      }
                      label={item.nombre}
                    />
                  ) : (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.indexOf(index) !== -1}
                          onChange={handleToggle(index)}
                          name={item.nombre}
                        />
                      }
                      label={item.nombre}
                    />
                  )}
                </ListItem>
              ))}
            </FormGroup>
          </FormControl>*/
          <Typography>{deptSelected}</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
