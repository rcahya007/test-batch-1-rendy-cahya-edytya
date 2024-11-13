import FeedbackLayout from '@/Layouts/FeedbackLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import CardFeedback from './Components/CardFeedback';

const Feedback = ({ dataFeedback }) => {
  const [showModal, setShowModal] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const [errorsJs, setErrorsJs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      post(route('feedback.store'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          reset();
          setShowModal(true);
        },
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (data.name === '') {
      newErrors.name = 'Nama tidak boleh kosong.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      newErrors.email = 'Email harus dalam format yang valid.';
    }

    if (data.message.length < 10) {
      newErrors.message = 'Pesan harus berisi minimal 10 karakter.';
    }

    setErrorsJs(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="pt-20 ">
      <div
        className={`${
          showModal ? 'visible opacity-100' : 'invisible opacity-0'
        } transition-all fixed inset-0 bg-black bg-opacity-50 flex duration-1000 items-center justify-center z-50 px-10`}
      >
        <div
          className={`${
            showModal
              ? 'visible opacity-100 translate-y-0'
              : 'invisible opacity-0 translate-y-11'
          } bg-white p-8 w-full h-fit rounded-lg shadow-lg text-center transition-all md:w-fit`}
        >
          <h2 className="text-2xl font-semibold mb-4">Feedback Sent!</h2>
          <p className="text-gray-700 mb-6">
            Thank you for your feedback! We appreciate your input.
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="px-6 py-2 bg-orange-75 text-white font-semibold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>

      {/* Form Feedback Section */}
      <div className="flex flex-col pb-44 md:px-20 px-4">
        <div className="flex flex-col justify-center items-center gap-y-[10px] text-center md:gap-y-[14px]">
          <h1 className="font-raleway font-bold text-4xl leading-[130%] text-grey-10 md:text-[48px]">
            Share your feedback
          </h1>
          <div className="flex flex-col gap-y-2">
            <p className="font-outfit font-medium text-base leading-[150%] text-grey-20">
              Thanks for sending us your ideas, issues, or appreciations. We
              can't respond individually, but we'll pass it on to the teams who
              are working to help make we better for everyone.
            </p>
            <p className="font-outfit font-medium text-base leading-[150%] text-grey-20">
              if you do have a speciffic question, or need help resolving a
              problem, you can visit out{' '}
              <span className="font-bold underline">
                <a href="#" target="_blank">
                  Help Center
                </a>
              </span>{' '}
              or{' '}
              <span className="font-bold underline">
                <a href="#" target="_blank">
                  contact us
                </a>
              </span>{' '}
              to connect wih our support team
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-20 px-[30px] pt-[80px] pb-[30px] bg-white rounded-[10px] border-2 border-grey-15 shadow-my-shadow flex flex-col gap-y-[30px]">
            <p className="bg-white absolute -top-6 left-1/2 -translate-x-1/2 text-nowrap w-fit font-outfit font-medium leading-[150%] text-xl text-grey-20 px-4 py-2 border-2 border-black rounded-md xl:text-2xl">
              Feedback Form
            </p>
            <div className=" xl:grid xl:grid-cols-2 gap-x-[30px] flex flex-col gap-y-[30px]">
              <div className="flex flex-col w-full gap-y-[10px]">
                <p className="font-outfit font-semibold text-[20px] leading-[150%] text-[#4C4C4C]">
                  Name
                </p>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="p-[20px] border-2 border-grey-15 rounded-[6px] bg-orange-99 font-outfit font-medium text-[16px] leading-[150%] text-grey-15"
                  placeholder="Enter Name..."
                  required
                />
                {errorsJs.name && (
                  <p className="font-outfit font-medium text-xs leading-[150%] text-orange-65">
                    {errorsJs.name}
                  </p>
                )}
                {errors.name && (
                  <p className="font-outfit font-medium text-xs leading-[150%] text-orange-65">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full gap-y-[10px]">
                <p className="font-outfit font-semibold text-[20px] leading-[150%] text-[#4C4C4C]">
                  Email
                </p>
                <input
                  type="email"
                  required
                  name="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="p-[20px] border-2 border-grey-15 rounded-[6px] bg-orange-99 font-outfit font-medium text-[16px] leading-[150%] text-grey-15"
                  placeholder="Enter Email..."
                />
                {errorsJs.email && (
                  <p className="font-outfit font-medium text-xs leading-[150%] text-orange-65">
                    {errorsJs.email}
                  </p>
                )}
                {errors.email && (
                  <p className="font-outfit font-medium text-xs leading-[150%] text-orange-65">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full gap-y-[10px]">
              <p className="font-outfit font-semibold text-[20px] leading-[150%] text-[#4C4C4C]">
                Message feedback
              </p>
              <textarea
                required
                minLength={10}
                name="message"
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                id="message"
                className="p-[20px] border-2 border-grey-15 rounded-[6px] bg-orange-99 font-outfit font-medium text-[16px] leading-[150%] text-grey-15"
                placeholder="Enter your message..."
                rows="8"
              ></textarea>
              {errorsJs.message && (
                <p className="font-outfit font-medium text-xs leading-[150%] text-orange-65">
                  {errorsJs.message}
                </p>
              )}
              {errors.message && (
                <p className="font-outfit font-medium text-xs leading-[150%] text-orange-65">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              disabled={processing}
              type="submit"
              className={`${
                processing && 'opacity-50 cursor-not-allowed'
              } px-[34px] py-4 w-full bg-orange-75 border-2 border-grey-15 rounded-[8px] font-outfit font-medium text-[18px] leading-[150%] text-grey-15`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* List of feedback */}
      <div className="my-28">
        <div className="flex flex-col gap-y-3 w-full text-center md:px-20 px-4">
          <h1 className="font-raleway font-bold text-[38px] leading-[130%] text-grey-10 md:text-[48px]">
            Your Feedback Summary
          </h1>
          <p className="font-outfit font-medium text-base leading-[150%] text-grey-20">
            Here is a summary of all the feedback you’ve provided. Thank you for
            your contributions, which help us continuously improve. Every
            suggestion, critique, and comment has been noted, and changes and
            enhancements will be implemented gradually based on priority. We are
            committed to delivering a better experience that aligns with your
            expectations.
          </p>
        </div>
        {/* List of feedback */}
        <div className="h-[600px] m-auto relative flex overflow-hidden space-x-16 group px-[15%]">
          <div className="my-16 gap-x-12 flex animate-slider group-hover:pause">
            {dataFeedback.length > 0 ? (
              dataFeedback.map((item) => {
                return <CardFeedback feedback={item} key={item.id} />;
              })
            ) : (
              <p>nodata</p>
            )}
          </div>
          <div className="my-16 gap-x-12 flex animate-slider group-hover:pause">
            {dataFeedback.length > 0 ? (
              dataFeedback.map((item) => {
                return <CardFeedback feedback={item} key={item.id} />;
              })
            ) : (
              <p>nodata</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Feedback.layout = (page) => {
  return (
    <FeedbackLayout head={<Head title="Feedback - Inertia" />}>
      {page}
    </FeedbackLayout>
  );
};

export default Feedback;
