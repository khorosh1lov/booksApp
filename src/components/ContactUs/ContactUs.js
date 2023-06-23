import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from 'react';

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	message: Yup.string().required('Required'),
});

function ContactUs() {
	return (
		<div className="contact-us">
			<div className="container">
				<h1>Contact page</h1>

				<Formik 
                    initialValues={{ name: '', email: '', message: '' }}
					validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 1000);
                    }}
                >

                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" />

                            <ErrorMessage name="name" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />

                            <ErrorMessage name="email" />
                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <Field name="message" as="textarea" />

                            <ErrorMessage name="message" />
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
				</Formik>
			</div>
		</div>
	);
}

export default ContactUs;
