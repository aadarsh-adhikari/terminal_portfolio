import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Welcome(){
    return(
        <div className="inline-block w-full mt-10 " >
        <p>aadarsh/portfiloi/~</p>
        <p className=" text-2xl font-extrabold  " >  <FontAwesomeIcon icon={faArrowRight} className='text-black' /> WELCOME TO MY PORTFOLIO</p>

      </div>
    )
}
export default Welcome