export default function Menu () {

    // list rendering 
    const menuItems = [
        {icon: '🏠', text: 'Home'},
        {icon: '🩳', text: 'Shorts'},
        {icon: '⌚️', text: 'Suscriptions'},
        {icon: '🤩', text: 'Favorites'},
    ]
    return <aside className='col-start-1 col-end-2 row-start-2 row-end-3 px-0 pr-4' id='menu'>
        { menuItems.map((item) => {
              return (
                <div key={`menu-item${item.text}`} className="p-4 rounded-3xl flex flex-row g gap-2 items-center">
                <span>{item.icon}</span>
                <span>{item.text}</span>
                </div>
              );
            })
        }
    </aside>
}