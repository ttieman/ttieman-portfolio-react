import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css'

const Contact = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };
    const  submitEmail = (e) => {
        e.preventDefault();                
        if (!formState.name || !formState.email || !formState.message) {
            alert('Please fill out all fields.');
            return;
        }
                emailjs.send('service_2u63svd', 'template_x3aq0ui', formState, 'ixp6lnQpJJH5_onyp')
            .then((result) => {
                console.log('success', result.text);
            }
            ).catch((error) => {
                console.log('error', error.text);
            }
            );
            setFormState({name: '', email: '', message: ''});

    };
    return(
        <section className='container'>
            <div className='contact-body'>
                <h1>Contact Me</h1>
                <form onSubmit={submitEmail}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="name" className="form-control"
                            id="name" name="name"placeholder="Name" value={formState.name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" 
                            className="form-control"
                            id="email" 
                            placeholder="Enter email"
                            value={formState.email
                            }
                            name="email"
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control"
                        name="message" id="message" rows="3" value={formState.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
        );
                        
}

export default Contact;