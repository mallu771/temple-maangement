import { useState } from "react";

export default function BannerUpload() {
  const [banner, setBanner] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Festival Banner Upload
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-4"
      />

      {banner && (
        <img
          src={banner}
          alt="Banner Preview"
          className="rounded-xl border"
        />
      )}
    </div>
  );
}