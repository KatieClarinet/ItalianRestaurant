/* This example requires Tailwind CSS v2.0+ */
import Spices from "../../Assets/Spices.jpg"

export default function Home() {
    
    return (
        <>
            <div className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">
                                    Welcome to
                                </span>{" "}
                                <span className="block text-emerald-400 xl:inline">
                                    Katie's Restaurant
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                Here you can order delicious Indian recipes. Head to the menu tab to browse. If you have any dietary requirements, please select 'more info'.
                            </p>
                        </div>
                    </main>

                    <div />
                </div>
            
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> */}
                <img className="h-40 w-full object-cover sm:h-72 md:h-96 lg:h-50 lg:w-full" src={Spices} alt="" />
            {/* </div> */}
            </div>
            </div>
        </>
    );
}