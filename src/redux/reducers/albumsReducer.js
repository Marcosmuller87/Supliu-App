import albumsActionTypes from "./albumsActionTypes";

// Estado inicial
export const initialState = {
  albums: [],
  isLoading: false,
  error: null,
};

// Reducers
export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case albumsActionTypes.GET_ALBUMS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case albumsActionTypes.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        isLoading: false,
        error: null,
      };
    case albumsActionTypes.GET_ALBUMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case albumsActionTypes.POST_ALBUM_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case albumsActionTypes.POST_ALBUM_SUCCESS:
      return {
        ...state,
        albums: [...state.albums, action.payload],
        isLoading: false,
        error: null,
      };
    case albumsActionTypes.POST_ALBUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case albumsActionTypes.DELETE_ALBUM_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case albumsActionTypes.DELETE_ALBUM_SUCCESS:
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.payload),
        isLoading: false,
        error: null,
      };
    case albumsActionTypes.DELETE_ALBUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case albumsActionTypes.POST_TRACK_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case albumsActionTypes.POST_TRACK_SUCCESS:
      return {
        ...state,
        albums: state.albums.map((album) => {
          if (album.id === action.payload.albumId) {
            album.tracks = [...album.tracks, action.payload.track];
          }
          return album;
        }),
        isLoading: false,
        error: null,
      };
    case albumsActionTypes.POST_TRACK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case albumsActionTypes.DELETE_TRACK_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case albumsActionTypes.DELETE_TRACK_SUCCESS:
      return {
        ...state,
        albums: state.albums.map((album) => {
          if (album.id === action.payload.albumId) {
            album.tracks = album.tracks.filter(
              (track) => track.id !== action.payload.trackId
            );
          }
          return album;
        }),
        isLoading: false,
        error: null,
      };
    case albumsActionTypes.DELETE_TRACK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
