import React from 'react'

function ServerAd() {
    return (
      <section className='w-full md:w-2/3 flex flex-col px-8 md:mx-0 mt-10' id='advert'>
        <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='rounded-3xl'></iframe>
        </div>
      </section>
    )
}

export default ServerAd