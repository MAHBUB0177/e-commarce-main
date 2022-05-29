import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';


import './shipment.css'

const Ship = () => {
  const [logedInUser,setLogedInUser]=useContext(UserContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch("example")); 
  return (
    <form className="shiping" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" {...register("exampleRequired", { required: true })}  defaultValue={logedInUser.name}/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="error">This field is required</span>}


      <input name="email" {...register("exampleRequired", { required: true })}  defaultValue={logedInUser.email}/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="error">This field is required</span>}

      <input name="address" {...register("exampleRequired", { required: true })}  defaultValue=""/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="error">This field is required</span>}
      <input name="phone" {...register("exampleRequired", { required: true })}  defaultValue=""/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="error">This field is required</span>}

      {/* <input name="name" defaultValue={logedInUser.name} createRef={register("exampleRequired", { required: true })} />
      {errors.name && <span >This name is required</span>}

      <input name="email" defaultValue={logedInUser.email} createRef={register("exampleRequired", { required: true })} />
      {errors.email && <span  className="error">This email is required</span>}

      <input name="phone" defaultValue='' createRef={register("exampleRequired", { required: true })} />
      {errors.phone && <span  className="error">This phone is required</span>}

      <input name="address" defaultValue='' createRef={register("exampleRequired", { required: true })} />
      {errors.address && <span className="error">This address is required</span>} */}
      
      <input type="submit" />
    </form>
  );
  
};

export default Ship;