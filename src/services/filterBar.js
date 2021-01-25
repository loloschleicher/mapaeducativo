import { axiosRequest } from "../utils/axios";

//Departments
const urlDepartments = 'http://mapa.mec.gob.ar:8082/api/departamento';
export function departments() {
    return axiosRequest(urlDepartments, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.data);
}

//Localities
const urlLocalities = 'http://mapa.mec.gob.ar:8082/api/localidad';
export function localities(deptId) {
    return axiosRequest(urlLocalities+"/"+deptId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.data);
}

//Modalitiess
const urlModalities = 'http://mapa.mec.gob.ar:8082/api/modalidad';
export function modalities() {
    return axiosRequest(urlModalities, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//sectors
const urlSectors = 'http://mapa.mec.gob.ar:8082/api/sector';
export function sectors() {
    return axiosRequest(urlSectors, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//Ambit
const urlAmbit = 'http://mapa.mec.gob.ar:8082/api/ambito';
export function ambit() {
    return axiosRequest(urlAmbit, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//Dependencis
const urlDependencies = "http://mapa.mec.gob.ar:8082/api/dependencia";
export function dependencies() {
    return axiosRequest(urlDependencies, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//State
const urlState = "http://mapa.mec.gob.ar:8082/api/estado";
export function state() {
    return axiosRequest(urlState, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//Jurisdictions
const urlJurisdictions = "http://mapa.mec.gob.ar:8082/api/jurisdicciones";
export function jurisdictions() {
    return axiosRequest(urlJurisdictions, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//Org. Dependencies
const urlOrgDependencies = "http://mapa.mec.gob.ar:8082/api/organismodependencia";
export function orgDependencies() {
    return axiosRequest(urlOrgDependencies, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}

//Providers
const urlProviders= "http://mapa.mec.gob.ar:8082/api/proveedor";
export function providers() {
    return axiosRequest(urlProviders, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}


//Providers
const urlEstablishments = "http://mapa.mec.gob.ar:8082/api/localizacion";
export function establishments() {
    return axiosRequest(urlEstablishments, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}
