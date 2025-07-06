import { assets, testimonialsData } from "../assets/assets"

export const Testimonals=()=>{
    return(
        <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="testimonals">
        <h1 className="text-2xl sm:text-4xl text-center font-semibold">Customer <span className="underline underline-offset-4 decoration-2 under font-light">Testimonals</span></h1>
        <p className="text-center text-gray-700 mb-8 max-w-80 mx-auto">Real stories from the dreamers like you</p>
        <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonal,index)=>(
            <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
            <img className="w-20 h-20 rounded-full mx-auto mb-4"src={testimonal.image} alt={testimonal.alt}/>
            <h2 className="text-xl text">{testimonal.name}</h2>
            <p>{testimonal.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({length:testimonal.rating},(item,index)=>(
                    <img key={index} src={assets.star_icon} alt="" />
                ))}
            </div>
            <p className="text-gray-600">
               {testimonal.text}  
            </p>
            </div>
        ))}
        </div>
        </div>
    )
}