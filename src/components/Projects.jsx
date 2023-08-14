import React from 'react';
import projectExample from '../assets/projects/projectExample.jpg';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      src: projectExample,
    },
    {
      id: 2,
      src: projectExample,
    },
    {
      id: 3,
      src: projectExample,
    },
    {
      id: 4,
      src: projectExample,
    },
    {
      id: 5,
      src: projectExample,
    },
    {
      id: 6,
      src: projectExample,
    },
  ];
  return (
    <section
      name='projects'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Projects
          </p>
          <p className='py-6'>Check out some of my personal projects here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-12 px-0'>
          {projectsList.map(({ id, src }) => (
            <article key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200'>
                  Demo
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200'>
                  Code
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
