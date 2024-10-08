import React, { useCallback } from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './Buttons';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Project, Referrer } from '@/types';

type ViewerProps = {
  items: Referrer[] | Project[];
  options?: EmblaOptionsType;
  renderItem: (item: Referrer | Project) => React.ReactNode;
  slidesOnScreen?: number;
};

export default function Viewer({ items, options, renderItem, slidesOnScreen = 1 }: ViewerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      align: 'start',
      slidesToScroll: slidesOnScreen,
      containScroll: 'trimSnaps',
    },
    [Autoplay()],
  );

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 overflow-hidden">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex min-h-fit w-full">
          {items.map((item) => (
            <div
              className={`flex w-full min-w-0 flex-none items-center justify-center ${slidesOnScreen > 1 ? 'mr-4 md:w-[calc(50%-8px)]' : 'mr-1'}`}
              key={item.key}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-x-12">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}
