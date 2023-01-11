import { useState } from "react";
import Map from "./Map";
import Button from "./Button";

export default function MapPage() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading((st) => !st);
    console.log("fired");
  };

  return (
    <>
      <Map />
      {/* <Button isLoading={true} /> */}
      <Button isLoading={loading} handleClick={handleClick} />
    </>
  );
}
