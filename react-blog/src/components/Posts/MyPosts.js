import { useEffect } from "react";
import { useState } from "react";
import baseAxios, { METHOD_HTTP } from "../../Config/BaseAxios";
import reactLogo from '../../assets/react-logo.png';
import { GiWorld } from "react-icons/gi";
import { FaLock } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import './MyPost.scss';
import { useSelector } from 'react-redux';

const MyPosts = (props) => {
    const [list, setList] = useState([]);
    const username = useSelector(state => state.user.account?.username);

    const getData = async () => {
        try {
            const data = await baseAxios(METHOD_HTTP.GET, "/posts");
            setList(data);
            console.log(username);
        } catch (e) {
            alert(e.message);
        }
    }

    useEffect(() => { getData(); }, []);

    return (
        <>
            <div className="my-posts-container">
                {
                    list.filter((item) => item?.username === username).map((item) => (
                        <>
                            <div className="post-container" key={item.id}>
                                <div className='post-image'>
                                    <img src={reactLogo}></img>
                                </div>
                                <div className='post-content'>
                                    <div className='post-type'>
                                        {`${item?.type?.toUpperCase() || 'UNKNOWN'} - `}
                                        {item?.status === "Private" ? <FaLock /> : <GiWorld />}
                                        <span><CiBookmark /></span>
                                    </div>
                                    <div className='post-title'>{item.title}</div>
                                    <div className='post-short-content'>{item.content}</div>
                                    <div className='post-tutor'>{item.username} - {item.createAt}</div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default MyPosts;