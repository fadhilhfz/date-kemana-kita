import { useState } from "react";
import Map from "./Map";
import Button from "./Button";
import { Hearts } from "react-loader-spinner";
import MarkerAlert from "./MarkerAlert";
import FadeIn from "./FadeIn";

export default function MapPage() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading((st) => !st);
    console.log("fired");
  };

  return (
    <>
      <Map />
      <Button isLoading={loading} handleClick={handleClick}>
        {loading ? (
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
          "Find me one !"
        )}
      </Button>
      <FadeIn>
        <MarkerAlert />
      </FadeIn>
    </>
  );
}
