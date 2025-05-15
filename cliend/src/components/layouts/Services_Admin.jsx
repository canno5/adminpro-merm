import { useState } from 'react'
const defaultContactForm = {
  heading: "",
  shortheading: "",
  serviceprice: "",
  paragraph: ""
}
const Services_Admin = () => {
  const [contact, setContact] = useState(defaultContactForm);

  const InputEvent = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  }
  const dataSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/data//admin/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });
      await res.json();
    } catch (err) {
      console.log("The Err Admin Services " + err);
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
                  <h2 className='heading-register mb-3'>Services Form</h2>
                  <br />
                  <div className="inputBox">
                    <label htmlFor="Services Heading">Services Heading</label>
                    <input type="text"
                      name="heading"
                      id="heading"
                      placeholder='Services Heading'
                      onChange={InputEvent}
                      value={contact.heading}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="inputBox">
                    <label htmlFor="Short Heading">Short Heading</label>
                    <input type="text" name="shortheading" id="shortheading" placeholder='Short Heading' onChange={InputEvent} value={contact.shortheading} required autoComplete="off" />
                  </div>
                  <div className="inputBox">
                    <label htmlFor="Service Price">Service Price</label>
                    <input type="text" name="serviceprice" id="serviceprice" placeholder='Service Price' onChange={InputEvent} value={contact.serviceprice} required autoComplete="off" />
                  </div>
                  <div className="inputBox">
                    <label htmlFor="Message">Service Paragraph</label>
                    <textarea name="paragraph" id="paragraph" cols="30" rows="6" onChange={InputEvent} placeholder="Paragraph" value={contact.paragraph} required autoComplete="off"></textarea>
                  </div>
                  <button onClick={dataSubmit}>Add Service</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Services_Admin

