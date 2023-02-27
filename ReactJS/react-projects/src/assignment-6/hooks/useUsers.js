import { useState } from "react";
import API_ENDPOINT from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useUsers = () => {
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(false);

    const getUsers = async () => {
        setTicketLoading(true);
        await fetch(API_ENDPOINT.users)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setUsers(data);
                    setUserLoading(false);
                }, 2000);
            });
    };

    const addUser = async (formInfo) => {
        console.log(formInfo);
        await fetch(API_ENDPOINT.users, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullname: formInfo.fullname,
                email: formInfo.email,
                password: formInfo.password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers([...users, data]);
                toast.success("User added successfully.");
            });
    };

    const findUser = async (formInfo) => {
        console.log("find user.")
        setLoggedInUser(false);
        await fetch(`${API_ENDPOINT.users}`)
            .then((res) => res.json())
            .then((data) => {
                const userArray = Object.keys(data).map((key) => ({
                    ...data[key],
                    nodeName: key,
                }))
                setUsers(userArray);

                
            });
            let user = users.some((user) =>
                user.email === formInfo.email &&
                user.password === formInfo.password
            );

            if (user) {
                console.log("hello")
                setLoggedInUser(true);
                sessionStorage.setItem("loggedIn", true);
                toast.success("Logged in successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } 
    };

    return { users, userLoading, getUsers, addUser, findUser, loggedInUser };
};

export default useUsers;
