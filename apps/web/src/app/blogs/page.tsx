import React from "react";

export default async function AdSlotComponent() {
  const adxchainURI = "https://adxchain-web.vercel.app";
  const adSlotId = "FsEWPeuewVNAhgQy8FrmByQfi5QRZZX4zfm73qUm5ckV";
  try {
    const response = await fetch(
      `${adxchainURI}/api/publisher/getAd/${adSlotId}`
    );
    if (response?.status == 200) {
      const data = await response.json();
      return (
        <div
          id={adSlotId} // Will be used for navigating to the add directly
          className="w-screen h-screen flex justify-center items-center"
        >
          <img
            src={data.attributes.displayUri}
            className={`w-[400px] h-[400px]`} // set the dimesions as in adSlots dimension or update accordingly
          />
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img
        src={""} // default placeholder
        className="w-[400px] h-[400px]" // set the dimesions as in adSlots dimension or update accordingly
      />
    </div>
  );
}
