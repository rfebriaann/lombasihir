import Jumbotron from "./component/jumbotron";
import About from "./component/about";
import Image from "next/image";
import Gallery from "./component/gallery";
import Playlist from "./component/playlist";
import Testing from "./component/testing";
import Group from "./component/group";

export default function Home() {
  return (
    <div className="bg-black/90">
      {/* <Group /> */}
      <Testing />
      {/* <Jumbotron />
      <About />
      <Gallery />
      <Playlist /> */}
    </div>
  );
}
