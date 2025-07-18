import { useRef } from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/LanguageContext";
import TestimonialV1Data from "../../jsonData/TestimonialV1Data.json";
import SingleTestimonialV1 from "./SingleTestimonialV1";

const TestimonialV1 = () => {
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const { language } = useLanguage();
  const testimonialText = {
    pt: {
      title: "O que nossos clientes dizem",
    },
    en: {
      title: "What Our Clients Say",
    },
  };
  const t = testimonialText[language] || testimonialText["pt"]; // Fallback to Portuguese if language not found
  const p = TestimonialV1Data[language] || TestimonialV1Data["pt"]; // Fallback to Portuguese if language not found

  return (
    <>
      <div className="testimonial-style-two-area overflow-hidden bg-gradient text-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="testimonial-style-two-box default-padding">
                <div className="star-shape">
                  <img src="/img/shape/21.png" alt="Image Not Found" />
                </div>
                <img src="/img/shape/quote-big.png" alt="Image Not Found" />
                <div className="site-heaidng">
                  <h2 className="title">{t.title}</h2>
                </div>
                <div className="testimonial-style-two-carousel swiper">
                  <div className="testimonial-v1-wrappers ">
                    <Swiper
                      ref={SlideRef}
                      modules={[Keyboard, Autoplay, Pagination]}
                      slidesPerView={1}
                      spaceBetween={25}
                      // autoplay={{
                      //   delay: 3000,
                      //   stopOnLastSlide: false,
                      //   disableOnInteraction: false,
                      // }}
                      loop={true}
                      pagination={{
                        el: ".testimonial-two-pagination",
                        type: "fraction",
                        clickable: true,
                      }}
                      keyboard={{
                        enabled: true,
                      }}
                    >
                      {p.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                          <SingleTestimonialV1 testimonial={testimonial} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="testimonial-two-swiper-nav">
                    <div className="testimonial-two-pagination"></div>
                    <div
                      className="testimonial-two-button-prev custom-nav"
                      onClick={handlePrev}
                    ></div>
                    <div
                      className="testimonial-two-button-next custom-nav"
                      onClick={handleNext}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV1;
