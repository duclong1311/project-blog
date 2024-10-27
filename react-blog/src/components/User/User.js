import './User.scss';
import ModelCreateUser from "./ModalCreatePost";
import reactLogo from '../../assets/react-logo.png';
import baseAxios, { METHOD_HTTP } from "../../Config/BaseAxios";
import { CiBookmark } from "react-icons/ci";
import { useEffect } from 'react';
import { useState } from 'react';
import { GiWorld } from "react-icons/gi";
import { FaLock } from "react-icons/fa";

const User = (props) => {
    const [list, setList] = useState([]);

    const getData = async () => {
        try {
            const data = await baseAxios(METHOD_HTTP.GET, "/posts");
            setList(data);
            console.log("All post: ", data);
        } catch (e) {
            alert(e.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="user-container">
                <ModelCreateUser />
                {
                    list.map((item) => (
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

export default User;