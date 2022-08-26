import Count from "../../components/common/count";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let navgiate = useNavigate();
    return (
        <>
            <Count />
            <button onClick={() => navgiate('show')}>Go to '/Show' Router</button>
        </>

    )
};

export default Home;