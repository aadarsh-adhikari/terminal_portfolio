import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Help(){
    const help =[
     {topic: "help", des: 'shows help list'},
     {topic: "About", des: 'gives details about the developer'},
     {topic: "Skillcard", des: 'showcase my skills'},
     {topic: "clear", des: 'clears screen'},
     {topic: "GUI", des: 'redirects to the graphical portfoilo'},
   ];
return(

      <div className="inline-block " >
        <p>aadarsh/portfiloi/helplist~</p>
        <ul className=" text-xl font-bold  " >  <FontAwesomeIcon icon={faArrowRight} className='text-black' />
        {
          help.map((id)=>(
            <li className='flex gap-12 mb-2' key={id.topic}><p className='w-16'>{id.topic}</p><p >{id.des}</p></li>
          ))
        }
        </ul>
      </div>
)
}
export default Help;