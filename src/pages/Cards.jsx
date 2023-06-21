import { Link } from "react-router-dom";
import StoreList from "./StoreList";

const Cards = () => {

  return (
    <>
    <div>
      <h1 className="mt-4">Choisissez ce que vous cherchez :</h1>
      <StoreList title={'Card'} endPoint={'player'}>

      </StoreList>
      </div>
    </>
  )
}

export default Cards;