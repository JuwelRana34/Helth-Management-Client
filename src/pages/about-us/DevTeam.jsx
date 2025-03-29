import { Github, Linkedin, Unlink } from 'lucide-react';
import React from 'react';

const teamMembers = [
  {
    name: "Ataur Rahman",
    role: "Project Manager & Web Developer",
    description: "As a Project Manager i'm leads the team in delivering high-quality web solutions.",
    avatar: "https://i.ibb.co.com/Fq4g0sNV/484386099-1711132423085603-944092238444069894-n.jpg",
    socialLinks: [
      { href: "https://next-js-portfolio-five-omega.vercel.app/", icon: <Unlink /> },
      { href: "https://www.linkedin.com/in/ataurwd/", icon: <Linkedin /> },
      { href: "https://github.com/ataurwd", icon: <Github />}
    ]
  },
  {
    name: "MD. AL-AMIN ISLAM ",
    role: "Full Stack Developer",
    description: "My responsible for designing  and back-end architecture of web applications.",
    avatar: "https://avatars.githubusercontent.com/u/143124679?v=4",
    socialLinks: [
      { href: " https://rahat-portfolio-websit.vercel.app/", icon: <Unlink /> },
      { href: "https://www.linkedin.com/in/al-amin-islam-rahat", icon: <Linkedin /> },
      { href: "https://github.com/alaminislamrahat", icon: <Github />}
    ]
  },
  {
    name: "MD.Juwel Rana ",
    role: "Full Stack Developer",
    description: "Responsible for managing both client-side and server-side operations,also functionality between the frontend and backend",
    avatar: "https://avatars.githubusercontent.com/u/91797864?v=4",
    socialLinks: [
      { href: " https://developer-juwel.web.app/", icon: <Unlink /> },
      { href: "https://www.linkedin.com/in/md-juwel-rana-14b563204/", icon: <Linkedin /> },
      { href: "https://github.com/JuwelRana34", icon: <Github />}
    ]
  }
];

const DevTeam = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full md:w-[400px] h-auto md:h-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src={member.avatar} alt={member.name} />
              </a>
              <div className="px-5 w-[80%] py-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                <p className="mt-1 mb-2 font-light text-gray-500 dark:text-gray-400">{member.description}</p>
                <ul className="flex space-x-4 sm:mt-0">
                  {member.socialLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {link.icon} {/* React Icons will be displayed here */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevTeam;
