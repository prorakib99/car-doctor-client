import logo from '../../../assets/footer-logo.png';
const Footer = () => {
    return (
        <footer className="footer lg:grid-cols-[4fr_8fr] py-12 lg:py-24 gap-10 lg:gap-40 justify-between p-10 bg-neutral-900 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p className="text-gray-200 text-base font-normal font-['Inter'] leading-relaxed">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            </div>
            <div className='grid md:flex gap-10 w-full lg:justify-between'>
                <div className='flex flex-col gap-2'>
                    <h4 className="text-white mb-5 text-xl font-semibold font-['Inter']">Services</h4>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Branding</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Design</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Marketing</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className="text-white mb-5 text-xl font-semibold font-['Inter']">Company</h4>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">About us</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Contact</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Jobs</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Press kit</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className="text-white mb-5 text-xl font-semibold font-['Inter']">Legal</h4>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Terms of use</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Privacy policy</a>
                    <a className="text-zinc-100 text-base font-normal font-['Inter'] link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;