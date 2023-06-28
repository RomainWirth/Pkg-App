import { createReducer } from '@reduxjs/toolkit';
import {
  fetchParkingSpotsRequest,
  fetchParkingSpotsSuccess,
  fetchParkingSpotsFailure,
  addParkingSpotRequest,
  addParkingSpotSuccess,
  addParkingSpotFailure,
  removeParkingSpotRequest,
  removeParkingSpotSuccess,
  removeParkingSpotFailure,
} from './actions';
import { ParkingSpot } from './types';

export interface ParkingState {
  parkingSpots: ParkingSpot[];
  loading: boolean;
  error: string | null;
}

const initialState: ParkingState = {
  parkingSpots: [],
  loading: false,
  error: null,
};

export const parkingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchParkingSpotsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchParkingSpotsSuccess, (state, action) => {
      state.loading = false;
      state.parkingSpots = action.payload;
    })
    .addCase(fetchParkingSpotsFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addParkingSpotRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addParkingSpotSuccess, (state) => {
      state.loading = false;
    })
    .addCase(addParkingSpotFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(removeParkingSpotRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(removeParkingSpotSuccess, (state) => {
      state.loading = false;
    })
    .addCase(removeParkingSpotFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
