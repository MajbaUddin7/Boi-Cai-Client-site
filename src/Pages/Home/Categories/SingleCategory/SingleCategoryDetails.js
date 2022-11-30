import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SingleCategoryDetails = ({ product }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { name, img, price, location } = product;

    const [open, setOpen] = useState(false);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const cancelButtonRef = useRef(null)

    // const { name: treatmentName, slots, price } = treatment;
    // const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleSignUp = (data) => {
        setSignUPError('');

        console.log(data.email, data.name, data.productName);

        // const saveUser = (name, email, role) => {
        //     const user = { name, email, role };
        //     console.log(user);
        //     // fetch('http://localhost:5000/users', {
        //     //     method: 'PUT',
        //     //     headers: {
        //     //         'content-type': 'application/json'
        //     //     },
        //     //     body: JSON.stringify(user)
        //     // })
        //     //     .then(res => res.json())
        //     //     .then(data => {
        //     //         setCreatedUserEmail(email);
        //     //     })
        // }

    }




    return (
        <div className=''>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2">
                <a href='/' className="block relative h-48 rounded overflow-hidden" alt=''>
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img} />
                </a>
                <div className="mt-4 text-center my-3">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <p className="mt-1">Orginal Price: ${price}</p>
                    <p className="mt-1">Location: {location}</p>

                    <button onClick={() => setOpen(true)} type="submit" className='btn bg-neutral-900 text-white p-2'>Book Now</button>
                </div>
            </div>



            {/* Modal Part  */}

            <div className="">
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                </div>
                                                <div className="w-full mt-3 pr-8 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                        {name}
                                                    </Dialog.Title>
                                                    <div className="mt-2">

                                                        <form onSubmit={handleSubmit(handleSignUp)}>

                                                            <div className="form-control w-full max-w-xs">
                                                                <label className="label"> <span className="label-text">Product Name:</span></label>
                                                                <input type="text" {...register("productName")}
                                                                    defaultValue={name}
                                                                    readOnly
                                                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                                                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                                            </div>

                                                            <div className="form-control w-full max-w-xs">
                                                                <label className="label"> <span className="label-text">Customer Name:</span></label>
                                                                <input type="text" {...register("customerName")}
                                                                    defaultValue={user?.displayName}
                                                                    readOnly
                                                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                                                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                                            </div>



                                                            <div className="form-control w-full max-w-xs">
                                                                <label className="label"> <span className="label-text">Email</span></label>
                                                                <input type="email" {...register("email")} defaultValue={user?.email}
                                                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" readOnly />
                                                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                                            </div>

                                                            <input className='btn btn-accent w-full mt-4 group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' value="Submit" type="submit" />
                                                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                                        </form>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-8 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setOpen(false)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="submit"
                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
        </div>
    );
};

export default SingleCategoryDetails;