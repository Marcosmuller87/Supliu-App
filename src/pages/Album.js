import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Album = () => {
  const { albums, isLoading, error } = useSelector((state) => state.albums);

  return (
    <Container className="mt-2 mb-4 p-2">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {albums && (
        <Table striped bordered hover>
          <tbody>
            {albums.map((album) => (
              <tr key={album.id}>
                <td>Album:{album.id}</td>
                <td>{album.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Album;
