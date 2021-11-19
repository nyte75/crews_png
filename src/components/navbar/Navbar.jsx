import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutLined, MoneyCollectOutlined, BulbOutLined, FundOutlined, MenuOutLined } from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className='crs__navbar nav-container'>
            <Typography.Title level={2} className="logo">
                <Link to='/'>CREWS PNG</Link>
            </Typography.Title>
        </div>
    )
}

export default Navbar
