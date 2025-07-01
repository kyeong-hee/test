import {useState} from 'react';


export default function Main() {
    const [popular, setPopular] = useState(true);
    const [travel, setTravel] = useState(false);
    const [movie, setMovie] = useState(false);

    const handleBtn = () =>{
        if(popular){
            setPopular(true);
        }else if(!travel){
            setTravel(true);
        }else if(!movie){
            setMovie(true);
        }
    }

    return(
        <div>
            <div className="d-flex justify-content-between p-2 align-items-center" style={{backgroundColor:'#f5f7f8'}}>
                <ul className="list-unstyled d-flex gap-2">
                    <li className="cursor-pointer user-select-none" onClick={handleBtn} >인기</li>
                    <li className="cursor-pointer user-select-none" onClick={handleBtn}>여행</li>
                    <li className="cursor-pointer user-select-none" onClick={handleBtn}>영화</li>
                </ul>
                <p>구독홈</p>
            </div>
        </div>
    )
}