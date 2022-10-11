import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
}

function ToDoList() {
    const { register, watch, handleSubmit, formState: { errors }, setError } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });
    const onValid = (data: IForm) => {
        if (data.password !== data.password1) {
            setError("password1", { message: "비밀번호 맞춰라" }, { shouldFocus: true })
        }
        // setError("extraError", { message: "Server OFFLINE." })
    }
    console.log(errors)
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="Email"
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", { required: "write here", validate: { noNico: (value) => value.includes("nico") ? "nico는 빼" : true, noNick: (value) => value.includes("nick") ? "nick는 빼" : true, } })}
                    placeholder="First Name"
                />
                <span>{errors?.firstName?.message}</span>
                <input
                    {...register("lastName", { required: "write here" })}
                    placeholder="Last Name"
                />
                <span>{errors?.lastName?.message}</span>
                <input
                    {...register("username", { required: "write here", minLength: 10 })}
                    placeholder="Username"
                />
                <span>{errors?.username?.message}</span>
                <input
                    {...register("password", { required: "write here", minLength: 5 })}
                    placeholder="Password"
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password1", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is too short.",
                        },
                    })}
                    placeholder="Password1"
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    )
}



//     return (
//         <div>
//             <form onSubmit={handleSubmit(onValid)}>
//                 <input {...register("toDo", { required: true, minLength: 10 })} placeholder="할일쓰쇼" />
//                 <button>ADD</button>
//             </form>
//         </div>
//     )
// }


// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setToDo(value);
//         setToDoError("")
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("to do 길게써라")
//         }
//         console.log("submit")
//     };
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>ADD</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// }

export default ToDoList;