import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import PageNavigator from '../Shared/PageNavigator/PageNavigator';
import BookingCard from './BookingCard/BookingCard';

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
                console.log(data);
                if(data.deletedCount === 1){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
        }
    }
    return (
        <div className='mb-10'>
            <PageNavigator page='Bookings'></PageNavigator>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 my-20'>
                {
                    bookings.map(booking => <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Bookings;