// src/components/ProductCard.jsx
export default function ProductCard({ name, description, price, imageUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 w-full max-w-sm mx-auto">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-green-700 font-bold mb-3">Rp {price}</p>
      <a
        href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20pesan%20${encodeURIComponent(
          name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-full"
      >
        Pesan Sekarang
      </a>
    </div>
  );
}
