import { createAction } from '@reduxjs/toolkit';

export const fetchParkingSpotsRequest = createAction('FETCH_PARKING_SPOTS_REQUEST');
export const fetchParkingSpotsSuccess = createAction('FETCH_PARKING_SPOTS_SUCCESS');
export const fetchParkingSpotsFailure = createAction<string>('FETCH_PARKING_SPOTS_FAILURE');

export const addParkingSpotRequest = createAction('ADD_PARKING_SPOT_REQUEST');
export const addParkingSpotSuccess = createAction('ADD_PARKING_SPOT_SUCCESS');
export const addParkingSpotFailure = createAction<string>('ADD_PARKING_SPOT_FAILURE');

export const removeParkingSpotRequest = createAction('REMOVE_PARKING_SPOT_REQUEST');
export const removeParkingSpotSuccess = createAction('REMOVE_PARKING_SPOT_SUCCESS');
export const removeParkingSpotFailure = createAction<string>('REMOVE_PARKING_SPOT_FAILURE');
