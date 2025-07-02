import {useState} from 'react';
import MainList from './components/main/MainList';


export default function Main() {
    const [activeTab, setActiveTab] = useState('popular') //초기 활성화 탭은 '인기 탭'

    const handleTab = (tabMenu) =>{
        setActiveTab(tabMenu);
    };

    return(
        <div>
            <div className="d-flex justify-content-between p-2 align-items-center" style={{backgroundColor:'#f5f7f8'}}>
                <ul className="list-unstyled d-flex gap-2">
                    <li className="cursor-pointer user-select-none" onClick={() => setActiveTab('popular')} style={{backgroundColor:'#fff', borderRadius:'18px', border:'1px solid #5290ff', padding:'0 12px'}}>인기</li>
                    <li className="cursor-pointer user-select-none" onClick={()=> setActiveTab('travel')} style={{backgroundColor:'#fff', borderRadius:'18px', border:"1px solid #5290ff", padding:'0 12px'}}>여행</li>
                    <li className="cursor-pointer user-select-none" onClick={() => setActiveTab('movie')} style={{backgroundColor:'#fff', borderRadius:'18px', border:'1px solid #5290ff', padding:'0 12px'}}>영화</li>
                </ul>
                <p>구독홈</p>
            </div>
            <MainList tabType={activeTab} />
        </div>
    )
}