import Navbar from './Navbar'
import { useEffect, useState } from 'react';
import ProductTable from './ProductTable';

const ProductList = () => {

    return (
        <>
            <div className="main-panel mt-3">
                <div className="panel-heading pt-2 mb-0">
                    <b>Product Lists</b>
                </div>
                <hr />
                <ProductTable />
            </div>
        </>
    );
}

export default ProductList;