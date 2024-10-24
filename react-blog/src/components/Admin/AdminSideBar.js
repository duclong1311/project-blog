import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SlCalender } from "react-icons/sl";
import { DiApple } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { FaChartBar } from "react-icons/fa";

const AdminSideBar = ({ collapsed }) => {
    return (
        <>
            <div style={{
                display: 'flex',
                height: '100%',
                minHeight: '400px'
            }}>
                <Sidebar collapsed={collapsed}>
                    <Menu menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? 'black' : '#black',
                                    backgroundColor: active ? '#black' : undefined,
                                };
                        },
                    }}
                    >
                        <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                            User
                        </div>
                        <SubMenu label="Charts" icon={<FaChartBar />}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                        <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                            Admin
                        </div>
                        <MenuItem icon={<SlCalender />}>  Calendar</MenuItem>
                        <MenuItem icon={<DiApple />}>  E-commerce</MenuItem>
                        <MenuItem icon={<DiCodeigniter />}>  Examples</MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    );
}

export default AdminSideBar;