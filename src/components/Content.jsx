import Categories from './Categories'
import Video from './Video'

export default function Content () {

    const videos = [
        {
            image: 'https://i.ytimg.com/vi/U-kquKjni8o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCwWTfaFXoDrDS28VCjSOmSSKtdhw',
            title: 'Da Capo | Sondela LIVE from London 26.04.2024 | Afro-House/Afro-Tech Mix',
            channel: 'Sondela Recordings',
        },
        {
            image: 'https://i.ytimg.com/vi/ceq9ZlqByIE/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGBwgEyh_MA8=&rs=AOn4CLAfkqpIIB7S0pYNy6y_QtsrK5T4BQ',
            title: 'The Discoteca (Edition 5) x Somalie',
            channel: 'Club Space Miami',
        },
        {
            image: 'https://i.ytimg.com/vi/B9dDyYtg81A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAPOR6Wm_Q-3toIaQqNSTTJaNySA',
            title: 'Yulia Niko @OfficialClubSpace Miami - Dj Set presented by Link Miami Rebels.',
            channel: 'DC-10 Ibiza',
        },
        {
            image:'https://i.ytimg.com/vi/MTkv1kGkveI/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGBMgYSh_MA8=&rs=AOn4CLB7dc3s1bvJMRrHWnK1hybvQz8FAQ',
            title: 'Abraham RK - Puro RIKIÑEO👑 LIVE SET 2023 #UgasVisual #Afro',
            
        }
    ];

    return (
        <section id= "col-start-2 col-end-3 row-start-2 row-end-3">
            <Categories />
            <section className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 pt-4'>
                {
                    videos.map((video) => {
                        return(
                            <Video 
                                key={`video-${video.title}`}
                                image = {video.image}
                                title = {video.title}
                                channel = {video.channel}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}