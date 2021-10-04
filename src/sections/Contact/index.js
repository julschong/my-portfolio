import './Contact.scss';
import { Field, Form, Formik } from 'formik';
import { forwardRef, useRef, useState } from 'react';
import axios from 'axios';

import * as Yup from 'yup';
import { useInViewport } from 'react-in-viewport';
import { animationInView } from './../../utils/animationInView';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(250, 'Too Long!')
        .required('Required')
});

const Contact = forwardRef((props, ref) => {
    const { isMobile } = props;

    const viewPortRef = useRef();
    const formRef = useRef();

    const { inViewport, enterCount } = useInViewport(
        viewPortRef,
        {},
        { disconnectOnLeave: false },
        props
    );

    const [sent, setSent] = useState(false);
    const [sentError, setSentError] = useState(false);

    return (
        <section id="contact" ref={ref}>
            <div className="section-container" ref={viewPortRef}>
                <h2
                    className={`contact-title title ${animationInView(
                        inViewport,
                        'animate__fadeInLeft',
                        enterCount,
                        isMobile
                    )} animate__delay-1s`}
                >
                    CONTACT
                </h2>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={(_values) => {
                        setSent(true);
                        formRef.current.submit();
                    }}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form
                            className={`contact-form ${animationInView(
                                inViewport,
                                'animate__fadeInLeft',
                                enterCount,
                                isMobile
                            )} animate__delay-2s`}
                            autoComplete="off"
                            autoCorrect="off"
                            target="_blank"
                            action="https://formsubmit.co/5c8387a86984fb2a85bad5475adbbeb5"
                            method="POST"
                            ref={formRef}
                        >
                            <p className="title-caption">
                                Have a question or want to work together?
                            </p>
                            <Field
                                name="name"
                                placeholder="Name..."
                                spellCheck="false"
                            />
                            {errors.name && touched.name ? (
                                <div className="field-error">{errors.name}</div>
                            ) : null}
                            <Field
                                name="email"
                                placeholder="Email..."
                                spellCheck="false"
                            />
                            {errors.email && touched.email ? (
                                <div className="field-error">
                                    {errors.email}
                                </div>
                            ) : null}
                            <Field
                                name="message"
                                type="message"
                                placeholder="You message..."
                                as="textarea"
                                rows="10"
                                maxLength={255}
                                spellCheck={false}
                            />
                            {errors.message && touched.message ? (
                                <div className="field-error">
                                    {errors.message}
                                </div>
                            ) : null}

                            <input
                                type="hidden"
                                name="_subject"
                                value="New submission!"
                            />
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />
                            <input
                                type="hidden"
                                name="_template"
                                value="table"
                            />
                            <button
                                className="submit-button"
                                type="submit"
                                disabled={isSubmitting || sentError}
                                style={
                                    isSubmitting
                                        ? {
                                              backgroundColor: 'gray',
                                              pointerEvents: 'none'
                                          }
                                        : undefined
                                }
                            >
                                Submit
                            </button>
                            <p
                                className="thank-you-message"
                                style={
                                    sent
                                        ? { display: 'inline', opacity: 1 }
                                        : undefined
                                }
                            >
                                Thank you for contacting me!
                                <br />I will follow up with you shortly!
                            </p>
                            <p
                                className="thank-you-message"
                                style={
                                    sentError
                                        ? { display: 'inline', opacity: 1 }
                                        : undefined
                                }
                            >
                                Something happened, please try again!
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
});

export default Contact;
