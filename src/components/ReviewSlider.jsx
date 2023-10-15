import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ReviewSlider = () => {


    const data=[
        {
            name: `John Morgan` ,
            img: `https://lh3.googleusercontent.com/a-/ALV-UjW-vVQwptlT0204lUavwMkforvu4n_xi4GOc0TL6Mq6z6PI=w180-h180-p-rp-mo-br100`,
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.` 
        },
        {
            name: `John Morgan` ,
            img: `https://lh3.googleusercontent.com/a-/ALV-UjW-vVQwptlT0204lUavwMkforvu4n_xi4GOc0TL6Mq6z6PI=w180-h180-p-rp-mo-br100`,
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.` 
        },
        {
            name: `John Morgan` ,
            img: `https://lh3.googleusercontent.com/a-/ALV-UjW-vVQwptlT0204lUavwMkforvu4n_xi4GOc0TL6Mq6z6PI=w180-h180-p-rp-mo-br100`,
            review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.` 
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className='w-3/4 m-auto'>
            <div className="mt-20">
            <Slider {...settings}>
            {data.map((d) => (
                <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                    <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                         <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                      <p className="text-xl font-semibold">{d.name}</p>
                      <p className="text-center">{d.review}</p>
                      <button className=' MH bg-indigo-500 text-white text-lg px-6 py-1 rounded-x1'>Read More</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    </div>

            
    );
}

export default ReviewSlider;
