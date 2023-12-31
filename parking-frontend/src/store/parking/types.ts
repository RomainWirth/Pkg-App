export interface ParkingSpot {
    id: number;
    isOccupied: boolean;
  }
  
  export enum ActionTypes {
    FETCH_PARKING_SPOTS_REQUEST = 'FETCH_PARKING_SPOTS_REQUEST',
    FETCH_PARKING_SPOTS_SUCCESS = 'FETCH_PARKING_SPOTS_SUCCESS',
    FETCH_PARKING_SPOTS_FAILURE = 'FETCH_PARKING_SPOTS_FAILURE',
    ADD_PARKING_SPOT_REQUEST = 'ADD_PARKING_SPOT_REQUEST',
    ADD_PARKING_SPOT_SUCCESS = 'ADD_PARKING_SPOT_SUCCESS',
    ADD_PARKING_SPOT_FAILURE = 'ADD_PARKING_SPOT_FAILURE',
    REMOVE_PARKING_SPOT_REQUEST = 'REMOVE_PARKING_SPOT_REQUEST',
    REMOVE_PARKING_SPOT_SUCCESS = 'REMOVE_PARKING_SPOT_SUCCESS',
    REMOVE_PARKING_SPOT_FAILURE = 'REMOVE_PARKING_SPOT_FAILURE',
  }
  
  export type ParkingAction =
    | { type: ActionTypes.FETCH_PARKING_SPOTS_REQUEST }
    | { type: ActionTypes.FETCH_PARKING_SPOTS_SUCCESS; payload: ParkingSpot[] }
    | { type: ActionTypes.FETCH_PARKING_SPOTS_FAILURE; payload: string }
    | { type: ActionTypes.ADD_PARKING_SPOT_REQUEST }
    | { type: ActionTypes.ADD_PARKING_SPOT_SUCCESS }
    | { type: ActionTypes.ADD_PARKING_SPOT_FAILURE; payload: string }
    | { type: ActionTypes.REMOVE_PARKING_SPOT_REQUEST }
    | { type: ActionTypes.REMOVE_PARKING_SPOT_SUCCESS }
    | { type: ActionTypes.REMOVE_PARKING_SPOT_FAILURE; payload: string };
  