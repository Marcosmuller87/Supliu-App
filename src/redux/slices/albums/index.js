import { createSlice } from "@reduxjs/toolkit";
// Axios
import axios from "axios";

// variables de entorno
export const token = process.env.REACT_APP_API_KEY;
export const baseUrl = process.env.REACT_APP_API_URL;

// Autenticação
export const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token,
  },
});

// Slice
export const albumSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
  },
  reducers: {
    // Reducer para obtener os albums
    fetchAlbums: (state, action) => {
      state.albums = action.payload;
    },
    // Reducer para postar um album
    postAlbum: (state, action) => {
      state.albums.push(action.payload);
    },
    // Reducer para deletar um album
    deleteAlbum: (state, action) => {
      state.albums = state.albums.filter(
        (album) => album.id !== action.payload
      );
    },
  },
});

// Album Actions
export const { fetchAlbums, postAlbum, deleteAlbum } = albumSlice.actions;

// Album reducers
export default albumSlice.reducer;

// Obter albums desde o server
export const fetchAllAlbums = () => (dispatch) => {
  authAxios
    .get(`album?keyword=`)
    .then((response) => {
      dispatch(fetchAlbums(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Postar albums
export const postAlbums = (album) => (dispatch) => {
  authAxios
    .post(baseUrl, album)
    .then((response) => {
      dispatch(postAlbum(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Deletar albums
export const deleteAlbums = (id) => (dispatch) => {
  authAxios
    .delete(`${baseUrl}album/${id}`)
    .then((response) => {
      dispatch(deleteAlbum(id));
    })
    .catch((error) => {
      console.log(error);
    });
};
