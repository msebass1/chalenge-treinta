import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer (props){
  const mapStyles = {
    width: '80%',
    height: '70%',
  };

  const getMarkers= ()=>{
    const [minLat,maxLat] = [4530643,4820056];
   const [minLon,maxLon] = [-74200560,-74000000];
    var wrap = [];
    for(var i=0;i<25;i++){
      wrap.push(<Marker name={` Position #${i+1}`}position={{
	lng: (Math.floor(Math.random() * (maxLon - minLon)) + minLon)/1000000,
	lat: (Math.floor(Math.random() * (maxLat - minLat)) + minLat)/1000000 
      }}
      icon={{
      url: "https://www.treinta.co/wp-content/uploads/2020/08/treinta-icon-300-1-150x150.png",
      anchor: new props.google.maps.Point(32,32),
      scaledSize: new props.google.maps.Size(20,20)
    }}
      />);
    }
    return wrap;
    
  }

  return (
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 4.60971, lng: -74.0817500}}
        >
	  {getMarkers()}
	</Map>
    );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCH4HjagIkKahsAWEgvvz6tFcuTO5xNNeU'
})(MapContainer);

