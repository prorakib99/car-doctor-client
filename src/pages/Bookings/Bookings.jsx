import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import PageNavigator from '../Shared/PageNavigator/PageNavigator';
import BookingCard from './BookingCard/BookingCard';
import { toast } from 'react-toastify';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const permission = confirm('Are you sure delete it?');

        if(permission){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){
                    toast.success('Service Delete Successful!')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
            .catch(error => console.log(error))
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount === 1){
                toast.success('Order Approved Successfully!');
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining]
                setBookings(newBookings);
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='mb-10'>
            <PageNavigator page='Bookings'></PageNavigator>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 my-20'>
                {
                    bookings.map(booking => <BookingCard key={booking._id} booking={booking} handleBookingConfirm={handleBookingConfirm} handleDelete={handleDelete}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Bookings;