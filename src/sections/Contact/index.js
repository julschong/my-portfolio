import './Contact.scss';
import { useFormik } from 'formik';
import { forwardRef } from 'react';
import axios from 'axios';

const Contact = forwardRef((props, ref) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            axios
                .post('https://formsubmit.co/7julius.lee@gmail.com', values)
                .then((res) => console.log(res));
        }
    });
    return (
        <section id="contact" ref={ref}>
            <div className="section-container">
                <h2 className="contact-title title">CONTACT</h2>
                <form
                    className="contant-form"
                    onSubmit={formik.handleSubmit}
                    autoComplete="off"
                    autoCorrect="off"
                >
                    <p className="title-caption">
                        Have a question or want to work together?
                    </p>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Name..."
                        spellCheck="false"
                    />

                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email..."
                        spellCheck="false"
                    />

                    <textarea
                        id="message"
                        name="message"
                        type="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        maxLength={255}
                        rows={5}
                        placeholder="You message..."
                    />

                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
});

export default Contact;
