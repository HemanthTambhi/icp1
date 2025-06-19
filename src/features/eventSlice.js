import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEventList, getFeaturedEvents, getNearbyPlaces, getTopOrganizations } from "./eventThunk";

// post || patch thunks
// export const UpdatePrayWelcomeBonusThunk = createAsyncThunk(
//   "/user/welcome-bonus",
//   UpdatePrayWelcomeBonus
// );

export const getEventListThunk = createAsyncThunk(
    "event/getEventList",
    getEventList
);

export const getFeaturedEventsThunk = createAsyncThunk(
    "event/getFeaturedEvents",
    getFeaturedEvents
);

export const getNearbyPlacesThunk = createAsyncThunk(
    "event/getNearbyPlaces",
    getNearbyPlaces
);

export const getTopOrganizationsThunk = createAsyncThunk(
    "event/getTopOrganizations",
    getTopOrganizations
);
// initial state

const initialState = {
  loading: {},
  events: [],
  featuredEvents: [],
  nearbyEvents: [],
  topOrganizations: [],
};

const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder

      // get Events List
      .addCase(getEventListThunk.pending, (state) => {
        state.loading[getEventListThunk.pending] = true;
      })
      .addCase(getEventListThunk.fulfilled, (state, action) => {
        state.loading[getEventListThunk.pending] = false;
        state.events = action.payload;
      })
      .addCase(getEventListThunk.rejected, (state)=>{
        state.loading[getEventListThunk.pending] = false;
      })
      // get Featured
      .addCase(getFeaturedEventsThunk.pending, (state) => {
        state.loading[getFeaturedEventsThunk.pending] = true;
      })
      .addCase(getFeaturedEventsThunk.fulfilled, (state, action) => {
        state.loading[getFeaturedEventsThunk.pending] = false;
        state.featuredEvents = action.payload;
      })
      .addCase(getFeaturedEventsThunk.rejected, (state) => {
        state.loading[getFeaturedEventsThunk.pending] = false;
      })
      // get Nearby
      .addCase(getNearbyPlacesThunk.pending, (state) => {
        state.loading[getNearbyPlacesThunk.pending] = true;
      })
      .addCase(getNearbyPlacesThunk.fulfilled, (state, action) => {
        state.loading[getNearbyPlacesThunk.pending] = false;
        state.nearbyEvents = action.payload;
      })
      .addCase(getNearbyPlacesThunk.rejected, (state) => {
        state.loading[getNearbyPlacesThunk.pending] = false;
      })
      // get Top Organizations
      .addCase(getTopOrganizationsThunk.pending, (state) => {
        state.loading[getTopOrganizationsThunk.pending] = true;
      })
      .addCase(getTopOrganizationsThunk.fulfilled, (state, action) => {
        state.loading[getTopOrganizationsThunk.pending] = false;
        state.topOrganizations = action.payload;
      })
      .addCase(getTopOrganizationsThunk.rejected, (state) => {
        state.loading[getTopOrganizationsThunk.pending] = false;
      })
  },
});

export const {  } = EventSlice.actions;

export default EventSlice.reducer;
