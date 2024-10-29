import React from 'react';
type GarnmentDetailInOutFitProps = {
  imageUrl: string;
  name: string;
};

const GarnmentDetailInOutFit = ({
  name,
  imageUrl,
}: GarnmentDetailInOutFitProps) => {
  return (
    <div>
      <div className="min-w-[150px] min-h-[150px]  bg-gray_30  rounded-md flex justify-center items-center">
        <img
          className="w-[120px] h-[120px] object-cover object-center"
          src={imageUrl}
          alt={name}
        />
      </div>
      <p className="text-center mt-2 font-semibold">{name}</p>
    </div>
  );
};

export default GarnmentDetailInOutFit;
