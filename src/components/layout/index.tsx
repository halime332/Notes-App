import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom"
import type { RootState } from "../../redux/store";
import type { FC } from "react";

//hem detail hemde edit sayfalarında urldeki parametreye göre notu 'un verilerini
//alsaydık kod tekrarına düşecektik 
//bundan dolayı her ikisini ortak noktası olan layout 
//componentinde bu işlemi yapıcaz ve prop olarak detail ve edit sayfalarına göndericez

const Layout:FC = () => {
    //storedaki note verilerine eriş
   const {notes} = useSelector((state:RootState)=>state.notes);


//urlden note un idsini al
 const {id} = useParams();

 //mevcut notların arasından idsi bilinen notu bul
 const found = notes.find((note)=>note.id ===id);

 //eğer bulamazsak anasayfaya yönlendir
 if(!found){return <Navigate to="/" replace/>;}
 
 //alt route elementini ekrana bas
  return <Outlet context={found}/>;
}

export default Layout;
