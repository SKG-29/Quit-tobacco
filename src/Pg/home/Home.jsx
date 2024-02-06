import Stories from "../../Comp/stories/Stories"
import Posts from "../../Comp/posts/Posts"
import Share from "../../Comp/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home