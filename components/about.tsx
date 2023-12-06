'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
      <motion.section 
        ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id='about'
      >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
          After leaving school I became a carpet fitter and successfully ran my own carpet fitting business. After 6 years I decided I didn&apos;t want the knee problems that often come with this type of job later down the line, so I decided to change careers. Having always had an interest in computers I settled on web development.
        </p>
        <p>
          My focus is <span className='font-bold underline'>React(Next.js)</span> and I&apos;m looking for a junior dev position to kick start my career and learn among professionals.
        </p>
      </motion.section>
    )
}
