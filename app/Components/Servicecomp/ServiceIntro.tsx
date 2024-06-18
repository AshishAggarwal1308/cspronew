"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

export default function ServiceIntro({ Title, para1, para2 }: { Title: string, para1: string, para2: string }) {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
        );
        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    return (
        <div className="min-h-[80vh] w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-16 gap-8">
            <div ref={imageRef} className="flex justify-center items-center">
                <Image
                    src="/service.webp"
                    priority
                    width={400}
                    height={700}
                    alt="Service image"
                    className="object-cover"
                />
            </div>
            <div ref={textRef} className="flex flex-col justify-center px-4">
                <h1 className="text-brand font-bold text-center text-3xl mb-4">
                    {Title}
                </h1>
                <p className="max-w-[95%]">
                    {para1}
                </p>
                <p className="max-w-[95%] mt-4">
                    {para2}
                </p>
                <Link href={"/Contact"}>
                    <button className="bg-brand p-2 text-white mt-2 hover:bg-[#b46676] active:bg-inherit rounded-lg w-fit">
                        Explore More
                    </button>
                </Link>

            </div>
        </div>
    );
}
