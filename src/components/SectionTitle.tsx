"use client";
import { Covered_By_Your_Grace } from "next/font/google";
export const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});
interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: "center" | "start";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  align = "center",
}) => {
  const titleAlignment = align === "center" ? "text-center" : "text-start";

  return (
    <div className={`flex flex-col gap-2 ${titleAlignment}`}>
      <h2
        className={`${covered_By_Your_Grace.className} text-primary text-2xl`}
      >
        {subtitle}
      </h2>
      <h1
        className="text-black font-black sm:font-extrabold text-4xl sm:text-5xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default SectionTitle;
