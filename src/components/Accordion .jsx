import React from "react";

const Accordion = () => {
  return (
    <div className="w-[50vw] space-y-4 ">
      <div className="collapse collapse-arrow border-2 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can education flashcards be used for all age groups?{" "}
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do education flashcards work?{" "}
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can education flashcards be used for test preparation?{" "}
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Accordion;
