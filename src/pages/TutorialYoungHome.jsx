

import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
function TutorialYoungHome(){

    return(
        <>
                 <div>  <Link
                  className="bg-myFavorite my_button text-black text-center block w-96 py-2"
                  to={PathConstants.TutorialYoung}
                >
آموزش فارسی
                </Link></div>
                <Link
                  className="bg-myFavorite my_button text-black text-center block w-96 py-2"
                  to={PathConstants.Book}
                >
             کتاب

                </Link>
                 <div>
                    
                 </div>
        </>
   
    )
}
export default TutorialYoungHome;