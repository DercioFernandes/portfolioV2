export default function Cover(){
    return(
        <>
         <div class="flex h-screen">
            <div class="w-1/2 relative">
                <img src="PortfolioCoverImg.jpeg" alt="Image" class="h-full w-full object-cover"/>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
            </div>
            <div class="w-1/2 bg-black flex items-center justify-center">
                <h1 class="text-white text-4xl font-bold text-center">
                Your centered text here
                </h1>
            </div>
        </div>

        </>
    )
}