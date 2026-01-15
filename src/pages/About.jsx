import React from 'react';
import background from "../assets/back3.jpeg";
import { IoAccessibilityOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src={background}
          alt="School Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Barbe School</h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-6">
            Baarbe primary & secondary school, waa school astaantisu tahay aqoon iyo tayo. Waa ka mid ah schoolada ugu faca weyn guud ahaan gayiga somaliyed.
          </p>
         <Link to='/student-registration'><a
            className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600 font-semibold"
          >
            Apply Now
          </a>
          </Link> 
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20 flex flex-col gap-12">
        {/* History */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Our History</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Schoolka waxa la aas aasay sanadii 1982. Tan iyo markaas, Barbe School waxay bixisaa waxbarasho tayo leh oo u hogaansan heerarka ugu wanaagsan ee Soomaaliya.
          </p>
        </div>

        {/* Online Registration */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Online Registration</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Schoolku wuxuu mar labaad fursad dahabi ah usiinayaa waalidinta Soomaaliyeed in ay ubadkooda kadiwan galin karaan si online ah, iyagoo shaqadooda joogta ama howlahooda gaarka ah heysta.
            Sidoo kale, fursadan waa mid qiimo leh arday kasta oo ku sugan gobolada dalka, rabana inuu ka mid noqdo ardayda Barbe School inuu isku diwaan gelin karo online.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In Barbe School ay bixiso waxbarasho tayo leh, horumarinta ardayda xirfadaha aqooneed iyo anshaxa, iyo diyaarinta jiilka mustaqbalka u leh dalka.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded shadow-md text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-700">
              Waxaan bixinaa waxbarasho tayo sare leh oo u hogaansan heerarka ugu wanaagsan ee Soomaaliya.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded shadow-md text-center">
            <div className="text-4xl mb-4"><IoAccessibilityOutline  className='ml-45'/></div>
            <h3 className="text-xl font-semibold mb-2">activities</h3>
            <p className="text-gray-700">
             schoolka waxa uu caan kuyahay tartamo aqooned iyo mid sports
             oo logu talagalay in lagu dhiso maskaxda jiilka maantay
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded shadow-md text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Experienced Teachers</h3>
            <p className="text-gray-700">
              Macallimiin khibrad leh oo ardayda siiya taageero buuxda si ay ugu guuleystaan waxbarashadooda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
