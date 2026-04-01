'use client';
import { useCallback, useEffect, useState } from "react";
import { getAllProducts } from '../services/productService';
import { createProduct } from "../services/productService";
import { isCustomErrorPage } from "next/dist/build/utils";



export function useListingController() {
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Array<any>>([]);
  const [newProductData, setNewProductData] = useState<any>();
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [createNewProduct, setCreateNewProduct] = useState(false);
  useEffect(() => {
    if (newProductData) {
      const token = globalThis.localStorage.getItem('token')!;
      const data = {
        categoryId: 1,
        title: newProductData.title,
        description: newProductData.description,
      };
      const dataAsString = JSON.stringify(data);
      setIsCreatingProduct(true);
      console.log('llego aca')
      createProduct(dataAsString, token)
        .finally(() => {
          setIsCreatingProduct(false);
        });
    }
  }, [createNewProduct]);



  useEffect(() => {

    getAllProducts()
      .then((result) => {
        setProducts([...result.data]);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })

  }, [isCreatingProduct]);



  const submitNewProduct = useCallback((newProductFormData: any) => {
    console.log('new product', createNewProduct)
    setNewProductData(newProductFormData);
    setCreateNewProduct(!createNewProduct);
  }, [createNewProduct])

  return {
    products,
    submitNewProduct
  };
}
