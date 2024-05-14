import './App.css';

function App() {
  return (
    <main className='bg-[#121212] text-white h-full'>
       <article className='container-big h-full'>
          <div className="container-small border-l-2  border-r-2 border-[#CC7F2E]">
           <header className="">
            <nav>
              <ul>
                <li>Home</li>
              </ul>
            </nav>
          </header>
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
       <section className='border border-1 border-blue-100 '>
          <img src={"logo512.png"} alt="partners"/> 
       </section> 
        
        </article>
    </main>
  );
}

export default App;
