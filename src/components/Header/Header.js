import React, { useEffect, useState } from "react";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import {
    Link
} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";

import './Header.css';
import { useAuthState } from "react-firebase-hooks/auth";


export default function Header() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <nav>
            <ul className="header">
                <li className="flex items-center ">
                    <LocalFireDepartmentIcon />
                    <h1>Hệ thống báo cháy</h1>
                </li>
                <li>
                    Nhóm 12
                </li>
                {
                    user ?
                        <li className="flex">
                        <div>
                            {user.email}
                        </div>
                        <button onClick={() => logout() } className="ml-8">Đăng xuất</button>
                        </li>
                        :
                        <Link to={'/login'}>
                            Đăng nhập
                        </Link>

                }
            </ul>

        </nav>
    );
}