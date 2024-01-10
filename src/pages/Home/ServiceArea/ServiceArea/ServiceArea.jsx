import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceArea = () => {
    return (
        <div className='py-8 sm:pb-16'>
            <div className="text-center">
                <h2 className="text-orange-600 text-xl font-bold font-['Inter']">Service</h2>
                <h1 className="text-neutral-900 text-[30px] md:text-[45px] font-bold font-['Inter']">Our Service Area</h1>
                <p className="text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize md:leading-[30px]">the majority have suffered alteration in some form, by injected humour, or randomized <br className='hidden md:block' /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 py-10 lg:grid-cols-3 gap-6">
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <div className='flex justify-center'>
                <button className="btn btn-outline text-center text-orange-600 text-lg font-semibold hover:bg-orange-600 duration-500 hover:text-white font-['Inter']">More Services</button>
            </div>
        </div>
    );
};

export default ServiceArea;