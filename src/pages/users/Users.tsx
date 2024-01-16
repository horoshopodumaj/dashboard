import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import { Row } from "../../types/types";
import "./users.scss";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
    },
];

const Users = () => {
    const [open, setOpen] = useState(false);

    const [rows, setRows] = useState(userRows);

    const createUser = (newUser: Row) => {
        setRows([...rows, newUser]);
    };

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add new user</button>
            </div>
            <DataTable columns={columns} rows={rows} slug="users" setRows={setRows} />
            {open && <Add slug={"user"} columns={columns} setOpen={setOpen} create={createUser} />}
        </div>
    );
};

export default Users;
