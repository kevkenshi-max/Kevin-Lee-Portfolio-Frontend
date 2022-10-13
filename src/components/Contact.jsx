import React from 'react'

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form method='POST' action="https://getform.io/f/4ea7ff9a-ea01-415d-89c0-996c4de2b61e" className="flex flex-col max-w-[680px] w-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>- Submit the form below or shoot me an email ( kevinhhlee6@gmail.com )</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'  />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'  />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
