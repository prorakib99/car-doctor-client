
import calender from '../../../assets/images/contact/calendar.png';
import phone from '../../../assets/images/contact/telephone.png';
import location from '../../../assets/images/contact/location.png';

const ContactInfo = () => {
    return (
        <div className='py-10 sm:py-12'>
            <div className='grid justify-center lg:justify-between lg:grid-cols-3 p-8 sm:p-16 gap-12 bg-neutral-900 rounded-[10px]'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={calender} alt="" />
                    </div>
                    <div>
                        <h6 className="text-white text-base font-medium font-['Inter']">We are open monday-friday</h6>
                        <h4 className="text-white text-[25px] font-bold font-['Inter']">7:00 am - 9:00 pm</h4>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={phone} alt="" />
                    </div>
                    <div>
                        <h6 className="text-white text-base font-medium font-['Inter']">Have a question?</h6>
                        <h4 className="text-white text-[25px] font-bold font-['Inter']">+2546 251 2658</h4>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={location} alt="" />
                    </div>
                    <div>
                        <h6 className="text-white text-base font-medium font-['Inter']">Need a repair? our address</h6>
                        <h4 className="text-white text-[25px] font-bold font-['Inter']">Liza Street, New York</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;