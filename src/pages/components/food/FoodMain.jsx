import FoodItem from './FoodItem';
import main_1 from '../../../assets/images/img_food_001.jpg';
import main_2 from '../../../assets/images/img_food_002.jpg';
import main_3 from '../../../assets/images/img_food_003.jpg';


const items = [
    {
        title: '오이 참치김밥',
        subtitle: '레시피 집중탐구',
        text: '차게 먹어야 더 맛있다!<br/>여름이 되면 꼭 생각나는 메뉴',
        img: main_1
    },
    {
        title: '가성비 좋아 아아만큼 불티나게 팔린 신상 빙수',
        subtitle: '푸드스토리',
        text: '혼자서 부담 없이 먹을 수 있어<br/>소비자들의 호응이 높은 가성비 제품',
        img: main_2
    },
    {
        title: '신선하게 오래 먹는 다이어트 쉬라즈 샐러드',
        subtitle: '오늘의 푸드 TV',
        text: '건강하게 먹는 활용팁까지<br/>식전이나 간단한 아침으로 추천',
        img: main_3
    }
]



export default function FoodMain(){

    return(
        <div className="d-flex justify-content-center gap-3">
            {items.map((item, idx)=>(
                <FoodItem key={idx} {...item} />
            ))}
        </div>
    )
}