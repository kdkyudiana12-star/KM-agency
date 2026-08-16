import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          borderRadius: "50%",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#C8A96A" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="12" stroke="#C8A96A" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="6" stroke="#C8A96A" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="2" fill="#C8A96A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
