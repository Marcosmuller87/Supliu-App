import React from "react";
import { Container } from "react-bootstrap";
import useGetAlbumQuery from "../apis/supliuApi";

const Album = () => {
  const { data, itsFetching } = useGetAlbumQuery("min");
  if (itsFetching) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <Container className="mt-2 mb-4 p-2">
      <h1>Done</h1>
    </Container>
  );
};

export default Album;
