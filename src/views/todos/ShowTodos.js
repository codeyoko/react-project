import React from "react";
import { toast } from 'react-toastify';
export default class ShowTodos extends React.Component {

    // handle delete todo
    handleDeleteTodo = (todo) => {
        console.log("delele todo: ", todo);
        this.props.deleteTodo(todo);

        toast.success("Delete Succeed",{
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
        });
    }

    
}