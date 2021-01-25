import React, {useEffect} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow  } from '@react-google-maps/api';
 
const containerStyle = {
  width: '100%',
  height: '100vh'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};
 
function MyComponent() {
  const [map, setMap] = React.useState(null)
  const [stores, setStores ] = React.useState([])
  const [positionInfoWindow, setPositionInfoWindow] = React.useState({})
  const [showInfoWindow, setShowInfoWindow]= React.useState(false)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {
    fetch("http://mapa.mec.gob.ar:8082/api/localizacion")
      .then(res => res.json())
      .then(
        (result) => {
          var count = 0
            var array = []
            result.forEach(element => {

                array.push({lat: element.domicilio.position[1], lng: element.domicilio.position[0]})
                //count++
            });
            setStores(array)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }, [])

  const clickMarker = (position) => {
    setPositionInfoWindow(position)
    setShowInfoWindow(true)
  }

  const closeInfoWindow = () => {
      setShowInfoWindow(false)
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyB9T71MrqTWubzHayatyn7RP5lpDMdcrgo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {stores.map((position) => (
          <Marker position={position} icon="./pin-varios.png" onClick={() => clickMarker(position)} />
        ))}
        {console.log("POSITION", positionInfoWindow)}
        {
            showInfoWindow &&
            <InfoWindow position={positionInfoWindow} onCloseClick={closeInfoWindow}>
            <div style={divStyle}>
              <h1>InfoWindow</h1>
            </div>
          </InfoWindow>
        }       
      </GoogleMap>
    </LoadScript>
  );
}


const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

 
export default React.memo(MyComponent)