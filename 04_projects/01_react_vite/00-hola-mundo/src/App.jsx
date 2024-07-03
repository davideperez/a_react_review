import FollowersList from "./components/FollowersList"
import FollowersListFromArray from "./components/FollowersListFromArray"
import './App.css'

export default function App () {
  return(
    <>
      <div className="tw-followCard-listContainer">
        <FollowersList />
        <FollowersListFromArray />
      </div>
    </>
  )
}