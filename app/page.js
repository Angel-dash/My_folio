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
export default function Home() {
	return (
		<div>
			<Head>
				<title>Angel's Portfolio</title>
			</Head>
			<main className='bg-black px-10'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className='text-sm'>developed by Angel</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill className='cursor-pointer text-2xl' />
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
						<h2 className='text-3xl py-2 text-teal-600 font-medium'>
							Angel Ghimire
						</h2>
						<h3 className='text-2xl py-2'>Web developer and Data Science</h3>
						<p className='text-sm py-5 leading-8 text0=-gray-800'>
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
						<h3 className='text-3xl py-1'>Servives I offer</h3>
						<p className='text-md py-2 leading-8 text-gray-500'>
							I specialize in crafting dynamic and engaging digital experiences
							as a web developer. My services encompass the full spectrum of web
							development, ranging from creating visually captivating and
							responsive websites to building sophisticated web applications
							using cutting-edge technologies such as React, Next.js, HTML, CSS,
							and JavaScript. With a keen eye for design and a commitment to
							seamless functionality, I am dedicated to bringing your ideas to
							life and delivering user-centric solutions that elevate your
							online presence. Whether you require a polished website or a
							robust web application, I am here to transform your vision into a
							compelling reality, ensuring a seamless and captivating user
							experience at every step.
						</p>
					</div>
					<div>
						<div></div>
					</div>
				</section>
			</main>
		</div>
	);
}
