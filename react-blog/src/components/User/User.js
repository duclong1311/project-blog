import './User.scss';
import ModelCreateUser from "./ModalCreatePost";


const User = (props) => {
    return (
        <>
            <div className="user-container">
                <ModelCreateUser />

                <div className="content">
                    List all post
                </div>
            </div>
        </>
    )
}

export default User;