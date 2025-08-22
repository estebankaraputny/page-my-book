import "./LoaderPage.css";

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  return (
    <div className={`loader-overlay ${isVisible ? "show" : "hide"}`}>
      <div className="fire">
      <div className="fire-left">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-center">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-right">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-bottom">
        <div className="main-fire"></div>
      </div>
    </div>
    </div>
  );
}
