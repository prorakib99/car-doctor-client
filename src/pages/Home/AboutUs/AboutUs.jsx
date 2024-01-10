
import person from "../../../assets/images/about_us/person.jpg";
import parts from '../../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-10 py-20">
            <div className='relative w-full'>
                <div className='w-[90%] h-5/6'>
                    <img className='rounded-lg w-full h-full' src={person} alt="" />
                </div>
                <div className='absolute bottom-0 right-0 w-[50%] lg:w-[75%] xl:w-[50%]'>
                    <img className='rounded-lg border-8 w-full border-white' src={parts} alt="" />
                </div>
            </div>
            <div className='text-center md:text-start'>
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">About Us</h2>
                <h1 className="text-neutral-900 lg:w-2/3 text-[30px] md:text-[45px] font-bold font-['Inter']">We are qualified & of experience in this field</h1>
                <p className="text-neutral-500 lg:w-2/3 text-base font-normal font-['Inter'] capitalize md:leading-[30px] mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                <p className="text-neutral-500 lg:w-2/3 my-4 text-base font-normal font-['Inter'] capitalize leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                <button className="btn btn-error text-center mt-2 text-white text-lg font-semibold font-['Inter']">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;