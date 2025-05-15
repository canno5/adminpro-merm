import React from 'react'
import HeroImage from './HeroImage'

const CommonCode = ({ className, className_2, title, shortPara, para, para_two, para_three, img }) => {

    return (
        <>
            <div className="sletion-registraction">
                <div className="container-grid grid-two-cols">
                    {className === "second-img" ? <HeroImage className="hero-imgs" img={img} /> : null}
                    <div className={"hero-info " + className_2}>
                        <p style={{ fontSize: "1.8rem" }}>Hello {shortPara}!</p>
                        <h1>{title}</h1>
                        <p>{para} </p><br />
                        <p>{para_two} </p> <br />
                        <p>{para_three} </p>
                        <div className='herobtn'>                            <button>Read More</button>
                            <button>More than</button>
                        </div>
                    </div>
                    {className === "first-img" ? <HeroImage className="hero-img" img={img} /> : null}
                </div>
            </div>
        </>
    )
}
export default CommonCode