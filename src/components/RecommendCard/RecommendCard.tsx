import { Referrer } from '@/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { Center, Divider } from '@chakra-ui/react';

export default function RecommendCard({ refferer }: { refferer: Referrer }) {
  const t = useTranslations('Recommendations');

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-lg bg-white/10 px-4 py-4">
      <p className="text-md whitespace-pre-line">{t(`received.${refferer.key}.text`)}</p>

      <Center className="flex w-full items-center justify-start">
        <div className="flex w-6/12 items-center justify-end gap-x-1 py-2 pr-2">
          <Image
            src={refferer.img}
            width={50}
            height={50}
            alt={refferer.name}
            className="size-6 rounded-full"
          />
          <span className="text-sm">{refferer.name}</span>
        </div>
        <div className="h-6">
          <Divider orientation="vertical" />
        </div>

        <span className="w-6/12 truncate whitespace-nowrap pl-2 text-xs">
          {t(`received.${refferer.key}.headline`)}
        </span>
      </Center>
    </div>
  );
}
