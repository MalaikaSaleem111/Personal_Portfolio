export default function Hero(){
    return(
        <main className="flex h-screen w-full">
            <section className="h-screen w-1/2 flex flex-col items-center justify-center text-center  text-black">
                <h2 className="text-5xl font-bold typing-effect">Hello I'm Malaika</h2>
                
            </section>
            <div className="w-1/2 ">
                <img src="/my-img1.png" alt="" className="mt-36 w-96 rounded-3xl shadow-xl bg-slate-500"/>
            </div>
        </main>
    )
}