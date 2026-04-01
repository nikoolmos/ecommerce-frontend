'use client';
import CreateProductForm from "./components/createProductForm";
import { ListingTable } from "./components/listingTable";
import { useListingController } from "./useListingController";

export default function ListingPage() {

    const { products, submitNewProduct } = useListingController();

    return (<div className="p-20">
        <h1 className="text-center text-6xl pb-10">Lista de productos</h1>
        <div className="flex justify-center  border border-dashed border-7 p-7 rounded-lg">
            <ListingTable items={products} />
        </div>

        <CreateProductForm onSubmit={(data => submitNewProduct(data))} />
    </div>);

}
