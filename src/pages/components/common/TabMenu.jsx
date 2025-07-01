import {NavLink} from "react-router-dom";


const tabs = [
    {label: "추천구독", to:"/"},
    {label: "자동차", to:"/car"},
    {label: "웹툰", to:"/webtoon"},
    {label: "패션뷰티", to:"/beauty"},
    {label: "푸드", to:"/food"},
    {label: "리빙", to:"/living"},
    {label: "책방", to:"/book"},
    {label: "지식+", to:"/knowledge"},
    {label: "건강", to:"/health"},
    {label: "게임", to:"/game"},
]
export default function TabMenu(){

    return(
        <div className="d-flex mb-3">
            {tabs.map((tab, idx)=>(
                <span key={tab.to} className="menu d-flex align-items-center">
                {idx !== 0 && <span className="mx-2 text-muted">/</span>}
            <NavLink
                to={tab.to}
                className={({isActive}) => `nav-link px-2 ${isActive ? 'fw-bold text-dark' : 'text-muted' }`}
            >
                {tab.label}
            </NavLink>
                </span>
            ))}
        </div>
    )
}