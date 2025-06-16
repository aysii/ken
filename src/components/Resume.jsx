import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans text-gray-800">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Ken Alcala</h1>
        <p className="text-lg text-gray-600">Frontend Developer</p>
        <p className="text-sm text-gray-500">📧 Ken@email.com | 📞 (123) 456-7890 | 🌐 ken.dev</p>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Summary</h2>
        <p>
          Passionate front-end developer with 2+ years of experience building responsive websites and web apps using React, Tailwind CSS, and JavaScript. Focused on creating clean UI and excellent user experiences.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Frontend Developer – ABC Company</h3>
          <p className="text-sm text-gray-600">Jan 2023 – Present</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Built and maintained modern UI components using React and Tailwind CSS</li>
            <li>Worked with REST APIs and improved performance by 30%</li>
            <li>Collaborated with UX team to implement designs faithfully</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        <div>
          <h3 className="font-semibold text-lg">BS in Computer Science</h3>
          <p className="text-sm text-gray-600">University of Technology, 2019 – 2023</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
