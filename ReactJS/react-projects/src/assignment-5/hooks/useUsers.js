import { useState } from "react";
import API_ENDPOINT from "../../api";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [ticketLoading, setTicketLoading] = useState(false);
    const [userLoading, setUserLoading] = useState(false);

    const getUsers = async () => {
        setTicketLoading(true);
        await fetch(API_ENDPOINT.users)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    const userArray = Object.keys(data).map((key) => ({
                        ...data[key],
                        nodeName: key,
                    }))
                    setUsers(userArray)
                    setUserLoading(false)
                }, 1000)
            })
    }

    const addUser = async (formInfo) => {
        await fetch(API_ENDPOINT.users, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: formInfo.fullname,
                email: formInfo.email,
                password: formInfo.password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers([...users, data])
            })
    }

    // const findUser = async (formInfo) => {
    //     setLoggedInUser(false);
    //     await fetch(`${API_ENDPOINT.users}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             if (data.length >= 1) {
    //                 console.log("logged in.")
    //                 setLoggedInUser(true)
    //             }
    //         })
    // }

    return { users, userLoading, getUsers, addUser }

}

export default useUsers;