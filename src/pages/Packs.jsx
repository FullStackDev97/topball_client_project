import { Link } from "react-router-dom";
import StoreList from "./StoreList";

const Packs = () => {

  return (
    <>
    <div>
      <h1 className="mt-4">Choisissez ce que vous cherchez :</h1>
      <StoreList title={'Pack'} endPoint={'pack'}>

      </StoreList>
      </div>
    </>
  )
}

export default Packs;