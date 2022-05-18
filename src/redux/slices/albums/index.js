import { createSlice } from "@reduxjs/toolkit";
// Axios
import axios from "axios";

export const baseUrl = "https://tiao.supliu.com.br/api/album";

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
  },
});
// Album Actions
export const { fetchAlbums } = albumSlice.actions;
// Album reducers
export default albumSlice.reducer;
// Fetches albums desde o server
export const fetchAllAlbums = () => (dispatch) => {
  axios
    .get(baseUrl)
    .then((response) => {
      dispatch(fetchAlbums(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
