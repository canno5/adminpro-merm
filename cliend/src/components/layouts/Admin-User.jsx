import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth";
import { Link } from 'react-router-dom'

export const AdminUsers = () => {
    const { authorizationToken } = useAuth();
    const [user, setUser] = useState([]);
    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/admin/users", {
                method: "GET",
                headers: { Authorization: authorizationToken }
            });
            const data = await response.json();
            if (response.ok) {
                getAllUserData();
                setUser(data.dataUser);
            }
            else {
                console.log(data.message);
            }
        } catch (err) {
            console.log("The Err User Page Admin " + err);
        }
    }
    const deleteUser = async (id) => {
        const response = await fetch(`http://localhost:4000/api/admin/users/delete/${id}`, {
            method: "DELETE",
            headers: { Authorization: authorizationToken }

        });

        const data = await response.json();
        console.log("user after delete " + data);

    }


    useEffect(() => {
        getAllUserData();

    }, []);


    return (
        <>
            <section className="admin-user-section">
                <div className="container bg-none">
                    <h1>Admin User Data</h1>
                </div>
                <div className="container bg-none ">
                    <table>
                        <thead className="theader">
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((curElem, ind) => {
                                return <tr key={ind}>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.email}</td>
                                    <td>{curElem.phone}</td>
                                    <td>
                                        <Link to={`/admin/users/${curElem._id}/edit`}>Edit</Link>
                                    </td>
                                    <td><button onClick={() => deleteUser(curElem._id)}>Delete</button></td>
                                </tr>

                            })}

                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )
}
