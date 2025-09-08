'use client'

export default function StoreMap() {
    const latitude = 43.6489;
    const longitude = -79.3891;
    const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`;

    return (
        <div className="relative rounded-2xl h-full overflow-hidden shadow-lg bg-gray-100">
            <iframe
                src={osmUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Localização da LumaSkin Store"
                loading="lazy"
                className="rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md max-w-48">
                <h3 className="font-bold text-sm text-gray-800 font-radley">Luma    Skin</h3>
                <p className="text-xs text-gray-600">Our physical store</p>
                <p className="text-xs text-[#493a64] mt-1 flex items-center">
                    <span className="mr-1">📍</span>
                    Toronto, ON, Canada
                </p>
            </div>
        </div>
    );
}