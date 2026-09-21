import { useState } from "react";

import { Profile_Data } from '../Data/Profile_Data_Context';
export { Profile_Data };

export const Profile_Data_provider = ({ children }) => {

    const [user, setUser] = useState([
        {
            name: "jahid rangrej",
            phone: "9887310753",
            email: "jahidrangrej9@gmail.com",
            password: "9887310753",
            username : "m.j.r",
        }
    ]);
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem("currentUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    };

    const get_Data = (userData) => {
        setUser((prev) => [...prev, {
            name: userData.Name,
            phone: userData.Phone,
            email: userData.E_Mail,
            password: userData.Password,
            username : userData.Username,
        }]);
    };

    const Check_login = (userData) => {
        const foundUser = user.find(
            (u) =>
                (u.email === userData.Phone_Email ||
                    u.phone === userData.Phone_Email) &&
                u.password === userData.Password
        );

        if (foundUser) {
            setCurrentUser(foundUser);
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            return true;
        } else {
            alert("Invalid Credentials");
            return false;
        }
    };

    return (
        <Profile_Data.Provider value={{ user, get_Data, Check_login, currentUser ,logout }}>
            {children}
        </Profile_Data.Provider>
    )
}