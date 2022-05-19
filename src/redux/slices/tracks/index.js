import { createSlice } from "@reduxjs/toolkit";

// Autorização
import { authAxios } from "../albums";
import { baseUrl } from "../albums";

// Slice
export const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    tracks: [],
  },
  reducers: {
    // Reducer para postar um track
    postTrack: (state, action) => {
      state.tracks.push(action.payload);
    },
    // Reducer para deletar um track
    deleteTrack: (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track.id !== action.payload
      );
    },
  },
});

// Track Actions
export const { postTrack, deleteTrack } = trackSlice.actions;

// Album reducers
export default trackSlice.reducer; // Postar tracks
export const postTracks = (track) => (dispatch) => {
  authAxios
    .post(`${baseUrl}track`, track)
    .then((response) => {
      dispatch(postTrack(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Deletar tracks
export const deleteTracks = (id) => (dispatch) => {
  authAxios
    .delete(`${baseUrl}track/${id}`)
    .then((response) => {
      dispatch(deleteTrack(id));
    })
    .catch((error) => {
      console.log(error);
    });
};
