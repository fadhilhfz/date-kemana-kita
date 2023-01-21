import { useState } from "react";
import Map from "./Map";
import Button from "./Button";
import { Hearts } from "react-loader-spinner";
import MarkerAlert from "./MarkerAlert";
import Modal from "./Modal";
// import FadeIn from "./FadeIn";

export default function MapPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleClick = () => {
    setIsLoading((st) => !st);
  };

  return (
    <>
      <Map setIsModalOpened={setIsModalOpened} />
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
          "Find me one"
        )}
      </Button>
      {/* <FadeIn>
        <MarkerAlert />
      </FadeIn> */}
      <MarkerAlert />
      {isModalOpened && <Modal setIsModalOpened={setIsModalOpened} />}
    </>
  );
}
