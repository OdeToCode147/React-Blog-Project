import React from "react";

export function SmallImageOverlay() {
  return (
    <div className="position-relative smallImgBox">
      <img
        src="https://pbs.twimg.com/media/Fj8NNmTaEAETVo8?format=jpg&name=small"
        alt=""
        className="image-small"
      />

      <div class="bottom-left-small">
        <h5 className="m-0">The Sound cloud</h5>
        <h5>You loved is doomed</h5>
        <p className="grey-text">Hollywood / 12 August 2022</p>
      </div>
    </div>
  );
}
const LargeImageOverlay = () => {
  return (
    <div className="position-relative largeImgBox">
      <img
        src="https://pbs.twimg.com/media/Fj8MJhtakAAmeLV?format=jpg&name=large"
        alt=""
        className="image-large"
      />

      <div class="bottom-left">
        <h3>Title of Vertical</h3>
        <p className="text-grey">Hollywood / 12 August 2022</p>
      </div>
    </div>
  );
};
export default LargeImageOverlay;
