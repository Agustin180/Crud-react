import React from "react";
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    //console.log(props.currentUser)

    const onSubmit = (data) => {

        props.updateUser(props.currentUser.id, data)
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
                    {errors.name && <div className='general-subtitle'>{errors?.name?.message}</div>}
                    <label className='general-subtitle'>Username</label>
                    <input  className="general-input" name="username" type="text" {...register("username", {
                        required: {
                            value: true,
                            message: "Username Required"
                        }
                    })}
                    />
                    {errors.name && <div className='general-subtitle'>{errors?.username?.message}</div>}
                    <button className='general-button'>Edit user</button>
        </form>
    );
}

export default EditUserForm;