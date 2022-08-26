import { combineReducers, ReducersMapObject } from 'redux';

import count from './count';
export type CombinedState = {
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
};

let reducers: ReducersMapObject = {
    count
};
let combinedReducers = combineReducers(reducers);

// export default combinedReducers;
export { combinedReducers };