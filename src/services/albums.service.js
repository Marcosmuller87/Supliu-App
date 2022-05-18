import apiClient from "../helper/apiClient";

// Servicos de albums
class AlbumsService {
  getAllAlbums() {
    return apiClient().get("/album");
  }
  postAlbum(album) {
    return apiClient().post("/album", album);
  }
  getAlbum(id) {
    return apiClient().get(`/album/${id}`);
  }
  deleteAlbum(id) {
    return apiClient().delete(`/album/${id}`);
  }
  postTrack(track) {
    return apiClient().post(`/album/track`, track);
  }
  deleteTrack(id) {
    return apiClient().delete(`/album/track/${id}`);
  }
}

export default new AlbumsService();
