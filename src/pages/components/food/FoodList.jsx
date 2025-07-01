import sub_1 from '../../../assets/images/img_food_004.jpeg';
import sub_2 from '../../../assets/images/img_food_005.jpeg';
import sub_3 from '../../../assets/images/img_food_006.jpeg';
import sub_4 from '../../../assets/images/img_food_007.jpg';
import sub_5 from '../../../assets/images/img_food_008.jpeg';
import profile_1 from '../../../assets/images/img_profile_1.jpg';
import profile_2 from '../../../assets/images/img_profile_1.jpg';
import profile_3 from '../../../assets/images/img_profile_1.jpg';
import profile_4 from '../../../assets/images/img_profile_1.jpg';
import profile_5 from '../../../assets/images/img_profile_1.jpg';

import FoodListItem from './FoodListItem';

const lists = [
    {
        text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
        profile:profile_1,
        name: '꼬마츄츄',
        img: sub_1
    },
    {
        text: '콩나물무침 만드는법 부터 삶는 시간까지, 아삭함을 살리는 비결',
        profile:profile_2,
        name: '초록스토리',
        img: sub_2
    },
    {
        text: '노리 후리가케주먹밥 도시락 명란마요 참치마요 주먹밥 만드는 법',
        profile:profile_3,
        name: '뵤뵤',
        img: sub_3
    },
    {
        text: '열무 비빔국수 양념장 만드는법 김치 비빔국수 레시피 비빔칼국수',
        profile:profile_1,
        name: '꼬마츄츄',
        img: sub_1
    },
    {
        text: '참치마요 롤 유부초밥 만들기 참치 유부초밥 레시피',
        profile:profile_4,
        name: '단호박',
        img: sub_4
    },
    {
        text: '순두부요리 순두부계란탕 달걀국 계란국 끓이는법',
        profile:profile_5,
        name: '스라',
        img: sub_5
    },
]



export default function FoodList ({toggleList1, toggleList2}){

    return(
        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 pt-4" style={{borderTop:'1px solid #ebebeb', margin:'24px 0 8px -28px'}}>
            {lists.map((list, idx)=>(
                <FoodListItem key={idx} {...list}/>
            ))}
        </ul>
    )
}