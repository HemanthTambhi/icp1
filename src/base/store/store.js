import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "../../features/eventSlice";

// Create Redux store with Redux Toolkit
const store = configureStore({
  reducer: {
    event: EventSlice
  }
});

export default store;
