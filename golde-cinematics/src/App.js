import './App.css';

function App() {
  return (
    <main className='bg-[#121212] text-white h-full'>
      <header className="w-[72%] p-4 border border-[#CC7F2E] my-0 mx-auto">
            <nav className='flex justify-center items-center w-full'>
              <ul className='flex justify-between w-full max-w-[70%] uppercase items-center'>
                <li>Our Work</li>
                <li>Our Procss</li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="64" viewBox="0 0 77 64" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.7549 1.61489L69.6759 12.0674C69.4056 12.5253 68.9191 12.8059 68.3933 12.8059H31.3838C29.2854 12.8059 27.3689 13.9925 26.4253 15.8634L15.7417 37.0392C15.3141 37.886 15.3141 38.8904 15.7417 39.7372L21.1179 50.3866C21.3685 50.8839 21.8845 51.2039 22.4497 51.2039H38.5439V62.5131C38.5439 63.3403 37.8805 64.0049 37.0549 64.0049H18.5821V63.9754H13.4762C12.911 63.9754 12.395 63.6554 12.1444 63.1581L0.320649 39.7274C-0.106893 38.8805 -0.106893 37.8761 0.320649 37.0293L12.1444 13.6084C12.395 13.1112 12.911 12.7911 13.4762 12.7911H24.9903C26.8479 12.7911 28.5778 11.8655 29.6098 10.3146L36.2293 0.379106C36.4357 0.137857 36.7355 0 37.0451 0H74.831C75.6566 0 76.1726 0.896069 75.7549 1.61489ZM50.5987 60.4748C50.5987 62.5771 49.2178 64 47.0653 64C44.9129 64 43.5319 62.6362 43.5319 60.4748C43.5319 58.3134 44.903 56.9496 47.0653 56.9496C49.2276 56.9496 50.5987 58.3035 50.5987 60.4748ZM50.0778 60.4748C50.0778 58.7023 48.8787 57.4419 47.0604 57.4419C45.2421 57.4419 44.0332 58.6531 44.0332 60.4748C44.0332 62.2965 45.2421 63.5076 47.0604 63.5076C48.8787 63.5076 50.0778 62.2965 50.0778 60.4748ZM48.918 62.5131H48.3185L47.1538 60.7406H46.1611V62.5131H45.65V58.4857H47.2865C48.0334 58.4857 48.7214 58.7319 48.7214 59.623C48.7214 59.9824 48.5887 60.2975 48.3135 60.4945C48.1612 60.5979 47.9548 60.6766 47.7287 60.7111L48.918 62.5131ZM46.1611 58.9682V60.268H47.2865C47.7484 60.268 48.23 60.1351 48.23 59.623C48.23 59.0814 47.7582 58.9682 47.2865 58.9682H46.1611ZM62.5257 19.5461L75.3175 27.2858L75.3225 27.2957C76.3299 27.9062 76.9196 29.0189 76.8606 30.1956L76.6002 35.252L73.8531 33.4401C72.8604 32.7853 71.5876 32.7361 70.5458 33.3121L61.0858 38.5605C59.926 39.2055 58.9677 40.1607 58.319 41.3177L53.5227 49.8845C53.0657 50.7067 52.2007 51.2138 51.2621 51.2138H38.5489L44.6475 39.9637C45.0455 39.2449 44.5394 38.3587 43.7138 38.3587H29.885C28.7596 38.3587 28.047 37.1623 28.5729 36.1677L33.7476 26.3504C34.0081 25.8629 34.5142 25.5528 35.0696 25.5528H64.2113L64.6978 25.5183L65.5971 24.3908L62.5257 19.5461Z" fill="#CC7F2E"/>
</svg>
                </li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </nav>
      </header>
       <article className='container-big h-full '>
          <div className="container-small border-l-2  border-r-2 border-[#CC7F2E]">
          <section className='pt-8 max-w-[95%] my-0 mx-auto'>
            <h1 className='text-[128px] uppercase text-center hero leading-none'>Elevate your storytelling with <span className='text-[#CC7F2E]'>golde cinematics</span></h1>
            <p className='text-center max-w-[57%] my-0 mx-auto py-8 font-light'>From captivating visuals to immersive naratives, we specialize in bringing
              your ideas to life on the silver screen let us elevate your vision with our passion,
              creativity, and dedication to excellence.
            </p>
          </section>
          </div>
          <figure className=''>
                <img src="/assets/page1/vid-no-strock.png" alt="hero media" className='hero_media'/>
          </figure>
          <div className='container-small h-6 border-l-2 border-r-2 border-[#CC7F2E]'></div>
       <section className='border border-[#CC7F2E] p-6'>
          <img src={"/assets/page1/partners.png"} alt="partners"/> 
       </section> 
        </article>
        <article className='container-small flex flex-col justify-center py-24'>
          <h2 className='border border-[#CC7F2E] p-2 uppercase text-center w-32 self-center text-xl'>our story</h2>
          <h3 className='text-[128px] uppercase text-center hero leading-none py-8 pb-24'>Meet <span className='text-[#CC7F2E]'>John</span></h3>
          
          <section className="container-small flex justify-center items-center relative min-w-[500px] w-[38%] p-12 hieght-12">
           <div className="seldf-center flex flex-row justify-center max-h-[60%] w-full max-w-[500px]">
            <img src={"/assets/page2/john2.png"} alt="johns story" className="border border-[#CC7F2E] w-[60%]" />
            <img src={"/assets/page2/john1.png"} alt="johns story" className="border border-[#CC7F2E] w-[60%]" /> 
          </div>
      
          <div className="border border-[#CC7F2E] absolute min-w-[60%] h-full bg-[#121212] text-xs px-4 py-12 leading-normal text-center w-[350px]">
            <p>From a media arts enthusiast at Westfield State to an acclaimed director at Surefire Creative Studios, John, nicknamed "Golde" by his team, has led a 15-year journey in filmmaking marked by creative innovation and a deep passion for visual storytelling. Under the mentorship of the late Jared Hancock, John mastered the craft of cinematic expression and led a team of creatives to new heights.</p>
            <p className="pt-4">
              Today, John channels resilience and authenticity into every project, partnering with leading brands to create content that resonates and inspires. His mission? To honor a legacy of excellence and ignite the screen with stories that matter.
            </p>
            <p>Join John on this transformative journey, where vision meets purpose, and every frame tells a story.</p>
            </div>
          </section>
        </article>
        <article  className='flex flex-col justify-center pb-24'>
          <hgroup className="container-small flex flex-col justify-center">
          <h2 className='border border-[#CC7F2E] p-2 uppercase text-center w-32 text-xl self-center'>our work</h2>
          <h3 className='text-[128px] uppercase text-center hero leading-none py-8 pb-12'>Cool innovations</h3>
          </hgroup>
          <div className="container-big grid place-content-center grid-cols-4 border border-[#CC7F2E] w-ful uppercase">
            <span className="text-xl text-black text-center bg-[#CC7F2E] p-2 #828283">all</span>
            <span className="text-xl text-white text-center bg-[#828283] p-2 border-l-[1px] border-r-[1px] border-[#CC7F2E]">brands</span>
            <span className="text-xl text-white text-center bg-[#828283] p-2 border-l-[1px] border-r-[1px] border-[#CC7F2E]">weddings</span>
            <span className="text-xl text-white text-center bg-[#828283] p-2 border-l-[1px] border-r-[1px] border-[#CC7F2E]">music</span>
          </div>
          <section className="my-8 container-big grid place-content-center grid-cols-3 grid-rows-1 border border-[#CC7F2E] w-ful uppercase">
              <figure className={"border border-[#CC7F2E] w-ful uppercase"}>
                <img src="/assets/works/swiftstrike.png" alt="swiftstrike"/>
                <figcaption>
                  <p className="flex justify-between p-4"><span>brands</span><span>24th august 2024</span></p>
                  <p className="text-[#CC7F2E] font-bold text-2xl p-4">swiftstrike</p>
                </figcaption>
              </figure>
              <figure className={"border border-[#CC7F2E] w-ful uppercase"}>
                <img src="/assets/works/swiftstrike.png" alt="swiftstrike"/>
                <figcaption>
                  <p className="flex justify-between p-4"><span>brands</span><span>24th august 2024</span></p>
                  <p className="text-[#CC7F2E] font-bold text-2xl p-4">swiftstrike</p>
                </figcaption>
              </figure>
              <figure className={"border border-[#CC7F2E] w-ful uppercase"}>
                <img src="/assets/works/swiftstrike.png" alt="swiftstrike"/>
                <figcaption>
                  <p className="flex justify-between p-4"><span>brands</span><span>24th august 2024</span></p>
                  <p className="text-[#CC7F2E] font-bold text-2xl p-4">swiftstrike</p>
                </figcaption>
              </figure>
          </section>
        </article>
    </main>
  );
}

export default App;
