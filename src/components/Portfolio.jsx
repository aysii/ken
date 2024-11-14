import React from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {
  const { id } = useParams();  
  return (
    <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 md:h-[92vh]">
      <div className="px-7 mx-auto">
        {id === '1' ? (
          <>
            
          </>
        ) : (
          <>
            <h2 className="text-3xl text-gray-200 font-bold mb-4">Project #1 - Sari-Sari Store System</h2>
            
            <p className="text-3xl text-gray-150 mt-4 font-bold mb-4">To assist our client in managing her supplies and inventories, we develop a system.
            </p>
            
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;