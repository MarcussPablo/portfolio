import { useEffect } from "react";

export const  AddBanner=()=> {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6723609141528925"
      data-ad-slot="2151899854"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
