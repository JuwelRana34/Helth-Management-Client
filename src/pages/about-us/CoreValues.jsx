import React, { useContext } from 'react';
import ThemeContext from './../../Providers/ThemeContext';

const CoreValues = () => {
  const {theme} = useContext(ThemeContext)
  const values = [
    {
      title: 'Integrity',
      description:
        'We have integrity in our work and relationships. Our passion for doing the right thing and sharing knowledge and resources makes us trustworthy, credible, and accountable leaders.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1149/1149168.png',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Bold',
      description:
        'We act boldly with intention. We go after big ideas and big challenges with purpose because we recognize the influence and impact of our work on people’s health, safety, and well-being.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040221.png',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Inclusion',
      description:
        'We are inclusive so that humans are at the center of everything we do. We see the whole person and respect the inherent dignity of every human. We make space for different voices and opinions to help us get the best results.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3884/3884139.png',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];
  

  return (
    <div className={`py-16 px-6 md:px-20  bg-gradient-to-r from-white via-blue-50 to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-black"}`}>

      <h2 className="text-4xl font-extrabold text-center mb-14 dark:text-darkText">Our Core Values</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="relative group bg-base-300 dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              <div className={`bg-gradient-to-br ${value.gradient} p-5 rounded-full shadow-lg`}>
                <img src={value.icon} alt={value.title} className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-500 mb-4 text-center">{value.title}</h3>
            <p className="text-gray-600 dark:text-darkText text-sm text-center leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
