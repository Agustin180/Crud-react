import React from "react";
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
    const { register, formState: { errors } , handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        //console.log(data)
        props.addUser(data)
        // CLEAR FIELDS
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className='general-subtitle'>Name</label>
            <input className="general-input" name="name" type="text" {...register("name", {
                required: {
                    value: true,
                    message: "Name Required"
                }
            })}
            />
            {errors.name && <div>{errors?.name?.message}</div>}
            <label className='general-subtitle'>Username</label>
            <input className="general-input" name="username" type="text" {...register("username", {
                required: {
                    value: true,
                    message: "Username Required"
                }
            })}
            />
            {errors.name && <div>{errors?.username?.message}</div>}
            <button className='general-button'>Add new user</button>
        </form>
    );
}

export default AddUserForm;