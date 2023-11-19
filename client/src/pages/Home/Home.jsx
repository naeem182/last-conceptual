import Rooms from "../../components/Rooms/Rooms"
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>

      {/* Rooms section */}
      <Rooms />


    </div>
  )
}

export default Home
