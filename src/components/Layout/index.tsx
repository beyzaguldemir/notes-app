import { Navigate, Outlet, useParams } from "react-router-dom"
import { Note } from "../../types";


const Layout = ({notes}:{notes:Note[]}) => {
    // url'deki id 'yi al
    const {id}=useParams();

  // notes dizisinde elemanı ara
  const found=notes.find((i)=>i.id===id)
   // bulmazsa anasayfaya yönlendir
    if(!found) return <Navigate to="/" replace/>
    
    console.log(found)
   // parent route içerisinde alt route'u nasıl gösterir
  return  <Outlet context={found}/>
  
}

export default Layout