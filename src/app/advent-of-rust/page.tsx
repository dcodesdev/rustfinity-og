"use client"

import Image from "next/image";
import Form from "next/form";
import { ChangeEvent, FormEvent, useState } from "react";
const siteUrl = process.env.NODE_ENV == "development" ? "http://localhost:3000/" : 'https://rustfinity-og.vercel.app/';

export default function Home() {
  const [formData, setFormData] = useState({
    day: "Advent of Rust: Day 2",
    description: "Memory doesn't grow on Christmas trees 🎄"
    ,
  });

  const [formImage, setFormImage] = useState({
    imageSource: `${siteUrl}og-images/advent-of-rust?day=${encodeURI("Advent of Rust: Day 2")}&description=${encodeURI("Memory doesn't grow on Christmas trees 🎄")}`,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    // We don't want the page to refresh
    e.preventDefault()

    console.log(formData);
    setFormImage({ imageSource: `${siteUrl}og-images/advent-of-rust?day=${encodeURI(formData.day)}&description=${encodeURI(formData.description)}` });
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={formImage.imageSource}
          alt="og image"
          width={1200}
          height={630}
        />

        <Form action="#" className="max-w-sm mx-auto" onSubmit={submitForm}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input className="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" style={{ color: 'black' }} name="day" id="day" value={formData.day} onChange={handleInput} />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="description" style={{ color: 'black' }} value={formData.description} onChange={handleInput} />
          </div>

          <div className="flex items-start mb-5">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create image</button>
          </div>
        </Form>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
