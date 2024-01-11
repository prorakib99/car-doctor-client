import React, { useContext } from 'react';
import victor from '../../assets/images/others/Vector.png'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

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
            price,
            serviceId: _id,
            message
        }
        console.log(newBooking);
    }
    return (
        <>
            <div className='mb-20'>
                <div className='relative'>
                    <div style={{ backgroundImage: `url('${img}')` }} className="bg-no-repeat py-16 md:py-32 bg-bottom bg-cover my-10 before:w-full before:h-full before:bg-opacity-55 before:top-0 before:z-10 before:left-0 before:absolute before:bg-neutral-900 before:rounded-lg rounded-lg">
                        <div className="text-white text-center px-6 text-3xl lg:text-[45px] font-bold relative z-30 font-['Inter']">Booking: {title}</div>
                        <div style={{ backgroundImage: `url('${victor}')` }} className='bg-no-repeat absolute bottom-0 w-full px-5 right-1/2 left-1/2 -translate-x-1/2 z-30 bg-center'>
                            <p className="text-white text-xl text-center font-medium font-['Inter']">Home / Booking</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-100 rounded-[10px] mt-16 p-10 lg:p-20'>
                    <form onSubmit={handleBookingService} className='grid gap-6'>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            <input type='text' required placeholder='Your Name' name='name' defaultValue={user?.displayName} className="w-full px-5 h-[60px] placeholder:text-neutral-400 text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

                            <input type='date' name='date' className="w-full px-5 h-[60px] text-neutral-400 focus:text-neutral-900 text-lg font-normal font-['Inter'] leading-[30px] bg-white rounded-[10px]" />

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