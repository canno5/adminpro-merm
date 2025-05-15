import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';

const Admin_Contact_Update = () => {

    const param = useParams();
    console.log("PAram id " + param.id)

    const { authorizationToken } = useAuth();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const InputEvent = (event) => {
        const { value, name } = event.target;
        setContact(
            {
                ...contact,
                [name]: value
            }
        )
    }

    const getSingleContact = async () => {
        const responce = await fetch(`http://localhost:4000/api/admin/contact/${param.id}`, {
            method: "GET",
            headers: {
                Authorization: authorizationToken
            }
        });
        const data = await responce.json();
        if (responce.ok) {
            setContact({ name: data.name, email: data.email, message: data.message });
        }




    }


    useEffect(() => {
        getSingleContact();

    }, []);


    const dataUpdate = async (e) => {
        e.preventDefault();
        try {

            const res = await fetch(`http://localhost:4000/api/admin/contact/update/${param.id}`, {
                method: "PATCH",
                headers: {
                    Authorization: authorizationToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });
            if (res.ok) {
                toast.success("Contatc Update Sucessfully");
            } else {
                toast.error("Contatc Nothing Update Sucessfully");
            }

        } catch (err) {
            console.log("The Err Update FrontEnd Contact " + err);
        }
    }


    return (
        <>
            <section>
                <main>
                    <div className="sletion-registraction">
                        <div className="container-grid grid-one-cols">
                            <div className="registraction-form">
                                <form action="#" method="post">
                                    <h2 className='heading-register mb-3'>Contact Us Form</h2>
                                    <br />
                                    <div className="inputBox">
                                        <label htmlFor="UserName">Name</label>
                                        <input type="text"
                                            name="name"
                                            id="username"
                                            placeholder='User Name'
                                            onChange={InputEvent}
                                            value={contact.name}
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="Email">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder='Email Address' onChange={InputEvent} value={contact.email} required autoComplete="off" />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="Message">Message</label>
                                        <textarea name="message" id="" cols="30" rows="6" onChange={InputEvent} placeholder="Comment" value={contact.message} required autoComplete="off"></textarea>


                                    </div>

                                    <button onClick={dataUpdate}>Update Now</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}

export default Admin_Contact_Update
