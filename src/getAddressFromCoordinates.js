import axios from "axios";

const getAddressFromCoordinates = async (lat, lng) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`
  );
  if (response.data.address) {
    const address = response.data.address;
    const city = address.city || address.town || address.village;
    const state = address.state;
    const country = address.country;
    return { city, state, country };
  } else {
    throw new Error("Unable to retrieve location data");
  }
};
export default getAddressFromCoordinates;
