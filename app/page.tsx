import { FaLinkedin } from "react-icons/fa";

import Links from "@/components/links";

const socialLinks = {
  heading: "Social",
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ali-abufutaim-b9aa6717a/",
      icon: <FaLinkedin size={20} />,
    }
  ],
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl font-bold">Hello!</h1>
        <p className="text-lg">
          I&apos;m Ali Abufutaim! a mechanical engineering student with a passion for rocketry and hands-on problem-solving.
        </p>
        <p className="text-lg">
          Through exciting extracurricular projects, I’ve honed my skills in design, testing, and teamwork. I thrive on managing projects, collaborating with others, and bringing ideas to life, all while keeping an eye on the big picture and the details. Feel free to check out my project portfolio to see the results of my work in action!
        </p>
      </div>

      <Links {...socialLinks} />

    </section>
  );
}
