import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNavigator from '../Shared/PageNavigator/PageNavigator';

const BookingService = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();

    const { _id, title, price, img } = service;

    const handleBookingService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const message = form.message.value;

        const newBooking = {
            customerName: name,
            email,
            date,
            img,
            price,
            service: title,
            service_id: _id,
            message
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Successfully Order Placed!")
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
            

    }
    return (
        <>
            <div className='mb-20'>
                <PageNavigator service={service} page='Booking'></PageNavigator>
                <div className='bg-zinc-100 rounded-[10px] mt-16 p-10 lg:p-20'>
                    <form onSubmit={handleBookingService} className='grid gap-6'>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <input type='text' required placeholder='Your Name' name='name' defaultValue={user?.displayName} className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='date' name='date' required className="w-full px-5 h-[60px] text-neutral-400 focus:text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='email' required placeholder='Your Email' name='email' defaultValue={user?.email} className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='text' required placeholder='Service Price' defaultValue={`$${price}`} name='price' readOnly className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />
                        </div>

                        <textarea name="message" id="" rows="7" required placeholder='Your Message' className="w-full p-5 placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]"></textarea>

                        <input type="submit" value="Order Confirm" className="bg-primary py-3 rounded-[10px] w-full text-white text-xl font-semibold font-['Inter'] leading-[30px] cursor-pointer hover:bg-opacity-80" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingService;