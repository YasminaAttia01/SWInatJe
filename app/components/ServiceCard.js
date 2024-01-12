const ServiceCard = ({ service }) => {
  return (
    <div className="group relative z-0 bg-primary bg-opacity-80 flex flex-col items-center justify-stretch text-center gap-4 rounded-2xl drop-shadow-[8px_8px_12px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_12px_rgba(42, 68, 102,0.3)] px-6 pt-24 pb-12">
      <div className="absolute z-10  -top-24 w-48 h-48  rounded-full bg-primary opacity-80 flex items-center justify-center">
        <img
          src={service.icon}
          alt={service.title}
          className="w-24 h-24 object-contain object-center"
        />
      </div>
      <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl">
        {service.title}{" "}
      </h3>
      <hr className="w-2/3 border-2 border-white" />
      <p className="text-white text-lg lg:text-2xl">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
