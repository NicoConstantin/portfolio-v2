import { Referrer } from '@/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { Card } from '@chakra-ui/react';

export default function RecommendCard({ refferer }: { refferer: Referrer }) {
  const t = useTranslations('Recommendations');

  return (
    <Card
      key={refferer.name}
      className="h-full border-gray-800 bg-gray-900 transition-colors hover:border-indigo-500"
    >
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <Image
            alt={`Recommender ${refferer.name}`}
            className="rounded-full"
            height="48"
            src={refferer.img}
            style={{
              aspectRatio: '48/48',
              objectFit: 'cover',
            }}
            width="48"
          />
          <div>
            <h3 className="font-semibold text-gray-100">{refferer.name}</h3>
            <p className="text-sm text-gray-400">{t(`received.${refferer.key}.headline`)}</p>
          </div>
        </div>
        <p className="text-sm text-gray-300">{t(`received.${refferer.key}.text`)}</p>
      </div>
    </Card>
  );
}
