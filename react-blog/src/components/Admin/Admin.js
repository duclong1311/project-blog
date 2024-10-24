import AdminSideBar from "./AdminSideBar";
import './Admin.scss';
import { useState } from "react";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <AdminSideBar collapsed={collapsed}/>
                </div>
                <div className="admin-content">
                    <button onClick={() => setCollapsed(!collapsed)}>
                        Toggle Sidebar
                    </button>
                </div>
            </div>
        </>
    );
}

export default Admin;