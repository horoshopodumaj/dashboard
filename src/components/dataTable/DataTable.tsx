import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { ProductsRow, Row } from "../../types/types";
import "./dataTable.scss";

type Props = {
    columns: GridColDef[];
    rows: Row[] | ProductsRow[];
    slug: string;
    setRows: Function;
};

const DataTable = ({ columns, rows, slug, setRows }: Props) => {
    const handleDelete = (id: number) => {
        console.log(id);
        setRows(rows.filter((row) => row.id !== id));
    };

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            );
        },
    };
    return (
        <div className="dataTable">
            <DataGrid
                sx={{ display: "grid", gridTemplateRows: " auto" }}
                className="dataGrid"
                rows={rows}
                columns={[...columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;
