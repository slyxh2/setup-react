import { useSelector, useDispatch } from 'react-redux';
import { CombinedState } from '../../store/reducers/index';
import { addNum, minusNum, addNumAsync } from '../../store/actioins/count';
import Button from '@mui/material/Button';
import './index.css';
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
        <div className='count'>
            <h1>{count}</h1>
            <main>
                <Button variant="contained" onClick={() => { dispatch(addNum()) }}>add</Button>
                <Button variant="contained" onClick={() => { dispatch(minusNum()) }}>minus</Button>
                <Button variant="contained" onClick={() => { dispatchThunk(addNumAsync()) }}>addAsync</Button>
            </main>

        </div>
    )
};

export default Count;