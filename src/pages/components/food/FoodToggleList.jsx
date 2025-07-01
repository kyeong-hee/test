import {useState} from 'react';
import FoodList from './FoodList'
import FoodSlide from './FoodSlide';
import profile_1 from "../../../assets/images/img_profile_1.jpg";
import sub_1 from "../../../assets/images/img_food_004.jpeg";
import image from "../../../assets/images/img_food_011.jpeg";
import profile from "../../../assets/images/img_profile_1.jpg";

export default function FoodToggleList (){
    const [expended, setExpended] = useState(false);
    const [secondExpended, setSecondExpended] = useState(false);

    const handleToggle = () => {
        if(!expended){
            setExpended(true);
        }else if(!secondExpended){
            setSecondExpended(true);
        }else{
            setExpended(false);
            setSecondExpended(false);
        }
    };

    const getBtnTxt = () =>{
        if(expended && secondExpended) return '접기'

        return '펼쳐보기'
    };



    const toggleList1 = [
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {

            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        }
    ]

    const toggleSlide1 = [
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

    const toggleList2 = [
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        },
        {
            text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
            profile:profile_1,
            name: '꼬마츄츄',
            img: sub_1
        }
    ]

    const toggleSlide2 = [
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

    return(
        <div>
            {expended && (
                <div>
                <FoodList lists={toggleList1} />
                <FoodSlide items={toggleSlide1} title="오늘의 푸드 토픽" />
                </div>
            )}
            {secondExpended && (
                <div>
                    <FoodList lists={toggleList2} />
                    <FoodSlide items={toggleSlide2} title="푸드스토리" />
                </div>
            )}
            <div className="pt-4 border-top">
                <p className="text-center fw-bold cursor-pointer user-select-none" onClick={handleToggle}>
                    {getBtnTxt()}
                </p>
            </div>
        </div>
    )
}