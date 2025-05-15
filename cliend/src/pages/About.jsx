import { useState } from 'react'
import CommonCode from './CommonCode';
import { useAuth } from '../store/auth';
const About = () => {
  const [username, setUserName] = useState("");
  const [userData, setUserData ] = useState(true);
  const {user } = useAuth();
  if(user && userData){
    setUserName(user.name)
    setUserData(false);
  }
  return (
    <>
      <section className='hero'>
        <main>
          <CommonCode title="Why Choose Us" className="first-img" shortPara={username} para='
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus sequi eum itaque eaque inventore, maiores asperiores aliquam voluptatem laboriosam labore.' 
          para_two='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus sequi eum itaque eaque inventore, maiores asperiores aliquam voluptatem laboriosam labore sequi eum itaque eaque inventore, maiores asperiores aliquam voluptatem laboriosam labore.'
            para_three='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus sequi eum itaque eaque inventore, maiores asperiores aliquam voluptatem laboriosam labore sequi eum itaque eaque inventore, maiores asperiores aliquam voluptatem laboriosam labore.' img='images\logods.png' />
        </main>
      </section>
    </>
  )
}
export default About