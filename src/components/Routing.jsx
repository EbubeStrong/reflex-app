import { useEffect, useRef } from "react";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import { useMap } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation";

function Routing() {
  const map = useMap();
  const routingControlRef = useRef(null);
  const markerRef = useRef(null);
  const location = useGeoLocation();

  let walkingIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/16273/16273676.png",
    iconSize: [40, 40],
  });

  useEffect(() => {
    if (!location.loaded) return;

    // Add initial marker for user's location
    const initialMarker = L.marker(
      [location.coordinates.lat, location.coordinates.lng],
      { icon: walkingIcon }
    ).addTo(map);
    markerRef.current = initialMarker;

    const onClickMap = (e) => {
      // Remove previous routing control and marker if they exist
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      const destinationMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(
        map
      );

      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(location.coordinates.lat, location.coordinates.lng),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
      })
        .on("routesfound", function (e) {
          const route = e.routes[0];
          let index = 0;
          const moveMarker = () => {
            if (index < route.coordinates.length) {
              initialMarker.setLatLng([
                route.coordinates[index].lat,
                route.coordinates[index].lng,
              ]);
              index++;
              setTimeout(moveMarker, 100);
            }
          };
          moveMarker();
        })
        .addTo(map);

      routingControlRef.current = routingControl;
      markerRef.current = destinationMarker;
    };

    map.on("click", onClickMap);

    return () => {
      map.off("click", onClickMap);
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }
      if (initialMarker) {
        map.removeLayer(initialMarker);
      }
    };
  });

  return null;
}

export default Routing;
