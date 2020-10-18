import React from 'react'; 

function ContactForm() {
    
    // const [form, setForm] = useState({ name:'', email: '', message: ''});
    // const {name, email, message} = form;

    // const [error, setError] = useState('');

    // function emailValidation(e)

    // function formValidation(form) {

    //     if(form.target.name === 'email') {
    //         const verifyEmail = emailValidation(form.target.valu)
    //     }
    // }
    
    return(
        <section className="form-wrapper">
            <h1>Contact Form</h1>
            <form id="form">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name"></input>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" name="email"></input>
                </div>

                <div>
                    <label>Message:</label>
                    <input type="email" name="email"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;