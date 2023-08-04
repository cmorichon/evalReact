import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../UI/Button';
import Title from '../UI/Title';
import {toast} from 'react-toastify'


const Contact = () => {
  const [state, handleSubmit] = useForm("mgejordk");
 
  const handleFormSubmit = async(e)=>{
    e.preventDefault()
    await handleSubmit(e);
    if (state.succeeded) {
      toast.success('🍉 Message envoyé avec succès', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });   
  }
  }
  return (
    <section className='container mx-auto h-full'>
      <Title content='Contactez-nous'/>
      <div className='flex h-[calc(100%-8rem)]'>
        <form 
            onSubmit={handleFormSubmit} 
            className='mx-auto flex flex-col w-3/6 border h-2/3 justify-center p-5 rounded shadow bg-sky-50'
            action="https://formspree.io/f/mgejordk"
            method="POST"
            enctype="multipart/form-data"
            >
          <label htmlFor="name" className='pt-4 font-medium'>
            Votre nom et prénom
          </label>
          <input
            id="name"
            type="text" 
            name="name"
            className='border rounded shadow px-3 '
          />
          <ValidationError 
            prefix="Name" 
            field="name"
          />
          <label htmlFor="email" className='pt-4 font-medium'>
            Votre adresse e-mail
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            className='border rounded shadow px-3 '
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label htmlFor="email" className='pt-4 font-medium'>
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            className='border rounded shadow h-1/3'

          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <Button 
            type="submit" 
            content='Envoyer'
            classNames='w-1/3 mx-auto mt-10'
          />
        </form>
      </div>
    </section>
  );
}

export default Contact