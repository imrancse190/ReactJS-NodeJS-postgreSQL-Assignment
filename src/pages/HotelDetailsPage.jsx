import { ApartmentBedImageOffersContainer } from "../component/ApartmentBedImageOffersContainer";
import { CheckAvailabilitySidebarContainer } from "../component/CheckAvailabilitySidebarContainer";
import HeaderTitleSaveShare from "../component/HeaderTitleSaveShare";
import { HostedApartmentInformationContainer } from "../component/HostedApartmentInformationContainer";
import { HostInformationContainer } from "../component/HostInformationContainer";
import ImagesContainer from "../component/ImagesContainer";
import { LocationContainer } from "../component/LocationContainer";
import { ReviewsContainer } from "../component/ReviewsContainer";
import { TravelCheckInDateContainer } from "../component/TravelCheckInDateContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const HotelDetailsPage = () => {
  const [hotelInfo, setHotelInfo] = useState([]);
  const { slug } = useParams();
  console.log(slug);
  const getAllHotels = () => {
    axios
      .get(`http://localhost:3000/api/hotel/${slug}`)
      .then((data) => {
        console.log(data.data);
        setHotelInfo(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <div className="App">
      <HeaderTitleSaveShare title={hotelInfo.title} />
      <ImagesContainer images={hotelInfo.images} />
      <div className="container-size details-information">
        <div className="rental-listing">
          <HostedApartmentInformationContainer
            title={hotelInfo.title}
            host_information={hotelInfo.host_information}
            guest={hotelInfo.guest_count}
            bathroom={hotelInfo.bathroom_count}
            bedroom={hotelInfo.bedroom_count}
            description={hotelInfo.description}
            address={hotelInfo.address}
          />
          <ApartmentBedImageOffersContainer />
          <TravelCheckInDateContainer />
        </div>
        <div>
          <CheckAvailabilitySidebarContainer />
        </div>
      </div>
      <ReviewsContainer />
      <LocationContainer
        location={hotelInfo.address}
        latitude={hotelInfo.latitude}
        longitude={hotelInfo.longitude}
      />
      <HostInformationContainer host_info={hotelInfo.host_information} />
    </div>
  );
};
