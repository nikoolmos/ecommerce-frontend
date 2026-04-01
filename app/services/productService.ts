'use server';

const baseUrl = process.env.BASE_URL;

export async function getAllProducts() {
    const url = `${baseUrl}/product`;

    const response = await globalThis.fetch(url, {
        method: 'get'
    });


    return response.json();
}

export async function createProduct(data: string, token: string) {
    const url = `${baseUrl}/product/create`;

    console.log('LLAMADA A SERVICIO CON DATA: ', data)

    const response = await globalThis.fetch(url, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'

        },
        body: data
    });


    return response.json();
}

export async function deleteProduct(id: number) {
    const url = `${baseUrl}/product`;

    return await globalThis.fetch(url, {
        method: 'DELETE',
        headers: {
            authorization: globalThis.localStorage.getItem('token')!
        }
    });
}
