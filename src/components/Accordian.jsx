
// import logo from '../assets/logo.png'
// import bg from '../assets/bg.png'

import { Accordion } from "flowbite-react";

export default function CollapseAll() {
  return (
    <>
      <h1 className="border-t-2 text-center text-white bg-black py-3 text-[3rem] ">About Us</h1>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className="bg-gray-900  text-white hover:bg-gray-800">
            What is Flowbite?
          </Accordion.Title>
          <Accordion.Content className="bg-gray-900 text-white">
            <p>
              <p>
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </p>
            <p>
              <p>Check out this guide to learn how to </p>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/docs/getting-started/introduction/"
              >
                <p>get started</p>
              </a>
              <p>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="bg-gray-900 text-white hover:bg-gray-800" >
            Is there a Figma file available?
          </Accordion.Title>
          <Accordion.Content className="bg-gray-900 text-white">
            <p>
              <p>
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
            </p>
            <p>
              <p>Check out the</p>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/figma/"
              >
                <p>Figma design system</p>
              </a>
              <p>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="bg-gray-900 text-white  hover:bg-gray-800">
            What are the differences between Flowbite and Tailwind UI?
          </Accordion.Title>
          <Accordion.Content className="bg-gray-900 text-white">
            <p>
              <p>
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
            </p>
            <p>
              <p>
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
            </p>
            <p>
              Learn more about these technologies:
            </p>
            <ul>
              <li>
                <a
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="https://flowbite.com/pro/"
                >
                  <p>Flowbite Pro</p>
                </a>
              </li>
              <li>
                <a
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="https://tailwindui.com/"
                  rel="nofollow"
                >
                  <p>Tailwind UI</p>
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}

