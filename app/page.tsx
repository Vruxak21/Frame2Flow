"use client";
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import { Button } from "@/components/ui/button";
import { auth } from "@/configs/firebaseConfig";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";

export default function Home() {
  // const user = auth?.currentUser;
  // console.log(user)
  const user = useAuthContext();
  console.log(user?.user);
  return (
    <div>
      <header className="flex  flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav
          className="relative  p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
            <div>
              {/* <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> */}
              <Image src={"/logo.png"} alt="logo" width={200} height={200} />
              {/* </button> */}
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              {!user?.user?.email ? (
                <Authentication>
                  <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 cursor-pointer">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    SignIn
                  </div>
                </Authentication>
              ) : (
                <ProfileAvatar />
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            {/* <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Turn 
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                Designs
              </span>{" "} into
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                Code
              </span>{" "}
              Instantly – From
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                Wireframe
              </span>{" "}
              to
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                Code
              </span>{" "}
              with
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                AI
              </span>
            </h1> */}
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Turn Designs into Code Instantly –
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                From Wireframe to Flow with AI
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Supercharge your frontend workflow with AI that transforms
              wireframes and images into production-ready code instantly.
            </p>
          </div>

          {!user?.user?.email ? (
            <Authentication>
              <div className="mt-8 gap-3 flex justify-center cursor-pointer">
                <a
                  className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-tl from-blue-600
       to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </Authentication>
          ) : (
            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-tl from-blue-600
       to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
                href="/dashboard"
              >
                Get started
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Transform your designs into code in just 3 simple steps
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 items-stretch gap-6">
          {/* Step 1 */}
          <div className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-6 md:p-8 dark:hover:bg-neutral-800 border border-gray-200 dark:border-neutral-700 transition-all duration-300">
            <div className="flex justify-center items-center size-16 bg-gradient-to-tl from-blue-600 to-violet-600 rounded-xl mx-auto">
              <svg
                className="flex-shrink-0 size-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <div className="mb-2">
                <span className="inline-flex items-center justify-center size-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm dark:bg-blue-900 dark:text-blue-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Upload Your Wireframe
              </h3>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                Simply select your wireframe or design image. We support various
                formats including PNG, JPG, and PDF files.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-6 md:p-8 dark:hover:bg-neutral-800 border border-gray-200 dark:border-neutral-700 transition-all duration-300">
            <div className="flex justify-center items-center size-16 bg-gradient-to-tl from-blue-600 to-violet-600 rounded-xl mx-auto">
              <svg
                className="flex-shrink-0 size-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="m9 1 3 3 3-3" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <div className="mb-2">
                <span className="inline-flex items-center justify-center size-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm dark:bg-blue-900 dark:text-blue-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Select AI Model
              </h3>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                Choose from powerful AI models optimized for different
                frameworks and styling preferences to get the best results.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-6 md:p-8 dark:hover:bg-neutral-800 border border-gray-200 dark:border-neutral-700 transition-all duration-300">
            <div className="flex justify-center items-center size-16 bg-gradient-to-tl from-blue-600 to-violet-600 rounded-xl mx-auto">
              <svg
                className="flex-shrink-0 size-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            </div>
            <div className="mt-6 text-center">
              <div className="mb-2">
                <span className="inline-flex items-center justify-center size-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm dark:bg-blue-900 dark:text-blue-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Describe & Convert
              </h3>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                Add a brief description of your wireframe's purpose and
                functionality, then hit convert to get production-ready code
                instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
