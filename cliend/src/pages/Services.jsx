import { useState } from 'react'
import Card from './Card';
import { useAuth } from '../store/auth';
import { servicesApi } from './servicesapi';

const Services = () => {
  const [service, setService] = useState(servicesApi);
  const { serviceData} = useAuth();
  return (
    <>
      <h1 className='text-center fs-5'>Services</h1>
      <div className="services">
        {service.map(val => {
          const { title, provide, _id, para, price } = val;
          return <Card key={_id} title={title} para={para} price={price} provider={provide} images={val.images} />
        })}
      </div>



    </>
  )
}

export default Services
