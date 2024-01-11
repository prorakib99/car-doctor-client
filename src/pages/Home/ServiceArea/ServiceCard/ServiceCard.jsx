import { FaArrowAltCircleRight } from "react-icons/fa";
import server1 from '../../../../assets/images/services/1.jpg';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, img, price, title } = service;
    return (
        <div className='p-[20px] bg-white rounded-[10px] border border-gray-200'>
            <div>
                <img className='w-full rounded-lg' src={img} alt="" />
            </div>
            <h2 className="text-neutral-700 my-4 text-[24px] font-bold font-['Inter']">{title}</h2>
            <div className='flex justify-between'>
                <h5 className="text-orange-600 text-xl font-semibold font-['Inter']">Price : $<span>{price}</span></h5>
                <Link to={`/book/${_id}`}>
                    <button><FaArrowAltCircleRight className='text-2xl text-[#FF3811]' /></button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;