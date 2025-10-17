function Card({name,img}){
   
    return <>
    <div className='flex justify-around'>
        <img src={img} alt="" className="w-[205px] h-[100px] px-1.5 "/>
        {/* <p>{name}</p> */}
    </div>
    </>
}
export default Card