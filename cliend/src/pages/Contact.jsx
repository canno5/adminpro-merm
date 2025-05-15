import { useState } from 'react'
import Map from './Map';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const defaultContactForm = {
  name: "",
  email: "",
  message: ""
}
const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if (user && userData) {
    setContact({
      name: user.name, email: user.email, message: ""
    });
    setUserData(false);
  }
  const InputEvent = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  }
  const dataSubmit = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      toast.error("Empty Input Fileds Please required");
      return;
    }
    try {
      const responese = await fetch("http://localhost:4000/api/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });

      if (responese.ok) {
        toast.success("Messag Send");
        setContact(defaultContactForm);
      }
    } catch (err) {
      toast.error("Message didn't Send");
      console.log("The Error Contact Form " + err);
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
                  <button onClick={dataSubmit}>Contact Now</button>
                </form>
              </div>
            </div>
          </div>
          <Map />
        </main>
      </section>
    </>
  )
}
export default Contact