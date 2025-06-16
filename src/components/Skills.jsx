import React from "react";

const ChallengesAndLearnings = () => {
    return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      


      <div className="bg-black/40 max-w-[1300px] mx-auto rounded-xl">
        <div className="px-6 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="block w-full gray-primary-color text-3xl sm:text-4xl">
              ChallengesAndLearnings
            </h2>
            
          </div>
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Challenges</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                One of the biggest challenges I faced was balancing my academic responsibilities with personal struggles, especially during times of uncertainty and self-doubt. It taught me resilience and time management.</p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <h3 className="text-xl italic text-gray-200">Learnings</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                From those challenges, I learned the value of patience, discipline, and self-belief. I realized that setbacks are setups for growth, and every experience teaches something valuable.
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengesAndLearnings;