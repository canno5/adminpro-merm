import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const { storageTokenInLS, API } = useAuth();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const InputEvent = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }
  const dataSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const res_data = await data.json();
      if (data.ok) {
        storageTokenInLS(res_data.token);
        toast.success("Registeraction Sucessfully", {
          position: "top-right",
          autoClose: 3000
        });
        setUser({ name: "", email: "", phone: "", password: "" });
        navigate("/");

      } else {
        if (!user.name || !user.email || !user.phone || !user.password) {
          toast.error(res_data.message);
        } else {
          toast.error(!res_data.extraDetails ? res_data.message : res_data.extraDetails);
        }
      }
    } catch (err) {
      console.log("register FrontEnd " + err);
    }
  }
  return (
    <>
      <section>
        <main>
          <div className="sletion-registraction">
            <div className="container-grid grid-two-cols">
              <div className="registraction-img">
                <img src="images/register.jpg" alt="Registraction Images" />
              </div>
              <div className="registraction-form">
                <form action="#" method="post">
                  <h2 className='heading-register mb-3'>Registraction Form</h2>
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
                  <div className="inputBox">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="password" id="" placeholder='Password' onChange={InputEvent} value={user.password} required autoComplete="off" />
                  </div>
                  <button onClick={dataSubmit}>Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
export default Register