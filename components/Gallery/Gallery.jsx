import dynamic from "next/dynamic";
import styles from "./Gallery.module.scss";
import H2 from "../Text/H2";
const Slider = dynamic(() => import("../../components/Slider"));
// import Slider from "../Slider";
// const slidesData = [
//   {
//     src: "/images/slider/slide-2.png",
//   },
//   {
//     src: "/images/slider/slide-1.png",
//   },
//   {
//     src: "/images/slider/slide-3.png",
//   },
//   {
//     src: "/images/slider/slide-4.png",
//   },
//   {
//     src: "/images/slider/slide-1.png",
//   },
//   {
//     src: "/images/slider/slide-2.png",
//   },
// ];

export default function Gallery(props) {
  return (
    <div className={styles.gallery + " row"}>
      <div className="col-sm-3">
        <H2>Gallery</H2>
        {props.link && (
          <div className="mt-sm">
            <a href={props.link} className="link" target="_blank">
              All examples →
            </a>
          </div>
        )}
      </div>
      <div className={styles.sliderWrap + " col-sm-9"}>
        <Slider slidesData={props.gallery} />
      </div>
    </div>
  );
}
