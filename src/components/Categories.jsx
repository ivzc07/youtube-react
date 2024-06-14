export default function Categories(){
    const categories = [
        "All", 
        "Music",
        "Gaming",
        "Code",
        "Programming",
        "Life Style",
        "Sports"
    ]
    return(
        <div  className="flex flex-row gap-4 pt-4">
            
            {
                categories.map((category) => {
                    return(
                        <span key={`category-${category}`}className="bg-[#282828] pt-2 pr-4 rounded-[20px] p-[0.5rem_1rem] cursor-pointer">
                            { category }
                        </span> 
                    )
                })
            }

        </div>
    )
}