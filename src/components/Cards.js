// let json = {
//   "card": [
//     {
//       "title": "COVID and Your Heart",
//       "text": "Lingering health issues related to COVID may affect your heart, no matter what your age. It is essential to have one of our cardiologists check your heart, especially before resuming exercise.",
//       "id": "covid",
//       "CTA": "Request an Appointment",
//       "hide": "false"
//     },
//     {
//       "title": "This Heart Scan Can Give You Peace of Mind",
//       "text": "A coronary calcium scan is a specialized X-ray that measures plaque in your arteries. You can get one without symptoms or a physician referral. It’s just $49 and well worth it at any cost.",
//       "id": "heartscan",
//       "CTA": "Request An Appointment",
//       "hide": "true"
//     },
//     {
//       "title": "Unique Heart Issues in Women",
//       "text": "Heart disease in women is on the rise. Smaller arteries leading to the heart are subject to blockages. Unique symptoms can be vague, including shortness of breath or pain in the neck, jaw, throat, upper abdomen and back.",
//       "id": "womens",
//       "CTA": "Learn More",
//       "hide": "false"
//     }
//   ]
// }
const json = require('../api/cards.json');

function Cards() {
  return (
    <div className="cards">
      {json.cards.map(card => (
        <div className={card.hide === "true" ? "card hide" : "card"}>
          <h3 class="card-title">{card.title}</h3>
          <p class="card-text">{card.text}</p>
          <div class="card-cta">
            <div class="card-button" id={card.id}>{card.CTA}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards