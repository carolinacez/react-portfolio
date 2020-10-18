import React, {useState} from 'react'; 

function ContactForm() {
    
    const [stateForm, setForm] = useState({ name:'', email: '', message: ''});
    const {name, email, message} = stateForm;

    const [errorMessage, setError] = useState('');

    function emailValidation(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function formValidation(e) {

        if(e.target.name === 'email') {
            const validEmail = emailValidation(e.target.value)
            if(!validEmail) {
                setError('Please enter a valid email')
            } else {
                setError('')
            }
        } else {
            if(!e.target.value.length) {
                setError(`${e.target.name} is required `)
            } else {
                setError('');
            }
        } if(!errorMessage){
            setForm({...stateForm, [e.target.name] : e.target.value})
        }
    }

    function submit(e) {
        e.preventDefault(); 
        console.log(stateForm)
    }
    
    return(
        <section className="form-wrapper">
            <h1>Contact Form</h1>
            <form id="form" onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={formValidation} name="name"/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} onBlur={formValidation} name="email"/>
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea type="message" defaultValue={message} onBlur={formValidation} name="message"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-error">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;