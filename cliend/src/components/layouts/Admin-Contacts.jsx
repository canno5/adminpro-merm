import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const AdminContacts = () => {
    const [user, setUser] = useState([]);
    const { authorizationToken } = useAuth();
    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/admin/contact", {
                method: "GET",
                headers: { Authorization: authorizationToken }
            });
            const data = await response.json();
            if (response.ok) {
                getAllContacts();
                setUser(data.dataUser);
            }
        } catch (err) {
            console.log("The Err contacts admin " + err)
        }
    }
    const deleteContact = async (id) => {
        try {
            const responce = await fetch(`http://localhost:4000/api/admin/contact/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            }
            );
            const data = await responce.json();
            if (responce.ok) {
                toast.success("Delete Sucessfully");
            } else {
                toast.error("Delete Not Sucessfully");
            }

        } catch (err) {
            console.log("The Err contatc delete " + err)
        }
    }
    useEffect(() => {
        getAllContacts();
    }, []);

    return (
        <>
            <section className="admin-user-section">
                <div className="container bg-none">
                    <h1>Admin Contat Data</h1>
                </div>
                <div className="container bg-none">
                    <table>
                        <thead className="theader">
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Message</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((curElem, ind) => {
                                const { _id, name, email, message } = curElem
                                return <tr key={ind}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{message}</td>
                                    <td>
                                        <Link to={`/admin/contacts/${curElem._id}/edit`}>Edit</Link>

                                    </td>
                                    <td><button onClick={() => deleteContact(_id)}>Delete</button></td>
                                </tr>

                            })}

                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )
}