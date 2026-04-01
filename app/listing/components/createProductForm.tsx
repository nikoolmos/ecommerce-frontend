import { Field, Form, Formik } from "formik";

export interface CreateProductFormProps {
    onSubmit: (data: any) => void
}
export default function CreateProductForm(props: CreateProductFormProps) {
    return <Formik onSubmit={props.onSubmit} initialValues={{ title: '', description: '' }}>
        <Form className="p-10 border border-white border-dashed rounded-xl mt-20 flex  flex-col justify-center content-center border-7">
            <h2 className="text-4xl pb-10">Crear Producto</h2>
            <label>Nombre del Producto</label>
            <Field className="pb-5" name="title" placeholder="Nombre del producto" ></Field>

            <label>Descripcion del Producto</label>
            <Field className="pb-10" name="description" placeholder="Descripcion del producto" ></Field>

            <button type="submit" className="cursor-pointer p-7 border border-white border-5 rounded-4xl w-3xs">Crear Producto</button>
        </Form>
    </Formik>
}