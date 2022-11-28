import React from "react";

const Blog = () => {
  return (
    <div className="py-10">
      <div className="space-y-4 container">
        <div className="group border-l-4 border-primary bg-gray-50 p-6" open>
          <div className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="mt-4 leading-relaxed text-gray-700">
            There are four main types of state you need to properly manage in
            your React apps:
          </p>

          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
          <h3>Let's cover each of these in detail:</h3>
          <p>
            Local (UI) state - Local state is data we manage in one or another
            component.
          </p>
          <p>
            Global (UI) state - Global state is data we manage across multiple
            components.
          </p>
          <p>
            Server state - Data that comes from an external server that must be
            integrated with our UI state.
          </p>
          <p>
            URL state - Data that exists on our URLs, including the pathname and
            query parameters.
          </p>
        </div>
        <div className="group border-l-4 border-primary bg-gray-50 p-6" open>
          <div className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              How does prototypical inheritance work?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="mt-4 leading-relaxed text-gray-700">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.
          </p>
        </div>
        <div className="group border-l-4 border-primary bg-gray-50 p-6" open>
          <div className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              What is a unit test? Why should we write unit tests?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <p className="mt-4 leading-relaxed text-gray-700">
            Unit testing is a type of software testing where individual units or
            software components are tested. Its purpose is to validate that each
            unit of code performs as expected. A unit can be anything you want
            it to be — a line of code, a method, or a class.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Why Do We Need Unit Testing? <br /> To justify any effort in
            business, there must be a positive impact on the bottom line. Here
            are a few benefits to writing unit tests:
          </p>
          <p>
            Unit tests save time and money. Usually, we tend to test the happy
            path more than the unhappy path. If you release such an app without
            thorough testing, you would have to keep fixing issues raised by
            your potential users.
          </p>
          <p>
            Well-written unit tests act as documentation for your code. Any
            developer can quickly look at your tests and know the purpose of
            your functions.
          </p>
          <p>It simplifies the debugging process.</p>
        </div>
        <div className="group border-l-4 border-primary bg-gray-50 p-6" open>
          <div className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              React vs. Angular vs. Vue?
            </h2>
            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <h2 className="font-bold">Angular</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            The AngularJS framework was first released by Google in 2010. In
            2016, Angular 2 appeared, which was a complete rewrite of Angular
            JS. Since then, new versions have appeared frequently.
          </p>
          <p>Advantages of Angular</p>
          <li>MVC framework</li>
          <li>Angular templates</li>
          <li>Simple implementation of two-way data binding</li>
          <li>Simple implementation of two-way data binding</li>
          <h2 className="mt-4 leading-relaxed font-bold text-gray-700">
            React
          </h2>
          <p className="leading-relaxed text-gray-700">
            React is actually a JavaScript library created to build user
            interfaces. It is supported by Facebook and Instagram and has become
            a core technology for the endless feed in these two applications. As
            a JS library, React has a limited sphere of usage, but when bundled
            with other libraries it becomes a powerful solution, making it a
            main competitor of Angular. And this is why:
          </p>
          <p>Advantages of React</p>
          <li>Component model</li>
          <li>Virtual DOM</li>
          <li>One-way data binding</li>
          <li>Usage of pure functions</li>
          <li>Usage of pure functions</li>
          <h2 className="mt-4 leading-relaxed font-bold text-gray-700">
            Vue.js
          </h2>
          <p className="leading-relaxed text-gray-700">
            Vue.js is a popular Angular and React alternative. This progressive
            framework for UI building is gaining popularity. It first became
            extremely popular in China, and is now becoming popular in the West
            as well.
          </p>
          <p>Advantages of Vue</p>
          <li>MVC framework</li>
          <li>Lightweight solution</li>
          <li>Declarative templates</li>
          <li>Virtual DOM</li>
          <li>Two-way data binding</li>
        </div>
      </div>
    </div>
  );
};

export default Blog;
