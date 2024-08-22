import { personalSkills } from '@/data/skills';
import React from 'react';
import TechCombo from '../TechCombo/TechCombo';

export default function Skills() {
  return (
    <div className="relative flex w-full flex-col gap-y-4">
      <div id="skills" className="absolute -top-[100px]" />
      <h1 className="text-4xl">Skills</h1>
      <div className="grid w-full grid-cols-3">
        {personalSkills.map((skill) => (
          <TechCombo tech={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
