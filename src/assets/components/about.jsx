import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function About(){
return(
    <div>
 <div className='text-2xl font-bold'>
      <FontAwesomeIcon icon={faArrowRight} className="text-black " /><p className='inline ml-2'>about</p>
      </div>
  <p className=" text-lg mb-4 w-[76%]">
    Hello, I'm Aadarsh Adhikari, a passionate student currently pursuing my Bachelor's in Computer Applications (BCA) at Mechi Multiple Campus (MMC).  I have a keen interest in frontend development, particularly in technologies like React and Tailwind CSS . I enjoy exploring new concepts and frameworks to enhance my skills and build exciting projects. 
  </p>

    </div>
)
}
export default About;