import EditTodoForm from './editTodoForm' 
const FormDialog = (props) => {
    return (
        <div>
            <dialog open>
                <EditTodoForm {...props} /> 
            </dialog>
        </div> 
    )
}

export default FormDialog