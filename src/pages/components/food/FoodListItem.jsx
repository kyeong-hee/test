
export default function FoodListItem ({text,name,profile,img}) {

    return(

            <li className="d-flex gap-3 mb-3" style={{width:'381px'}}>
                <div className="d-block overflow-hidden" style={{width:'154px', height:'100px', flexShrink:0}}>
                    <img className="w-100 h-100 object-fit-cover rounded" src={img} alt=""/>
                </div>
                <div className="d-flex flex-column justify-content-between">
                    <p className="fw-semibold mb-2" style={{overflow:'hidden', textOverflow:'ellipsis'}}>
                        <a className="text-dark text-decoration-none" href="">{text}</a>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                        <img className="rounded-circle object-fit-cover" style={{width:'20px', height:'20px'}} src={profile} alt="" />
                        <span>{name}</span>
                    </div>
                </div>
            </li>
    )
}