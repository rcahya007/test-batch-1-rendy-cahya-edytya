import React from 'react';
import message from '@/../../public/icons/message.svg';

const CardFeedback = ({ feedback }) => {
  return (
    <div className="p-[30px] w-[358px] max-w-[358px] bg-white rounded-[10px] border-2 border-grey-15 shadow-my-shadow flex flex-col gap-y-[24px] h-fit hover:scale-110 transition-all">
      <div className="flex gap-x-3 justify-between items-center w-full ">
        <div className="flex gap-x-3 w-max">
          <img
            src={feedback.img_url}
            alt="img_profile"
            className="w-[60px] h-[60px] object-cover rounded-[8px] border-2 border-grey-15"
          />
          <p className="font-raleway font-extrabold text-[20px] leading-[150%] text-[#333333] line-clamp-2">
            {feedback.name}
          </p>
        </div>
        <a href={`mailto:${feedback.email}`}>
          <div className="bg-orange-90 border-2 rounded-[6px] border-grey-15 flex items-center justify-center w-[48px] h-[48px] ">
            <img
              src={message}
              alt="messageIcon"
              className="w-[20px] h-[20px] "
            />
          </div>
        </a>
      </div>
      <div className="p-[20px] bg-orange-97 rounded-[10px] border-2 border-grey-15 flex flex-col gap-y-3 max-w-[298px] w-full">
        <h1 className="font-outfit font-semibold text-[20px] leading-[150%] text-grey-20">
          Feedback
        </h1>
        <p className="font-outfit font-medium text-[16px] leading-[150%] text-grey-20 w-fit">
          {feedback.message}
        </p>
      </div>
    </div>
  );
};

export default CardFeedback;
