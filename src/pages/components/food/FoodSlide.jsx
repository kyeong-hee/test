import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FoodSlidItem from "./FoodSlideItem";
import profile from '../../../assets/images/img_profile_1.jpg';
import image from '../../../assets/images/img_food_011.jpeg';

const items = [
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    },
    {
        tag:'#간단한국물요리',
        title: '간단한 국물요리 감자계란국 레시피 얼큰한 국물맛 얼큰계란탕',
        img: image,
        profile: profile,
        name: '옥뚜'
    }
]
export default function FoodSlide({toggleSlide1, toggleSlide2, title="테마별 레시피"}){

    return(
        <div className="position-relative pb-4" style={{borderTop:'1px solid #ebebeb'}}>
            <h4 className="pt-4">{title}</h4>
            {/*button custom*/}
            <div className="custom-prev position-absolute z-3 rounded-circle d-flex justify-content-center align-items-center cursor-pointer user-select-none" style={{width:'36px', height:'36px', fontSize:'24px', top:'99px', left:'-12px', backgroundColor:'#fff', border:'1px solid #dadcdf'}}>‹</div>
            <div className="custom-next position-absolute z-3 rounded-circle d-flex justify-content-center align-items-center cursor-pointer user-select-none" style={{width:'36px', height:'36px', fontSize:'24px', top:'99px', right:'-12px', backgroundColor:'#fff', border:'1px solid #dadcdf'}}>›</div>
            {/*button custom*/}

            <Swiper navigation={{prevEl:'.custom-prev', nextEl:'.custom-next'}} modules={[Navigation]}spaceBetween={8} slidesPerView={4} className="list-unstyled pt-2" >
                {items.map((item, idx)=>
                    <SwiperSlide key={idx}>
                        <FoodSlidItem {...item} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>

    )
}