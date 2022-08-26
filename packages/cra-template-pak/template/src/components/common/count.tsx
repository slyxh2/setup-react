import { useSelector, useDispatch } from 'react-redux';
import { CombinedState } from '../../store/reducers/index';
import { addNum, minusNum, addNumAsync } from '../../store/actioins/count';
type CountState = {
    count: number
}
const Count = () => {
    let countState: CountState = useSelector((state: CombinedState) => state.count);
    let { count } = countState;
    let dispatch = useDispatch();
    const useAppDispatch: () => Function = useDispatch;
    let dispatchThunk = useAppDispatch();
    return (
        <>
            <h1>count</h1>
            <h2>{count}</h2>
            <button onClick={() => { dispatch(addNum()) }}>add</button>
            <button onClick={() => { dispatch(minusNum()) }}>minus</button>
            <button onClick={() => { dispatchThunk(addNumAsync()) }}>addAsync</button>
        </>
    )
};

export default Count;