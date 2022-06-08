import React,{useState} from 'react';
import {useMutation,gql} from "@apollo/client";
import Link from "next/link";

export default function AddCard() {

    const [category,setCategory] = useState('');
    const [task,setTask] = useState('');
    const [plan,setPlan] = useState('');
    const [form_error,setFormError] = useState("");
    const [success_message,setSuccessMessage] = useState("");

    // create a graphql mutation query
    const ADD_CARD = gql`
    mutation post($category: String!, $task: String!, $plan: String!) {
    post(category: $category, task: $task, plan: $plan) {
        category
        task
        plan
        done
    }
    }`; 

    // instanciate useMutation
    const [addCard,{loading,data,error}] = useMutation(ADD_CARD);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // reset error and success message fields.
        setSuccessMessage("");
        setFormError("");
        console.log(category, task, plan)
        // check the fields.
        if(category && task && plan){

            addCard({variables:{
                category,
                task,
                plan
            }}).then( () => {
                //release state
                setCategory("");
                setTask("");
                setPlan("");
                setFormError("");
                // set success message
                setSuccessMessage("Card successfully added");
                return;
            })
            .catch( () => {
                setFormError("An error occurred");
            });

        }else{
            setFormError("All fields are required");
        }
    }

    return (
        <div className="container">

            <div className="add-todo-form">

                <form onSubmit={handleSubmit}>
                {
                    form_error ? (
                        <p className="form-error">{form_error}</p>
                    ) : null
                }
                {
                    error ? (
                        <p className="form-error">{error.message}</p>
                    ) : null
                }
                {
                    success_message ? (
                        <p className="form-success">{success_message}. Go to <Link href="/"> <a>home</a>
                        </Link>
                        </p>
                    ) : null
                }
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" value={category} placeholder="Card title" onChange={ (e) => setCategory(e.target.value)}  />
                </div>

                <div className="form-group">
                    <label>Task</label>
                    <input type="text" value={task} placeholder="Description" onChange={ (e) => setTask(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Plan</label>
                    <textarea value={plan} placeholder="Scheduler when do to the task" onChange={ e => setPlan(e.target.value)} rows={10}/>
                </div>
                
                <div className="form-group">
                    <button type="submit">
                        {
                            loading ? 'Loading' : "Add Card"
                        }
                    </button>
                </div>
                </form>

            </div>

            <style jsx>{`
                .container {
                margin-top: 2rem;
                width:60%;
                margin: 0px auto;
                padding:2rem 0px;
                }
                .add-todo-form{
                    width:100%;
                }
                .form-group label{
                    width:100%;
                    display:block;
                    margin-bottom:10px;
                }
                .form-group input[type='text']{
                    width:100%;
                    padding:10px;
                    margin-bottom:10px;
                }
                .form-group textarea{
                    width:100%;
                    padding:10px;
                    margin-bottom:10px;
                }
                .form-error{
                    color:red;
                }
                .form-success{
                    color:green;
                }
            `}
            </style>
        </div>
    )
}
