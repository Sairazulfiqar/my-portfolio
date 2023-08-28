import React from 'react';
import { useForm } from "react-hook-form";
import "../App.css";

const Contact = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
      <div className="flex-child5" id="Contact">
        <div id="Contacts-main">
          <h1> <strong>Let's <span id='spanh1'>Connect</span></strong></h1> <br/>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                  <input placeholder='Name' id="name" className="name" name="nombre" type="text" {...register('nombre', {
                      required: true,
                      pattern: /^[a-zA-Z\s]+$/i
                  })} />
                  {errors.nombre?.type === 'required' && <p>Name is required</p>}
              </div>
            
              <div className='row'>
                  <input placeholder='Email' id="email" className="email" name="email" type="text" {...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                  })} />
                  {errors.email?.type === 'required' && <p>Email is required</p>}
                  {errors.email?.type === 'pattern' && <p>Email format is invalid</p>}
              </div>
              <div className='row'>
                  <textarea id="msg" className="message" name="message" type="text" placeholder='Enter your message' {...register('message')}/>
              </div>
              <div className='submit'>
                <input type="submit" id="submit" value="Let's talk" />
              </div>
          </form>
      </div>
    </div>
    );
};

export default Contact;
