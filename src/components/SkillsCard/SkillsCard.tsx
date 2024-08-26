import { Badge, Card, Tag } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { IconType } from 'react-icons';

type SkillCardProps = {
  skills: string[];
  icon: IconType;
  titleKey: string;
};

export default function SkillsCard({ skills, icon: Icon, titleKey }: SkillCardProps) {
  const t = useTranslations('Skills');
  return (
    <Card className="border-gray-800 bg-gray-900 shadow-xl">
      <div className="p-6">
        <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-100">
          <Icon className="text-secondary mr-2 text-2xl" />
          {t(titleKey)}
        </h3>
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          {skills.map((skill, index) => (
            <Tag key={index} className="bg-gray-800 px-2 py-1 text-gray-300">
              {skill}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}
