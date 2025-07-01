
export default function FoodSlidItem({tag, profile, name, title, img}){

    return(
        <div>
            <div className="w-100 overflow-hidden" style={{height:'120px'}}>
                <img className="w-100" src={img} alt=""/>
            </div>
            <span style={{color:'#ebaa00', fontSize:'1.3rem', fontWeight:'700', marginBottom:'4px'}}>{tag}</span>
            <p><a className="text-decoration-none text-dark" href="">{title}</a></p>
            <div className="d-flex">
                <div style={{marginRight:'8px'}}><img className="rounded-circle object-fit-cover" style={{width:'20px', height:'20px'}} src={profile} alt=""/></div>
                <p>{name}</p>
            </div>
        </div>
    )
}