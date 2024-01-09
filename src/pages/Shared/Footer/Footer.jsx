import logo from '../../../assets/footer-logo.png';
const Footer = () => {
    return (
        <footer className="bg-neutral-900 ">
            <div className='container mx-auto px-8'>
                <div className='footer lg:grid-cols-[4fr_8fr] py-12 lg:py-32 gap-10 lg:gap-40 justify-between text-base-content'>
                    <div>
                        <img src={logo} alt="" className='mb-2' />
                        <p className="text-gray-200 text-base font-normal font-['Inter'] leading-relaxed">Edwin Diag is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    </div>
                    <div className='grid md:flex gap-10 w-full lg:justify-between'>
                        <div className='flex flex-col gap-2'>
                            <h4 className="text-white mb-5 text-xl font-semibold font-['Inter']">About</h4>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Home</a>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Service</a>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Contact</a>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className="text-white mb-5 text-xl font-semibold font-['Inter']">Company</h4>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Why Car Doctor</a>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">About</a>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className="text-white mb-5 text-xl font-semibold font-['Inter']">Support</h4>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Support Center</a>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Feedback</a>
                            <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Accessability</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;