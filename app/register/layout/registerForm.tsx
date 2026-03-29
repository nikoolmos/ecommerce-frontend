'use client';

import { Formik, Field, Form, FormikHelpers } from 'formik';

export interface RegistryValues {
  firstName: string;
  lastName: string;
  email: string;
}

export interface RegisterFormProps {
    onSubmit: (registryValues: RegistryValues) => void;
}

export default function RegisterForm (props: RegisterFormProps) {
  return (
    <div className='p-20 border-5 rounded-md border-white border-dashed max-w-4xl'>
      <h1 className='text-6xl font-semibold mb-10'>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: RegistryValues,
          { setSubmitting }: FormikHelpers<RegistryValues>
        ) => {
            props.onSubmit(values);
        }}
      >
        <Form className="flex flex-col justify-between">
          <label htmlFor="firstName">First Name</label>
          <Field className="mb-10 text-2xl py-3" id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field  className="mb-10 text-2xl py-3" id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field  className="mb-10 text-2xl py-3"
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button className="p-4 rounded-lg border border-white border-5 cursor-pointer font-semibold text-lg  "type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
