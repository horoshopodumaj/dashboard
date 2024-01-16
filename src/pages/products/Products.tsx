import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import { ProductsRow } from "../../types/types";
import "./products.scss";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 200,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 150,
        type: "boolean",
    },
];

const Products = () => {
    const [open, setOpen] = useState(false);

    const [rows, setRows] = useState(products);

    const createProduct = (newProduct: ProductsRow) => {
        setRows([...rows, newProduct]);
    };
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add new products</button>
            </div>
            <DataTable columns={columns} rows={rows} slug="products" setRows={setRows} />
            {open && <Add slug={"product"} columns={columns} setOpen={setOpen} create={createProduct} />}
        </div>
    );
};

export default Products;
