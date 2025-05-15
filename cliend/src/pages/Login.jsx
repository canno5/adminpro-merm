import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
export const Login = () => {
  const navigate = useNavigate();
  const { storageTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;
  const [user, setUser] = useState({
    email: "", password: ""
  });
  const InputEvent = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value })
  }
  const dataSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const realData = await data.json();
      console.log(realData);
      if (data.ok) {
        toast.success("Login is Sucessfully",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        storageTokenInLS(realData.token);
        setUser({ email: "", password: '' });
        navigate("/");
      } else {
        if(!user.email || !user.password){
          toast.error(realData.message);
        }else{
          toast.error(realData.extraDetails ? realData.extraDetails : realData.message, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    } catch (err) {
      console.log("Login FrontEnd Err " + err);
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
                  <h2 className='heading-register mb-3'>Login Form</h2>
                  <br />
                  <div className="inputBox">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="email" name="email" id="email" placeholder='Email Address' onChange={InputEvent} value={user.email} required autoComplete="off" />
                  </div>
                  <div className="inputBox">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="password" id="" placeholder='Password' onChange={InputEvent} value={user.password} required autoComplete="off" />
                  </div>
                  <button onClick={dataSubmit}>Login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}