import './index.css';
interface AvatarProps {
    src: string
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {

    return <>
        <img src={src} className="avatar" />
    </>
};

export default Avatar;