import React from 'react';

const About = () => {
  return (
    <section
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
          similique veritatis assumenda aliquam debitis voluptatum cumque neque
          inventore fugiat aliquid modi corrupti eum ea. Aut nesciunt corrupti
          nihil! Illum doloremque, ipsa ad laboriosam dolor repellat veritatis
          quod quibusdam obcaecati, magnam expedita explicabo quam porro, nam
          deleniti incidunt. Id, laboriosam rerum.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          sapiente similique obcaecati, quod tempora doloribus adipisci sit
          soluta ab fugit a. Saepe ipsum vitae quos aliquam consectetur qui
          reiciendis officia nisi dolores porro, quod rerum placeat doloribus
          distinctio atque repellat id ut iste ipsa sequi repellendus aspernatur
          quidem temporibus. Neque.
        </p>
      </div>
    </section>
  );
};

export default About;
