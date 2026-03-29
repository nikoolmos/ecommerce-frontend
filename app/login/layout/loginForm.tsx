'use client';

import { Formik, Field, Form, FormikHelpers } from 'formik';

export interface LoginValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
    onSubmit: (registryValues: LoginValues) => void;
}

export default function LoginFrom (props: LoginFormProps) {
  return (
    <div className='p-20 border-5 rounded-md border-white border-dashed max-w-4xl'>
      <h1 className='text-6xl font-semibold mb-10'>Log In</h1>
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        onSubmit={(
          values: LoginValues,
          { setSubmitting }: FormikHelpers<LoginValues>
        ) => {
            props.onSubmit(values);
        }}
      >
        <Form className="flex flex-col justify-between">
          <label htmlFor="email">Email</label>
          <Field  className="mb-10 text-2xl py-3"
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="firstName">Password</label>
          <Field type="password" className="mb-10 text-2xl py-3" id="password" name="password" placeholder="*********" />

          <button className="p-4 rounded-lg border border-white border-5 cursor-pointer font-semibold text-lg  "type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
