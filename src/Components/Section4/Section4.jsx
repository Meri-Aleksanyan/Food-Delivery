import React from 'react';
import { useForm } from 'react-hook-form';
import './Section4.css';

const Section4 = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // Perform any action with the form data, like sending it to an API
        reset(); // Reset form after submission
    };

    return (
        <div>
            <section className="Section4">
                <div className="subscribe">
                    <h2>Why Subscribe?</h2>
                    <ul>
                        <li>Early bird discounts on your orders.</li>
                        <li>Updates on new delivery zones and services.</li>
                        <li>Tips on how to make the most of our drone delivery service.</li>
                    </ul>
                </div>
                <form className="formEmail" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email", { 
                            required: "Email is required", 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}

                    <button className='subscribeButton' type='submit'><span>Subscribe</span></button>
                </form>
            </section>
        </div>
    );
}

export default Section4;
