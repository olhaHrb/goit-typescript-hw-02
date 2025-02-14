import css from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#5d5d5d"
        radius="7"
        ariaLabel="three-dots-loading"
        wrapperClass={css.Loader}
        wrapperStyle={{}}
      />
    </div>
  );
};

export default Loader;
