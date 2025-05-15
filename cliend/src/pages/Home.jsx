import CommonCode from './CommonCode'
import { ProhectDetails } from './ProhectDetails';
const Home = () => {
    return (
        <>
            <section className='hero'>
                <main>
                    <CommonCode title="Welcome to Canan Developer Join to Development" className="first-img" shortPara="Welcome to IT Compant World the Best" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius molestias provident asperiores exercitationem omnis assumenda, amet officiis nobis consectetur impedit dolorem esse, perspiciatis veniam, unde quas. Veritatis debitis quaerat unde placeat adipisci est." img='images\logodesc.png' />
                    <div className="project">
                        <div className="project-overview">
                          <ProhectDetails/>
                          <ProhectDetails/>
                          <ProhectDetails/>
                          <ProhectDetails/>

                        </div>
                    </div>
                    <CommonCode title={"Welocome to my Canan Digital.com"} className="second-img" shortPara="Welcome to IT Compant World the Best" className_2="hero-infos" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius molestias provident asperiores exercitationem omnis assumenda, amet officiis nobis consectetur impedit dolorem esse, perspiciatis veniam, unde quas. Veritatis debitis quaerat unde placeat adipisci est." img='images\logods.png'/>
                </main>
            </section>



        </>
    )



}

export default Home
