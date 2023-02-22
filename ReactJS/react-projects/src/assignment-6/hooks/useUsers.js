import { useState } from "react";

const useUsers = () => {
    const [loggedInUser, setLoggedInUser] = useState(false)
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(false);

    const getUsers = async () => {
        setTicketLoading(true);
        await fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setUsers(data)
                    setUserLoading(false)
                }, 2000)
            })
    }

    const addUser = async (formInfo) => {
        console.log(formInfo)
        await fetch("http://localhost:3000/users", {
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

    const findUser = async (formInfo) => {
        setLoggedInUser(false);
        await fetch(`http://localhost:3000/users?email=${formInfo.email}&password=${formInfo.password}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length >= 1) {
                    setLoggedInUser(true)
                }
            })
    }

    return { users, userLoading, getUsers, addUser, findUser, loggedInUser }

}

export default useUsers;