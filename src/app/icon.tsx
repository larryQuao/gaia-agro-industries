import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#2a4a1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="22"
          height="22"
          fill="none"
          stroke="#e0d5c7"
          strokeWidth="2"
        >
          <path d="M16 4C10 4 6 10 8 16c1 3 4 6 8 8 4-2 7-5 8-8 2-6-2-12-8-12z" />
          <path d="M16 4c0 8-3 14-6 18" />
          <path d="M16 4c0 8 3 14 6 18" />
          <path d="M10 14h12" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
