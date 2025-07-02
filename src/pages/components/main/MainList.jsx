import {popularDatas, popularShorts, travelDatas, movie} from './MainData';

const dataMap = {
    popular: popularDatas,
    popularShorts: popularShorts,
    travel: travelDatas,
    movie: movie
};

export default function MainList ({tabType}){
    const items = dataMap[tabType] || [];

    return(
        <div>
            <ul className="list-unstyled d-flex flex-wrap">
                {
                    items.map((item, idx) => (
                        <li key={idx} className="w-25 mb-2" style={{padding:'0 0 20px 20px'}}>
                            <div className="mb-4 overflow-hidden" style={{height:'120px', borderRadius:'4px'}}><img className="w-100" src={item.img} alt="" /></div>
                            <h5>{item.title}</h5>
                            <div className="d-flex">
                                <div className="rounded-circle overflow-hidden" style={{width:'20px', height:'20px'}}><img src={item.profile} alt="" style={{width:'100%', objectFit:'cover', objectPosition:'center'}}/></div>
                                <p>{item.name}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}