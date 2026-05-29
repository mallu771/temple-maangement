// src/pages/TempleImages.jsx

function TempleImages() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Temple Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src="/src/Images/temple1.jpg"
          alt="Temple"
          className="rounded-xl shadow-md"
        />

        <img
          src="/src/Images/temple2.jpg"
          alt="Temple"
          className="rounded-xl shadow-md"
        />

        <img
          src="/src/Images/temple3.jpg"
          alt="Temple"
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  )
}

export default TempleImages