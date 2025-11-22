import React from 'react';

function AboutUs() {
  return (
    <>
      {/* Hero section using heroabout image */}
      <div className="w-full h-64 md:h-96 bg-center bg-cover mb-6" style={{ backgroundImage: `url('/images/heroabout.jpg')` }}>
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">About Us</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow text-gray-800 -mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">The Institute</h2>
        <p className="mb-4">GL Bajaj Institute of Technology and Management is the 6th Institute established under the prestigious banner of Rajeev Memorial Academic Welfare Society (Registered Under Societies Registration Act 1860). The institute is approved by All India Council for Technical Education (AICTE), Ministry of HRD, Govt. of India and Affiliated to Dr. A.P.J. Abdul Kalam Technical University (Formerly UPTU Lucknow).</p>
        <p className="mb-4">GL Bajaj Institute of Technology and Management is one of the most quality-driven educational institutes in the Greater Noida/Delhi-NCR region. Renowned for its academic excellence, GL Bajaj consistently ranks among the top engineering and management colleges in Uttar Pradesh. The institute’s commitment to holistic student development ensures that graduates are not only academically sound but also equipped with the skills and confidence to build successful futures.</p>
        <p className="mb-4">The institute offers undergraduate and postgraduate programs including B.Tech, MBA, and MCA, fostering a robust academic and professional environment.</p>
        <p className="mb-4">GL Bajaj has consistently secured top positions in AKTU university results, maintaining the highest pass percentage among engineering and management colleges in Noida and Greater Noida for the last eight years. It has also been featured among the top engineering colleges in India by the National Institutional Ranking Framework (NIRF), issued by the Ministry of Education, Government of India.</p>
        <h3 className="text-xl font-semibold mb-2 text-green-700">Further enhancing its academic credentials:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>The institute is NAAC A+ accredited, reflecting excellence in institutional performance.</li>
          <li>Most departments are NBA accredited, ensuring program-level quality assurance.</li>
          <li>GL Bajaj holds a prestigious QS I-Gauge Diamond Rating overall, a mark of excellence in higher education.</li>
          <li>It has also been awarded QS I-Gauge Platinum Ranking in Entrepreneurship and Innovation, underlining its commitment to fostering an entrepreneurial and innovative ecosystem.</li>
        </ul>
        <p className="mb-4">GL Bajaj has received multiple accolades recognizing it as one of the top engineering and management institutes in North India and Uttar Pradesh, underscoring its reputation for academic quality, placement success, and infrastructure.</p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Campus Gallery</h3>
          <p className="text-sm text-gray-600 mb-4">A glimpse of our campus and facilities.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'about1.webp',
              'about2.webp',
              'about3.webp',
              'about4.webp',
              'about5.webp',
              'about6.webp',
              'about7.webp',
              'about8.webp',
              'about9.jpeg'
            ].map((file) => (
              <div key={file} className="bg-gray-50 p-2 rounded border">
                <img src={`/images/${file}`} alt={`GL Bajaj - ${file}`} className="w-full h-48 object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
