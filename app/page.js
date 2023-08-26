"use client";
import React from "react"; // Don't forget to import React
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs"; // Correct the icon import
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillInstagram,
} from "react-icons/ai"; // Correct the icon import
import Head from "next/head";
import kakashi from "../public/kakashi.jpg";

import { useState } from "react";
export default function Home() {
	const [darkmode, setDarkMode] = useState(false);
	return (
		<div className={darkmode ? "dark" : ""}>
			<Head>
				<title>Angel's Portfolio</title>
			</Head>
			<main className='bg-white  px-10 md:px-20 lg:px-40 dark:bg-black'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-sm '>developed by Angel</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkmode)}
									className='cursor-pointer text-2xl'
								/>
							</li>
							<li>
								<a
									className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '
									href='#'>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10 py-10'>
						<h2 className='text-3xl py-2 text-teal-600 font-medium md:text-6xl'>
							Angel Ghimire
						</h2>
						<h3 className='text-2xl py-2 md:text-3xl'>
							Web developer and Data Science
						</h3>
						<p className='text-sm py-5 leading-8 text0=-gray-800 md:text-xl max-w-xl mx-auto'>
							Hello! I'm passionate about crafting captivating digital
							experiences through frontend development. With a strong foundation
							in technologies like React, JavaScript, HTML, and CSS, I'm
							dedicated to turning ideas into interactive and visually appealing
							web applications. I specialize in leveraging the power of modern
							frameworks such as Next.js to create seamless,
							performance-optimized websites. My proficiency extends to crafting
							pixel-perfect UIs using tools like Tailwind CSS, ensuring both
							aesthetic appeal and responsive design. I believe that every line
							of code contributes to the user's journey, and I'm committed to
							delivering intuitive and user-friendly interfaces. My journey in
							frontend development is driven by a curiosity to stay updated with
							the latest trends and techniques, and a dedication to delivering
							high-quality, efficient, and elegant solutions.
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-5 py-3 text-gray-600'>
						<AiFillTwitterCircle />
						<AiFillInstagram />
						<AiFillLinkedin />
					</div>
					<div className='className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
						<Image src={kakashi} layout='fill' />
					</div>
					<div>
						<h3 className='text-3xl py-1 dark:text-white '>Services I offer</h3>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
							Since the beginning of my journey as a freelance designer and
							developer, I've done remote work for
							<span className='text-teal-500'> agencies </span>
							consulted for <span className='text-teal-500'>startups </span>
							and collaborated with talanted people to create digital products
							for both business and consumer use.
						</p>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
							I offer from a wide range of services, including brand design,
							programming and teaching.
						</p>
					</div>
					<div className='lg:flex gap-10'>
						<div className='text-center shadow-lg p-10 rounded-xl my-10'>
							{/* <Image src={design} width={100} height={100} /> */}
							<h3 className='text-lg font-medium pt-8 pb-2'>
								Beautiful design{" "}
							</h3>
							<p className='py-2'>
								<h4 className='py-4 text-teal-600'>Design tools I used</h4>
								<p className='text-gray-800 py-1'>Photoshop</p>
								<p className='text-gray-800 py-1'>Figma</p>
								<p className='text-gray-800 py-1'>Illustrator</p>
							</p>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl my-10'>
							{/* <Image src={design} width={100} height={100} /> */}
							<h3 className='text-lg font-medium pt-8 pb-2'>
								Beautiful design{" "}
							</h3>
							<p className='py-2'>
								<h4 className='py-4 text-teal-600'>Design tools I used</h4>
								<p className='text-gray-800 py-1'>Photoshop</p>
								<p className='text-gray-800 py-1'>Figma</p>
								<p className='text-gray-800 py-1'>Illustrator</p>
							</p>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl my-10'>
							{/* <Image src={design} width={100} height={100} /> */}
							<h3 className='text-lg font-medium pt-8 pb-2'>
								Beautiful design{" "}
							</h3>
							<p className='py-2'>
								<h4 className='py-4 text-teal-600'>Design tools I used</h4>
								<p className='text-gray-800 py-1'>Photoshop</p>
								<p className='text-gray-800 py-1'>Figma</p>
								<p className='text-gray-800 py-1'>Illustrator</p>
							</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3 className='text-3xl py-1'>Porfolio</h3>
						<h3 className='text-3xl py-1 dark:text-white '>Services I offer</h3>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
							Since the beginning of my journey as a freelance designer and
							developer, I've done remote work for
							<span className='text-teal-500'> agencies </span>
							consulted for <span className='text-teal-500'>startups </span>
							and collaborated with talanted people to create digital products
							for both business and consumer use.
						</p>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
							I offer from a wide range of services, including brand design,
							programming and teaching.
						</p>
					</div>
					<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wraps'>
						{/* <div className="basis-1/3 flex-1">
							<Image src={} className="rounded-lg object-cover" width={'100'%} height={'100'%} layout="responsive"/>
						</div> */}
					</div>
				</section>
			</main>
		</div>
	);
}
