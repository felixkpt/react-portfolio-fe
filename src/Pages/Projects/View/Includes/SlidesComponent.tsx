import React, { useEffect, useRef, useState } from 'react';
import './SlidesComponent.scss';
import { debounce } from 'lodash';
import { ProjectSlideInterface } from '../../../../interfaces/PortfolioInterfaces';
import { baseURL } from '../../../../utils/helpers';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  slides: ProjectSlideInterface[]
  componentId?: string
  delay?: number // in secs
  timeout?: number // in secs
}
const SlidesComponent: React.FC<Props> = ({ slides, componentId, delay, timeout }) => {

  const id = componentId || 'slideCarousel'
  delay = delay || 4 // in secs
  timeout = timeout || Math.round(Math.random() * 10) // in secs

  const carouselRef = useRef<HTMLDivElement>(null);

  const initAutoScroll = true
  const [autoScroll, setAutoScroll] = useState<boolean>(initAutoScroll)

  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [scrollLimit, setScrollLimit] = useState<number>(0)

  const debouncedPrev = debounce(prevHandler, 100)
  const debouncedNext = debounce(nextHandler, 100)

  useEffect(() => {

    const { carouselInner, cardWidth } = getSelectors()

    if (carouselInner && carouselInner && cardWidth) {
      setScrollLimit((carouselInner.scrollWidth - carouselInner.clientWidth) + cardWidth)
    }

  }, [])

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel && scrollLimit) {

      const multipleItemCarousel = carousel;

      if (!window.matchMedia("(min-width:576px)").matches) {
        multipleItemCarousel.classList.add("slide");
      }

    }

  }, [scrollLimit, scrollPosition])

  function prevHandler() {

    if (scrollLimit) {

      const { carouselInner, cardWidth } = getSelectors()

      if (carouselInner && scrollPosition > 0) {
        const affectVal = scrollPosition - cardWidth
        setScrollPosition(affectVal);

        carouselInner.scrollTo({
          left: affectVal,
          behavior: "smooth"
        });
      }
    }

  }

  function nextHandler() {

    const { carouselItems, carouselInner, cardWidth } = getSelectors()

    console.log('N Head:', scrollPosition,)

    if (scrollLimit && carouselInner) {

      if (scrollPosition < carouselInner.scrollWidth - cardWidth * 3) {

        const affectVal = scrollPosition + cardWidth
        setScrollPosition(affectVal);

        carouselInner.scrollTo({
          left: affectVal,
          behavior: "smooth"
        });

      } else {

        if (carouselItems[carouselItems.length - 1].classList.contains('active')) {

          const affectVal = 0
          setScrollPosition(affectVal);

          carouselItems.forEach((itm, i) => {

            if (i === 0) {
              itm.classList.add('active');
              carouselInner.scrollTo({
                left: affectVal,
                behavior: "smooth"
              });
            } else {
              itm.classList.remove('active')
            }
          })
        }
      }

    }
  }

  useEffect(() => {

    if (autoScroll && scrollLimit > 0) {

      const carousel = carouselRef.current;
      let timeoutId: number | undefined;
      let intervalId: number | undefined;

      const startCarousel = () => {

        timeoutId = setTimeout(() => {

          intervalId = setInterval(() => {
            if (carousel) {
              const nextButton = carousel.querySelector('.carousel-control-next');

              if (nextButton) {
                nextButton.click();
              }
            }
          }, delay * 1000);

        }, timeout * 1000);
      };

      const stopCarousel = () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };

      startCarousel();

      return () => {
        stopCarousel();
      };

    }

  }, [autoScroll, scrollLimit, scrollPosition]);

  function getSelectors() {
    const carousel = carouselRef.current;

    interface Prop {
      carouselItems: NodeList | [],
      cardWidth: number,
      carouselInner: HTMLDivElement | null,

    }

    const obj: Prop = {
      carouselItems: [],
      cardWidth: 0,
      carouselInner: null,
    }
    if (carousel) {
      obj.carouselItems = carousel.querySelectorAll(".carousel-item");
      obj.cardWidth = obj.carouselItems[0].offsetWidth as number;
      obj.carouselInner = carousel.querySelector(".carousel-inner") as HTMLDivElement;
    }

    return obj
  }

  const alterAutoScroll = (state: string) => {
    if (initAutoScroll == true) {
      setAutoScroll(state == 'pause' ? false : true)
    }

  }

  return (
    <div className="shadow p-2 rounded">
      <div id={`${id}`} className="carousel cursor-default no-select" onMouseEnter={() => alterAutoScroll('pause')} onMouseLeave={() => alterAutoScroll('play')} ref={carouselRef}>
        <div className="carousel-inner pf-projects">
          {slides.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="shadow-sm rounded h-100 pf-projects-card row gap-2 gap-md-0 pf-card">
                <div className="pf-card">
                  <div className="card-header">
                    <div className="pf-card-content">
                      <div className="d-flex justify-content-between gap-1 mb-1">
                        {item.caption}
                      </div>
                    </div>
                    <div className="text-center text-md-start">
                      <img className="pf-projects-image thumb" src={baseURL(`assets/${item.image || ''}`)} />
                    </div>
                  </div>
                  <div className="card-body mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev" onClick={() => debouncedPrev()}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next" onClick={() => debouncedNext()}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SlidesComponent;
