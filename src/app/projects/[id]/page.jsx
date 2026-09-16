import React from 'react';

const page = async ({params}) => {
  const {id} = await params;
  return (
    <div>
      <h2>Projects Details</h2>
      <h3>Projects ID: {id}</h3>
    </div>
  );
};

export default page;