import Count from "../../components/count";
import { useNavigate } from 'react-router-dom';
import Avatar from "../../components/avatar";
import logo from './react.png';
import Button from '@mui/material/Button';
import './index.css';
const Home = () => {
    let navgiate = useNavigate();
    return (
        <div className="home">
            <h1>This is Home Page</h1>
            <Avatar src={logo} />
            <Count />
            <Button variant="contained" onClick={() => navgiate('show')}>Check dependencies</Button>
        </div>

    )
};

export default Home;