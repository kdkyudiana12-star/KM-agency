import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <svg width="140" height="140" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18.5" stroke="#C8A96A" strokeWidth="1" />
          <circle cx="20" cy="20" r="12.5" stroke="#C8A96A" strokeWidth="1" />
          <circle cx="20" cy="20" r="6.5" stroke="#C8A96A" strokeWidth="1" />
          <circle cx="20" cy="20" r="1.5" fill="#C8A96A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
