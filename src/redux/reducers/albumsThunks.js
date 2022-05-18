import albumsService from "../../services/albums.service";
import albumsActionTypes from "./albumsActionTypes";
import { useDispatch } from "react-redux";

// Dispatch de todos os albums
export const loadAllAlbumsAsync = () => {
  return async () => {
    const dispatch = useDispatch();
    dispatch({ type: albumsActionTypes.GET_ALBUMS_START });

    try {
      const albums = await albumsService.getAllAlbums();
      dispatch({ type: albumsActionTypes.GET_ALBUMS_SUCCESS, payload: albums });
    } catch (error) {
      dispatch({ type: albumsActionTypes.GET_ALBUMS_FAILURE, payload: error });
    }
  };
};

// Dispatch de um album
export const loadAlbumAsync = (id) => {
  return async (dispatch) => {
    dispatch({ type: albumsActionTypes.GET_ALBUM_START });

    try {
      const album = await albumsService.getAlbum(id);
      dispatch({ type: albumsActionTypes.GET_ALBUM_SUCCESS, payload: album });
    } catch (error) {
      dispatch({ type: albumsActionTypes.GET_ALBUM_FAILURE, payload: error });
    }
  };
};

// Dispatch do post de um album
export const postAlbumAsync = (dispatch, album) => {
  dispatch({ type: albumsActionTypes.GET_ALBUM_START });

  albumsService
    .postAlbum(album)
    .then((album) => {
      dispatch({ type: albumsActionTypes.GET_ALBUM_SUCCESS, payload: album });
    })
    .catch((error) => {
      dispatch({ type: albumsActionTypes.GET_ALBUM_FAILURE, payload: error });
    });
};

// Dispatch do delete de um album
export const deleteAlbumAsync = (dispatch, albumId) => {
  dispatch({ type: albumsActionTypes.DELETE_ALBUM_START });

  albumsService
    .deleteAlbum(albumId)
    .then(() => {
      dispatch({
        type: albumsActionTypes.DELETE_ALBUM_SUCCESS,
        payload: albumId,
      });
    })
    .catch((error) => {
      dispatch({
        type: albumsActionTypes.DELETE_ALBUM_FAILURE,
        payload: error,
      });
    });
};

// Dispatch do post de um track
export const postTrackAsync = (dispatch, track) => {
  dispatch({ type: albumsActionTypes.POST_TRACK_START });

  albumsService
    .postTrack(track)
    .then((track) => {
      dispatch({ type: albumsActionTypes.POST_TRACK_SUCCESS, payload: track });
    })
    .catch((error) => {
      dispatch({ type: albumsActionTypes.POST_TRACK_FAILURE, payload: error });
    });
};

// Dispatch do delete de um track
export const deleteTrackAsync = (dispatch, track) => {
  dispatch({ type: albumsActionTypes.DELETE_TRACK_START });

  albumsService
    .deleteTrack(track)
    .then(() => {
      dispatch({
        type: albumsActionTypes.DELETE_TRACK_SUCCESS,
        payload: track,
      });
    })
    .catch((error) => {
      dispatch({
        type: albumsActionTypes.DELETE_TRACK_FAILURE,
        payload: error,
      });
    });
};
