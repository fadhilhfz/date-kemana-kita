import { useState } from "react";
import Map from "./Map";
import Button from "./Button";
import { Hearts } from "react-loader-spinner";
import Modal from "./Modal";
import { place } from "../place";
import "../css/MapPage.css";

export default function MapPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleClick = async () => {
    setIsLoading((st) => !st);
    setIsModalOpened(false);

    //For development reason, assume this is hitting an endpoint somewhere.
    const data = await new Promise((resolve) => {
      const randomIdx = Math.floor(Math.random() * place.length);
      setTimeout(() => {
        resolve(place[randomIdx]);
      }, 1000);
    });

    setIsLoading((st) => !st);
    setData(data);
  };

  const handleMarkerClick = () => {
    setIsModalOpened((st) => !st);
  };

  return (
    <>
      {isLoading ? <div className="Map-Blur"></div> : null}
      <Map
        onMarkerClick={handleMarkerClick}
        lat={data ? data.latitude : null}
        lon={data ? data.longitude : null}
        isLoading={isLoading}
      />
      <Button isLoading={isLoading} handleClick={handleClick}>
        {isLoading ? (
          <Hearts
            height="19"
            width="100"
            color="white"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass="loader-center"
            visible={true}
          />
        ) : (
          "Beri saya ide"
        )}
      </Button>
      {/* <MarkerAlert /> */}
      {isModalOpened && (
        <Modal setIsModalOpened={setIsModalOpened} data={data} />
      )}
    </>
  );
}
