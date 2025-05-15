import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <section className='sletion-registraction'>
                <div className="error">
                    <div className="errImage">
                        <h1>404</h1>
                    </div>
                    <div className="errinfo">
                        <h4>sorry page not found</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis possimus consequatur officia pariatur saepe animi a, libero, vel obcaecati porro cupiditate iusto, error repellat assumenda! </p>
                        <div className='herobtn errbtn'>
                        <button>
                        <NavLink to="/">Return Home</NavLink>
                        </button>
                        <button>
                        <NavLink to="/">Report Problem</NavLink>
                        </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ErrorPage