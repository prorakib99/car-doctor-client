import victor from "../../../assets/images/others/Vector.png";

const PageNavigator = ({ service, page }) => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url('${
            service?.img || "https://i.ibb.co/5MvmD2g/88.jpg"
          }')`,
        }}
        className="bg-no-repeat py-16 md:py-32 bg-bottom bg-cover my-10 before:w-full before:h-full before:bg-opacity-55 before:top-0 before:z-10 before:left-0 before:absolute before:bg-neutral-900 before:rounded-lg rounded-lg"
      >
        <div className="text-white text-center px-6 text-3xl lg:text-[45px] font-bold relative z-30 font-['Inter']">
          Booking: {service?.title || "Order Details"}
        </div>
        <div
          style={{ backgroundImage: `url('${victor}')` }}
          className="bg-no-repeat absolute bottom-0 w-full px-5 right-1/2 left-1/2 -translate-x-1/2 z-30 bg-center"
        >
          <p className="text-white text-xl text-center font-medium font-['Inter']">
            Home / {page}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNavigator;
