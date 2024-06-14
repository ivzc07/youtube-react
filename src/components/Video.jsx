import clsx from 'clsx'
export default function Video(props){
    return(
        <article className= {clsx('flex flex-col gap-2', { 'special' : props.channel === 'Club Space Miami' })} >
            <img className='w-full object-cover aspect-video rounded-xl' src={props.image} alt="" />
            <footer className='grid grid-cols-[3rem_1fr] gap-2'>
                {
                    props.channel && (
                        <img
                            className='col-start-1 col-end-2 w-8 h-8 rounded-xl' 
                            src={`https://api.dicebear.com/8.x/identicon/svg?seed=${props.channel}`} alt="" 
                        />   
                    )
                }
                {
                    !props.channel && (
                        <span> 🥱 </span>
                    )
                }  
                <span className="col-start-2 col-end-3">{props.title}</span>
                <span className="col-start-2 col-end-3">{props.channel}</span>
            </footer>
        </article>
    )
}