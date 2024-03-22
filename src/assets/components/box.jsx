import Terminal from "./terminal";

function Box() {
  return (
 <>
    <div className="bg-[#444441]  ">
      <div className="flex items-center gap-4 pl-5  bg-black text-white h-9 w-full fixed ">
        <div class="rounded-full bg-red-400 inline-block w-4 h-4"></div>
        <div class="rounded-full bg-yellow-400 inline-block w-4 h-4"></div>
        <div class="rounded-full bg-green-400 inline-block w-4 h-4"></div>
        <p className="blur-[0.8px] select-none text-center ">
          aadarsh/terminal-portfolio
        </p>
      </div>
        
    </div>
    <Terminal/>
 </>
    
  );
}
export default Box;
