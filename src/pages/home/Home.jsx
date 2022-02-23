// import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/topbar/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
      {/* <Topbar /> */}
      <Header/>
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
