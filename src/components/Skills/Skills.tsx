import { personalSkills } from '@/data/skills';
import React from 'react';
import TechCombo from '../TechCombo/TechCombo';

export default function Skills() {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <h1 className="text-2xl">Skills</h1>
      <div className="grid w-full grid-cols-3">
        {personalSkills.map((skill) => (
          <TechCombo tech={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
