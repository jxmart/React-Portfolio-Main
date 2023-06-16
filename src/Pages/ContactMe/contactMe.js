import React from 'react';

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity()) {
          // Valid form submission
          console.log('Form is valid');
          // Add your logic for handling the form submission here
        } else {
          // Invalid form fields
          form.classList.add('was-validated');
        }
      };
      
    return (
        <div className="content d-flex justify-content-center align-items-center">
            <section className='contact'>
                <form className='contact-form'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control form-control-lg" id="message" rows="5" placeholder="Enter your message"></textarea>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </section>
        </div>

    )
}

export default ContactMe