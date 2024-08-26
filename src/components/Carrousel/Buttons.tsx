import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
  console.log('PROPS', props);
  return (
    <button
      type="button"
      {...props}
      className="transition-all duration-300 ease-in-out disabled:text-gray-500"
    >
      <MdKeyboardArrowLeft className="text-xl" />
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  return (
    <button
      type="button"
      {...props}
      className="transition-all duration-300 ease-in-out disabled:text-gray-500"
    >
      <MdKeyboardArrowRight className="text-xl" />
    </button>
  );
};
