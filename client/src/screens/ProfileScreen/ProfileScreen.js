import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useAlert } from "react-alert";
import { geolocated } from "react-geolocated";

const ProfileScreen = ({
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords,
}) => {
  const alert = useAlert();
  const [location, setLocation] = useState({
    place_name: "",
    latitude: null,
    longitude: null,
  });
  const [formData, setFormData] = useState({
    location: "",
    email: "",
    password: "",
  });
  const submitUserProfile = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      const msg = err.response ? err.response.data.message : err;
      alert.show(msg, { type: "error" });
    }
  };
  const getLocation = async (e) => {
    e.preventDefault();
    if (isGeolocationAvailable && isGeolocationEnabled) {
      setLocation({
        ...location,
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }
    console.log(isGeolocationAvailable, isGeolocationEnabled, coords);
  };
  const getLocationFromText = async (e) => {
    e.preventDefault();
    const loc = formData.location.replace(" ", "%20");
    console.log(loc);
    const res = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=pk.eyJ1IjoicmhhcnNoaXQ4MiIsImEiOiJja3lzdHZrZWsxN2x1MnFwdG5odDU0dDY4In0.Vzpw618KcpQyA3sPLPMpNQ&autocomplete=false&limit=1&country=IN&worldview=in`
    );
    setLocation({
      place_name: res.data.features[0].place_name,
      latitude: res.data.features[0].geometry.coordinates[1],
      longitude: res.data.features[0].geometry.coordinates[0],
    });
    console.log(res.data.features[0].place_name);
    console.log(res.data.features[0].geometry.coordinates);
  };
  return (
    <div id="mt">
      <h3 className="text-center">User Profile</h3>
      <Form className="w-50 m-auto text-center" onSubmit={submitUserProfile}>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </Form.Group>
        <Button onClick={(e) => getLocation(e)}>Get My Location</Button>
        <Button onClick={(e) => getLocationFromText(e)}>
          Get Location From Text
        </Button>
        {location.place_name.length > 0 ? (
          <p>Your Location: {location.place_name}</p>
        ) : null}
        {location.latitude != null ? (
          <p>
            Latitude and Longitude: {location.latitude} , {location.longitude}
          </p>
        ) : null}
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

// export default ProfileScreen;
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(ProfileScreen);
