'use client'

const wellData = [
  {
    location: '라자스탄',
    lat: 26.9124,
    lng: 75.7873,
    water_quality: 'Good'
  },
  // 더 많은 데이터를 추가할 수 있습니다
]

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">Well Finder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wellData.map((well, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-green-600">{well.location}</h2>
              <div className="text-gray-600">
                <p>위도: {well.lat}</p>
                <p>경도: {well.lng}</p>
                <p>수질: {well.water_quality}</p>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary bg-green-500 hover:bg-green-600 border-none">
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}