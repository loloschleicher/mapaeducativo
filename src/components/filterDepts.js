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
import { departments } from "../services/filterBar";


export default function FilterDepts(props) {
  const { changeFilters, selectDepartment } = props
  const classes = useStyles();
  const [departSelected, setDepartSelected] = useState({});
  const [departSelectedAll, setDepartSelectedAll] = useState(false);
  const [departmentsAll, setDepartmentsAll] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    departments().then(
      (departments) => {
        setDepartmentsAll(departments);
        let departObject = {};
        departments.forEach((d) => {
          departObject[d.id] = false;
        });
        setDepartSelected(departObject);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }, []);
  
  useEffect(() => {
    let selectedDeptCount = Object.values(departSelected).filter(
      (d) => d === true
    ).length;
    let depts = Object.keys(departSelected);
    if (selectedDeptCount === 1) {
      let deptId = "";
      depts.forEach((d) => {
        departSelected[d] && (deptId = d);
      });
      selectDepartment(deptId)
    }else{
        selectDepartment("")
    }
    let filter = []
    depts.forEach((d) => {
        departSelected[d] && (filter.push(d));
    });
    changeFilters("depts", filter)
  }, [departSelected]);

  const handleChangeDepart = (event) => {
    !departSelectedAll && setChecked([]);
    setDepartSelectedAll(!departSelectedAll);
    if (!departSelectedAll) {
      let array = [];
      for (let i = 0; i < departmentsAll.length; i++) {
        array.push(i);
      }
      setChecked(array);
    } else {
      setChecked([]);
    }
    Object.keys(departSelected).forEach((d) => {
      setDepartSelected((prevState) => ({
        ...prevState,
        [d]: !departSelectedAll ? true : false,
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
    Object.keys(departSelected).forEach((d, i) => {
      setDepartSelected((prevState) => ({
        ...prevState,
        [d]: newChecked.includes(i) && true,
      }));
    });
    if (newChecked.length !== departmentsAll.length) {
      setDepartSelectedAll(false);
    } else {
      setDepartSelectedAll(true);
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Departamentos</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={departSelectedAll}
                  onChange={handleChangeDepart}
                  name="all"
                />
              }
              label="TODOS"
            />
            {departmentsAll.map((item, index) => (
              <ListItem key={item.id} button>
                {departSelectedAll ? (
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
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
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
