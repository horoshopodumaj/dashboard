import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import "./add.scss";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    create: Function;
};
const Add = ({ slug, setOpen, columns, create }: Props) => {
    const values = columns
        .filter((item) => item.field !== "id" && item.field !== "img")
        .map((column) => ({ [`${column.field}`]: "" }))
        .reduce((result, currentObject) => {
            for (const key in currentObject) {
                result[key] = currentObject[key];
            }
            return result;
        }, {});

    const [newItem, setNewItem] = useState(values);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpen(false);
        const newItemtoCreate = { ...newItem, id: Date.now() };
        create(newItemtoCreate);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, column: string) => {
        setNewItem({ ...newItem, [column]: e.target.value });
    };

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => setOpen(false)}>
                    X
                </span>
                <h1>Add new {slug}</h1>
                <form onSubmit={handleSubmit}>
                    {columns
                        .filter((item) => item.field !== "id" && item.field !== "img")
                        .map((column) => (
                            <div className="item" key={column.field}>
                                <label>{column.headerName}</label>
                                <input type={column.type} placeholder={column.field} value={newItem[column.field]} onChange={(e) => onChange(e, column.field)} />
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
