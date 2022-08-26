import { AnyAction } from 'redux'

type CountState = {
    count: number
}
let initialState: CountState = { count: 100 };
const count = (state: CountState, action: AnyAction): CountState => {
    state = state || initialState;
    const { count } = state;
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: count + 1
            }
        case 'minus':
            return {
                ...state,
                count: count - 1
            }
        default:
            return state
    }
};

export default count;