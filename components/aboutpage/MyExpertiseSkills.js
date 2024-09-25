'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer, SiRedux } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa6";
import { fadeIn } from '@/variants';


const skillsData = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, proficiency: 90 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, proficiency: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, proficiency: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, proficiency: 75 },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" />, proficiency: 70 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, proficiency: 65 },
    { name: 'React.js', icon: <FaReact className="text-cyan-500" />, proficiency: 85 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, proficiency: 80 },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, proficiency: 75 },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" />, proficiency: 70 }, // Only one Redux Toolkit entry
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, proficiency: 50 }, // Only one Redux Toolkit entry
];


const MyExpertiseSkills = () => {
    return (
        <motion.section className="w-full py-10   " variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.6
            }}>
            <h2 className="text-3xl font-bold  mb-8">My Expertise Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="back1 p-6 rounded-lg shadow-lg flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="text-5xl mb-4">{skill.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                        <CountUp
                            start={0}
                            end={skill.proficiency}
                            duration={8}
                            suffix="%"
                            className="text-3xl font-bold text-red-600"
                        />
                        <p className="text-sm mt-2">Proficiency</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MyExpertiseSkills;
