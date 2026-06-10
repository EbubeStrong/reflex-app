import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

function GeoCoder() {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);

    return () => {
      map.removeControl(geocoder);
    };
  }, [map]);

  return null;
}

export default GeoCoder;
