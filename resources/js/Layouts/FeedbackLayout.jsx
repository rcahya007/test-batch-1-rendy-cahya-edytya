import React from 'react';

const FeedbackLayout = ({ children, head }) => {
  return (
    <section className="bg-orange-97 w-full h-full overflow-hidden">
      {head}
      {children}
    </section>
  );
};

export default FeedbackLayout;
