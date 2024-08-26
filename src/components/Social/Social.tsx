import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';

export default function Social({ containerClass }: Readonly<{ containerClass: string }>) {
  const iconClass: string =
    'text-[1.75rem] text-white hover:text-primary cursor-pointer transition duration-300 ease-in-out lg:text-3xl';
  return (
    <div className={containerClass}>
      <a href="https://github.com/NicoConstantin" target={'_blank'}>
        <FaGithubSquare className={iconClass} />
      </a>
      <a href="https://www.linkedin.com/in/nico-constantin/" target={'_blank'}>
        <FaLinkedin className={iconClass} />
      </a>
      <a
        href="https://www.dropbox.com/scl/fi/tlgstirgtyc0pagwqe3rh/CV-Nicolas-Constantin-Full-Stack-Developer.pdf?rlkey=1i6lrwg67sf8yu5g0yqwmf3ht&st=os14jrpe&dl=0"
        target={'_blank'}
      >
        <TbFileCv className={iconClass} />
      </a>
    </div>
  );
}
