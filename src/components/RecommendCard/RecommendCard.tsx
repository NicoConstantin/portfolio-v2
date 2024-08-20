import { Referrer } from '@/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function RecommendCard({ refferer }: { refferer: Referrer }) {
  const t = useTranslations('Recommendations');

  return (
    <div className="flex flex-col">
      <p>{t(`received.${refferer.key}.text`)}</p>
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2">
          <Image src={refferer.img} width={50} height={50} alt={refferer.name} className="size-4" />
          <span>{refferer.name}</span>
        </div>
      </div>
    </div>
  );
}
