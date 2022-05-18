import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
// Redux
import { fetchAllAlbums } from "../redux/slices/albums";
import { useSelector, useDispatch } from "react-redux";

const Album = () => {
  const { albums } = useSelector((state) => state.albums);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAlbums());
  }, [dispatch]);

  return (
    <Container>
      <div>
        {albums.map((album, index) => (
          <div key={index}>
            Album:{album.name},{album.year}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Album;
