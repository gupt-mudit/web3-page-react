import React from 'react'
import Video1 from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'

export const Hero = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className=" text-8xl lg:text-9xl text-center tracking-wide">Future Is Here</h1>
            <h1 className=" py-2 text-7xl lg:text-8xl text-center tracking-widest bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">Join
                Web3 Community</h1>
            <p className="font-thin text-lg mt-10  text-center items-center text-neutral-500 max-w-5xl">
                Are you ready to be part of the next big thing in technology? Dive into the Web3 community and unlock
                the future of the internet! Connect with innovators, developers, and enthusiasts who are transforming
                digital experiences with blockchain, decentralized applications, and cutting-edge tech. Whether you're a
                seasoned pro or just curious, there's a place for you here. Network, learn, and grow with a vibrant
                community that's shaping the future of the web.
            </p>
            <a href="#"
               className=" mt-10 text-white py-3 px-3 text-5xl rounded-md bg-gradient-to-r from-blue-950 to-red-800 ">
                <h1>Join Now</h1>
            </a>
            <div className="mt-10 flex flex-col md:flex-col lg:flex-row justify-between items-center ">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-blue-800 shadow-sm shadow-red-800 mx-2 my-4"
                >
                    <source src={Video1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-blue-800 shadow-sm shadow-red-800 mx-2 my-4"
                >
                    <source src={Video2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}
