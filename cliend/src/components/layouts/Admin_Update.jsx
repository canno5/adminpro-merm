import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
const Admin_Update = () => {
  const param = useParams();
  console.log("Parma id " + param.id);
  const { authorizationToken } = useAuth();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const InputEvent = (event) => {
    const { value, name } = event.target;
    setUser(
      {
        ...user,
        [name]: value
      }
    )
  }
  const dataUpdate = async (e) => {
    e.preventDefault();
    try {
      const respone = await fetch(`http://localhost:4000/api/admin/users/update/${param.id}`, {
        method: "PATCH",
        headers: {
          Authorization: authorizationToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      if (respone.ok) {
        toast.success("Update is Sucessfully");
      } else {
        toast.error("No Update Data");
      }
    } catch (err) {
      console.log("The Err Update Front " + err);
    }

  }

  const getSingelUser = async () => {
    const response = await fetch(`http://localhost:4000/api/admin/users/${param.id}`, {
      method: "GET",
      headers: { Authorization: authorizationToken }

    });
    const data = await response.json();
    if (response.ok) {
      setUser(data);
   }
  }
  useEffect(() => {
    getSingelUser();
  }, [])

  return (
    <>
      <section>
        <main>
          <div className="sletion-registraction">
            <div className="container-grid grid-one-cols">
              <div className="registraction-form">
                <form action="#" method="post">
                  <h2 className='heading-register mb-3'>Update User Data</h2>
                  <br />
                  <div className="inputBox">
                    <label htmlFor="username">Name</label>
                    <input type="text"
                      name="name"
                      id="username"
                      placeholder='User Name'
                      onChange={InputEvent}
                      value={user.name}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="inputBox">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='Email Address' onChange={InputEvent} value={user.email} required autoComplete="off" />
                  </div>
                  <div className="inputBox">
                    <label htmlFor="number">Phone Number</label>
                    <input type="tel" name="phone" id="" placeholder='Phone Number' onChange={InputEvent} value={user.phone} required autoComplete="off" />
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
export default Admin_Update