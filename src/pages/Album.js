import React from "react";
import { Button, Container } from "react-bootstrap";
// Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Funcao Slice
import { deleteAlbums } from "../redux/slices/albums";

const Album = () => {
  const { albums } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  console.log(albums);

  return (
    <Container>
      <div>
        {albums.map((album, index) => (
          <div key={index}>
            Album:{album.name},{album.year}{" "}
            <Button variant="danger" onClick={() => dispatch(deleteAlbums())}>
              Deletar
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Album;
