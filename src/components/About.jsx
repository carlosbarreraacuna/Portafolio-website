/* eslint-disable react/no-unescaped-entities */

import Headline from '../shared/Headline';
import skills from '../../public/skills.js'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 md:py-8 px-7' id='about'>
            <div>
                <Headline title={"SOBRE MI"} subtitle={"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"} />
            </div>

            {/* About content */}
            <div className='flex flex-col md:flex-row items-start justify-start'>
                {/* left side */}
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>PERFIL PROFESIONAL</h4>
                    <div className='md:w-10/12 text-lg text-[#666] mb-8'>
                        <p className='mb-5'>Soy<strong> Desarrollador FrontEnd</strong> me apasiona crear soluciones innovadoras y funcionales que mejoren la experiencia de los usuarios. Tengo un amplio dominio de HTML, CSS y JavaScript, así como de frameworks como React y tailwind css, Bootstrap.</p>

                        <p className='mb-5'>Me mantengo actualizado con las últimas tecnologías y metodologías del sector. Soy un profesional comprometido, creativo y proactivo, que trabaja en equipo y se adapta a las necesidades del cliente.</p>
                        {/* <p className='mb-5'>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="" className='text-secondary font-bold underline'>Linkedin</a> where I post useful content related to Web Development and Programming</p> */}

                        <p className='mb-5'>Estoy abierto a oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme.</p>
                    </div>

                    {/* <button className='btn py-4 px-14'>Contact</button> */}
                </motion.div>

                {/* right side */}
                <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}

                    className='md:w-1/2 my-8'>
                    <h4 className='text-2xl font-bold mb-8'>HABILIDADES</h4>
                    <div className='flex flex-wrap gap-3 md:w-10/12'>
                        {skills.map(skill => <p key={skill.id} className='bg-white-300 text-light py-2 px-4 rounded'>
                            {skill.image ? (
                                <img src={skill.image} alt={skill.title} />
                            ) : (
                                skill.title
                            )}
                        </p>)}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;