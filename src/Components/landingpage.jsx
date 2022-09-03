import React, { Component } from "react";
import ballon from "../images/ballon.png";
import ballon2 from "../images/ballon2.png";

class LandingPage extends Component {
  navi = () => {
    this.props.history.push("/question");
  };
  render() {
    return (
      <>
        <div className="flex flex-row justify-center h-auto grid lg:grid-cols-2 gap-x-2">
          <div className="h-auto md:w-[60%] lg:w-[80%] lg:h-[75%] m-6 flex md:justify-center items-center ">
            <div className="">
              <img src={ballon} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center sm:w-[300px] md:w-[600px] lg:w-[80%] m-6 md:h-[400px] lg:h-[80%]">
            <div className="flex flex-col justify-center h-1/2 m-6 ">
              <div className="min-w-fit text-5xl md:text-5xl lg:text-6xl font-medium font-serif text-white mt-8">
                Let's Play
              </div>
              <div className="text-lg font-normal text-white mt-2">
                Be the first !!
              </div>
              <div className="font-light text-white mt-12 w-80 ">
                Do you feel confident ?Here you will challenge one of our most
                difficult questions!
              </div>
            </div>
            <div className="h-1/2 m-6 flex justify-center items-center">
              <div className="w-1/2 m-8 flex justify-center items-center">
                <button
                  onClick={this.navi}
                  className="rounded-md px-9 py-1 md:w-[150px] lg:w-[130px] sm:px-3 sm:py-2 md:px-5 md:py-2 lg:px-3 lg:py-2  bg-white text-blue-600 transition ease-in-out hover:-translate-y-1 ">
                  START QUIZ
                </button>
              </div>
              <div className="w-1/2 m-8 flex justify-center items-cente lg:w-[80%]">
                <div className="">
                  <img src={ballon2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
