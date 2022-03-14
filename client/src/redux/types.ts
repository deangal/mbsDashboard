export const FETCH_MBS_ORDERS = 'FETCH_MBS_ORDERS'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_ALERT = 'SET_ALERT'

export interface Order {
    id: number,
    status : string,
    delivery_type: string,
    delivery_date: string,
    delivery_time: string,
}

export interface FilterData {
            
        }
export interface MbsOrders {
   data : Order[]
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface MbsState {
    data: MbsOrders | null | [];
    loading: boolean;
    error: string;
    toggle: boolean
}

export interface FetchMbsAction {
    type: typeof FETCH_MBS_ORDERS;
    payload: MbsState;
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: MbsState;
}

export interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: MbsState;
}

// export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string
}