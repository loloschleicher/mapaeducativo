import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterDepts from './filterDepts'
import FilterLocalities from './filterLocalities'
import { departments } from "../services/filterBar";
import { modalities } from "../services/filterBar";
import { dependencies } from "../services/filterBar";
import { state } from "../services/filterBar";
import { jurisdictions } from "../services/filterBar";
import { orgDependencies } from "../services/filterBar";
import { sectors } from "../services/filterBar";
import { ambit } from "../services/filterBar";
import { providers } from "../services/filterBar";
import { establishments } from "../services/filterBar";
import FilterComponent from './filterComponent'
import { connect } from 'react-redux';
import { addEstablishments } from '../actions/establishments'

const FilterBar = (props) => {
  const { visible, addEstablishments } = props
  const [deptSelected, setDeptSelected] = useState("")
  const [filters, setFilters] = useState({})
  const [establishmentsFilters, setEstablishmentsFilters] = useState()
  const classes = useStyles();

  useEffect(() => {
    establishments().then(
      (result) => {
        let arr= []
        for(let i=0; i < 20; i++){
          arr.push(result[i])
        }
        setEstablishmentsFilters(arr);
        addEstablishments(arr)
      },
      (error) => {
        console.log("establishmentsFilters error", error);
      }
    );
  }, [filters])

  const selectDepartment = (deptId) => {
    setDeptSelected(deptId)
  }

  const changeFilters = (filterType, filter) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterType]: filter,
    }));
  }

  //console.log("filters", filters)
  //console.log("establishmentsFilters", establishmentsFilters)

  return (
    <div className={classes.root} style={{'display': visible ? 'block' : 'none'}}>
      <FilterDepts changeFilters={changeFilters} selectDepartment={selectDepartment} requestApi={departments} nameFilter={"Departamentos"} />
      <FilterLocalities deptSelected={deptSelected}  />
      <FilterComponent changeFilters={changeFilters} requestApi={dependencies} nameFilter={"Dependencia"} />
      <FilterComponent changeFilters={changeFilters} requestApi={state} nameFilter={"Estados"} />
      <FilterComponent changeFilters={changeFilters} requestApi={jurisdictions} nameFilter={"Jurisdiccion"} />
      <FilterComponent changeFilters={changeFilters} requestApi={orgDependencies} nameFilter={"Org. Dependencia"} />
      <FilterComponent changeFilters={changeFilters} requestApi={modalities} nameFilter={"Modalidades"} />
      <FilterComponent changeFilters={changeFilters} requestApi={sectors} nameFilter={"Gestion"} />
      <FilterComponent changeFilters={changeFilters} requestApi={ambit} nameFilter={"Ambitos"} />
      <FilterComponent changeFilters={changeFilters} nameFilter={"Internet"} />
      <FilterComponent changeFilters={changeFilters} nameFilter={"Agua Potable"} />
      <FilterComponent changeFilters={changeFilters} requestApi={providers} nameFilter={"Proveedores"} />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    height: '95vh',
    marginTop: '10%',
    zIndex: 1,
    overflowY: 'overlay'
  }
}));


const mapStateToProps = state => {
  return {
      establishments: state.establishments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEstablishments: establishments => dispatch(addEstablishments(establishments)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);