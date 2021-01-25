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

export default function FilterDepts(props) {
  const { changeFilters, requestApi, nameFilter } = props;
  const classes = useStyles();
  const [filterSelected, setfilterSelected] = useState({});
  const [filterSelectedAll, setfilterSelectedAll] = useState(false);
  const [filtersAll, setfiltersAll] = useState([]);
  const [checked, setChecked] = React.useState([]);

  useEffect(() => {
    if (requestApi) {
      requestApi().then(
        (result) => {
          setfiltersAll(result);
          let filterObject = {};
          result.forEach((f) => {
            filterObject[f.id] = false;
          });
          setfilterSelected(filterObject);
        },
        (error) => {
          console.log("error", error);
        }
      );
    } else {
      setfiltersAll([
        { id: 0, descripcion: "No Tiene" },
        { id: 1, descripcion: "Tiene" },
      ]);
      let filterObject = {};
      [
        { id: 0, descripcion: "No Tiene" },
        { id: 1, descripcion: "Tiene" },
      ].forEach((f) => {
        filterObject[f.id] = false;
      });
      setfilterSelected(filterObject);
    }
  }, []);

  useEffect(() => {
    let filt = Object.keys(filterSelected);
    let filter = [];
    filt.forEach((f) => {
      filterSelected[f] && filter.push(f);
    });
    changeFilters(nameFilter, filter);
  }, [filterSelected]);

  const handleChangeDepart = (event) => {
    !filterSelectedAll && setChecked([]);
    setfilterSelectedAll(!filterSelectedAll);
    if (!filterSelectedAll) {
      let array = [];
      for (let i = 0; i < filtersAll.length; i++) {
        array.push(i);
      }
      setChecked(array);
    } else {
      setChecked([]);
    }
    Object.keys(filterSelected).forEach((d) => {
      setfilterSelected((prevState) => ({
        ...prevState,
        [d]: !filterSelectedAll ? true : false,
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
    Object.keys(filterSelected).forEach((d, i) => {
      setfilterSelected((prevState) => ({
        ...prevState,
        [d]: newChecked.includes(i) && true,
      }));
    });
    if (newChecked.length !== filtersAll.length) {
      setfilterSelectedAll(false);
    } else {
      setfilterSelectedAll(true);
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{nameFilter}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterSelectedAll}
                  onChange={handleChangeDepart}
                  name="all"
                />
              }
              label="TODOS"
            />
            {filtersAll.map((item, index) => (
              <ListItem key={item.id} button>
                {filterSelectedAll ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={true}
                        onChange={handleToggle(index)}
                        name={
                          nameFilter === "Jurisdiccion" ||
                          nameFilter === "Org. Dependencia"
                            ? item.nombre
                            : item.descripcion
                        }
                      />
                    }
                    label={
                      nameFilter === "Jurisdiccion" ||
                      nameFilter === "Org. Dependencia"
                        ? item.nombre
                        : item.descripcion
                    }
                  />
                ) : (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.indexOf(index) !== -1}
                        onChange={handleToggle(index)}
                        name={
                          nameFilter === "Jurisdiccion" ||
                          nameFilter === "Org. Dependencia"
                            ? item.nombre
                            : item.descripcion
                        }
                      />
                    }
                    label={
                      nameFilter === "Jurisdiccion" ||
                      nameFilter === "Org. Dependencia"
                        ? item.nombre
                        : item.descripcion
                    }
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
