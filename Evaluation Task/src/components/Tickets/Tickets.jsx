import React from "react";
import TicketCard from "./TicketCard";

function Tickets() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="min-h-screen max-w-full p-4">
          <h2 className="text-2xl font-bold mb-4">TICKETS</h2>
          <div className="bg-gray-100 p-4 shadow-lg w-fit">
            <TicketCard
              title="Free Ticket"
              description="This is a ticket description. This is a free ticket. This ticket is uncategorised."
              url="https://www.google.com/maps/place/KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
              location="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              venueDetails="This is additional venue details."
              availableTill="31st Aug 2034, 06:00 PM IST"
              buttonText="Register"
            />
            <TicketCard
              title="Paid Ticket"
              description="This is a ticket description. This is a paid ticket. This ticket is uncategorised."
              url="https://www.google.com/maps/place/KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
              location="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              venueDetails="This is additional venue details."
              availableTill="31st Aug 2034, 06:00 PM IST"
              price={1000}
              buttonText="Register"
            />
            <TicketCard
              title="Donation Ticket"
              description="This is a ticket description. This is a donation ticket. This ticket is uncategorised."
              url="https://www.google.com/maps/place/KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
              location="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              venueDetails="This is additional venue details."
              availableTill="31st Aug 2034, 06:00 PM IST"
              priceDetails={{ min: 10, max: 1000 }}
              buttonText="Register"
            />
            <TicketCard
              title="Ticket With Coupon"
              description="This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off."
              url="https://www.google.com/maps/place/KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
              location="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
              venueDetails="This is additional venue details."
              availableTill="31st Aug 2034, 06:00 PM IST"
              price={1000}
              buttonText="Register"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tickets;
