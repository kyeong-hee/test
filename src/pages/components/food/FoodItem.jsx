
export default function FoodItem({title, subtitle, text, img}){


    return(
        <div style={{width:'250px'}}>
            <div className="d-block overflow-hidden w-100" style={{height:'144px', borderRadius:'4px'}}>
                <img src={img} className="w-100" alt=""/>
            </div>
            <span className="fs-6 fw-bold" style={{color:'#ebaa00'}} >{subtitle}</span>
            <h4 className="text-nowrap overflow-hidden text-truncate"><a className="fs-5 fw-medium text-dark text-decoration-none" href="">{title}</a></h4>
            <p><a className="fs-6 text-dark text-decoration-none" href="" dangerouslySetInnerHTML={{__html: text}}></a></p>
        </div>
    )
}