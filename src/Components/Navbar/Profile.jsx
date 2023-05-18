import { useState } from "react"
import { Logout } from "../Login/Login"
import styles from "./Profile.module.css"
import { Link } from "react-router-dom";

export const Profile = () => {
    //const data = JSON.parse(localStorage.getItem("login"))
    const data = localStorage.getItem("login")
    //const [logout, setLogout] = useState(false)
    //需要从数据库调取数据并设置用户名
    let userData
    if (data) {
        userData = {
            name: "Acme"
        }
    }
    //
    else {
        userData = {
            //imageUrl: "",
            name: "Acme"
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("login")
        alert("Successfully Logged Out")
        window.location.reload();
        //window.location.href = "https://localhost:3000"
        // document.location.href = "https://booking-webapp-clone.herokuapp.com/"

    }

    return <>
        <div className={styles.profile} >

            <div>
                <h4>{userData.name}</h4>
            </div>
        </div>
        <div className={styles.signButton}>
            <Link to="/orderlist">
                <button>查看订单</button>
            </Link>

        </div>

        <div onClick={() => handleLogout()} >
                <Logout />
        </div>


    </>
}