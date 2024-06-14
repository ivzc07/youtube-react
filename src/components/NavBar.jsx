import YouTubeLogo from './YoutubeLogo'
export default function NavBar () {
    return (
        <nav className='col-start-1 col-end-3 grid grid-cols-3'>
            <div className='flex flex-row items-center gap-1 pl-4'>
                <YouTubeLogo heigth = "1.8rem" width = "3rem" />
                <span>Youtube</span>
            </div>
            <div id="flex justify-center items-center">
                <input className='w-full rounded-lg bg-transparent p-[0.5rem]' type="text" placeholder="Search" />
            </div>
            <div className="flex justify-end cursor-pointer">
                <img 
                className='w-12 h-12 rounded-full cursor-pointer'
                src="https://api.dicebear.com/8.x/identicon/svg?seed=Charles" 
                alt= "user"
                />
            </div>
        </nav>
    )
}
