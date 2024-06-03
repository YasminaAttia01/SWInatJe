import CustomButton from "./CustomButton";

const CustomHeader = ({
  title,
  paragraph = "",
  backgroundImage = "/images/section-header-bg.png",
  prestationHeader = false,
}: {
  title: string;
  paragraph?: string;
  backgroundImage?: string;
  prestationHeader?: boolean;
}) => {
  if (prestationHeader) {
    return (
      <section
        className="h-[50vh] w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full px-4 mx-auto gap-2 sm:gap-4">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white text-center">
            {title}
          </h1>
          <p className="text-gray-200 text-lg mb-4 text-center">{paragraph}</p>
          <CustomButton
            label="Lançons un projet ensemble"
            type="link"
            href="/demander-devis"
          />
        </div>
      </section>
    );
  } else {
    return (
      <section
        className="h-96 w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center h-full w-full px-4 mx-auto">
          <h1 className="text-5xl font-extrabold text-white text-center">
            {title}
          </h1>
        </div>
      </section>
    );
  }
};
export default CustomHeader;
