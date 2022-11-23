import { Followers } from '../../Data/FollowersData.js'


const FollowersCard = () => {
  return (
    <div className="pt-4">
      <h3>Who is following you?</h3>
      {Followers.map((follower) => {
        return <div className="flex flex-row items-center w-64 justify-between">
          <div> <img className="w-14 p-1 rounded-sm" src={follower.img} /></div>
          <div className="w-32"><p className="p-1 ">{follower.name}</p></div>
          <div><button className="bg-orange-600 w-14 rounded-sm text-white">Follow</button></div>
        </div>


      })}
    </div>
  )
}

export default FollowersCard;