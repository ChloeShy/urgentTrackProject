import React from "react";
import styles from "../App.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

function ServicePageMap({ userLocation, location }) {
  // Determine which location to use for the map
  const mapLocation = location || userLocation;

  // If neither location nor userLocation is provided, show a loading message
  if (!mapLocation) {
    return (
      <div>
        <HourglassBottomIcon />
        地圖更新中...
      </div>
    );
  }

  return (
    <div className={styles["googleMapWrapper"]}>
      <p className={styles["mapHeading"]}>
        <LocationOnIcon />
        {location ? `${location.hospitalName}位置：` : "您的當前位置："}
      </p>
      <div className={styles["mapContainer"]}>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3691.2652607348364!2d${mapLocation.longitude}!3d${mapLocation.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE4JzIwLjkiTiAxMTTCsDEwJzA1LjUiRQ!5e0!3m2!1sen!2shk!4v1702883238467!5m2!1sen!2shk`}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ServicePageMap;