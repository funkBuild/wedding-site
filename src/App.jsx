import React, { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div ref={menuRef} className="menu-wrapper">
      <button
        className={`mobile-menu-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`menu-container ${isOpen ? "active" : ""}`}>
        <span className="menu-item" onClick={() => scrollToSection("wedding")}>
          Wedding
        </span>
        <span className="menu-item" onClick={() => scrollToSection("details")}>
          Details
        </span>
        <span className="menu-item" onClick={() => scrollToSection("faq")}>
          FAQ
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="header-names">
        <span className="name">Matt</span> & <span className="name">Emily</span>
      </div>
      <Menu />
    </div>
  );
};

const Background = () => {
  return <div className="header-background"></div>;
};

const WeddingDetails = () => {
  return (
    <div className="invitation-container" id="wedding">
      <div className="names">Matt & Em</div>

      <div className="date-container">
        <div className="date-number">08</div>
        <div className="date-circle">11</div>
        <div className="date-number">25</div>
      </div>

      <div className="time">AT 2:30PM</div>

      <div className="location">
        <b>South Thomson Bay</b>
        <br />
        Rottnest Island
      </div>

      <div className="separator"></div>

      <div className="blurb">
        Join us as we celebrate our wedding on the beautiful Rottnest Island.
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="details-container" id="details">
      <div className="sub-header">The Details</div>

      <svg
        className="shell-decoration"
        width="50"
        height="40"
        viewBox="0 0 50 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 35c-8 0-15-7-15-15s7-15 15-15 15 7 15 15-7 15-15 15zm0-5c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z"
          fill="none"
          stroke="#4a7c7e"
          strokeWidth="1.5"
        />
        <path
          d="M25 10v20M15 20h20M20 15l10 10M30 15l-10 10"
          stroke="#4a7c7e"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      <div className="details-paragraph">
        <span className="details-header">Getting to Rotto</span>
        <p>
          Catch the ferry over on Friday the 7th – we'd suggest the morning one
          so you've got plenty of time to explore the island before the big day!
          The ferry journey is about 40 minutes long from Hillary's.
        </p>
        <p>
          Those leaving from Hillary's can use the booking code{" "}
          <b>ANDERSONWEDDING</b> for discounted fares when booking with{" "}
          <a href="https://www.rottnestfastferries.com.au/">
            Rottnest Fast Ferries
          </a>
          .
        </p>
        <p>
          The ferry company will deliver your luggage to your accommodation for
          you, just remember to buy some luggage tags when you book your ticket.
        </p>
        <span className="details-header" id="accommodation">
          Where You're Staying
        </span>
        <p>
          We've sorted accommodation for everyone. Details of the units can be
          found{" "}
          <a href="https://www.rottnestisland.com/stay/accommodation/stay-rottnest-self-contained">
            here
          </a>
          . Details of your specific unit/room will be provided closer to the
          day (once we know the details!)
        </p>
        <p>
          The accommodation includes linen and bath towels but remember to bring
          your own beach towel.
        </p>
        <p>
          Check-in is from 2pm on Friday. You'll need to check out by 9am on
          Sunday, but don't rush off – stay and enjoy the beach if you can!
        </p>
        <span className="details-header">Food</span>
        <p>
          There is a well stocked{" "}
          <a href="https://rottnestgeneralstore.com.au/">general store</a> on
          the island and plenty of places to eat, however it can be pricey! Food
          can be brought over on the ferry in eskies.
        </p>
        <span className="details-header">Gifts</span>
        <p>
          Joining us for our wedding and a weekend away is gift enough. We can't
          wait to celebrate with you all!
        </p>
        <span className="details-header">The Big Day</span>
        <p>
          Join us on the beach at South Thomson Bay, just in front of Hotel
          Rottnest, at 2:30pm on Saturday for the ceremony. After we say{" "}
          <span className="fancy">"I do"</span> we'll head to{" "}
          <a href="https://www.thelodgewadjemup.com/eat-drink">
            Sunsets At the Lodge
          </a>{" "}
          for drinks and nibbles, then make our way to{" "}
          <a href="https://isolabarecibo.com.au/">Isola</a> for dinner at
          5:30pm.
        </p>

        <div className="signature"></div>
      </div>
    </div>
  );
};

const Itinerary = () => {
  return (
    <div className="itinerary-container">
      <div className="sub-header">Itinerary</div>

      <div className="day-header">Friday</div>

      <div className="events-container">
        <div className="event left">
          <div className="event-name">Arrive at the island</div>

          <div className="event-time">10:00 am</div>

          <div className="event-description">
            Jump on the ferry and make your way over to the island. Have a day
            bag packed with your beach gear and sunscreen so you can enjoy the
            island until you're reunited with your luggage at checkin.
          </div>
        </div>

        <div className="event right">
          <div className="event-name">Check into accommodation</div>

          <div className="event-time">2:00 pm</div>

          <div className="event-description">
            Grab your keys from Matt and get unpacked and relaxed in your
            beachside unit for the weekend.
          </div>
        </div>

        <div className="event left">
          <div className="event-name">Meet up for a BBQ</div>

          <div className="event-time">5:00 pm</div>

          <div className="event-description">
            Join us for a pre-wedding BBQ at the Anderson's unit.
          </div>
        </div>
      </div>

      <div className="day-header">Saturday</div>

      <div className="events-container">
        <div className="event right">
          <div className="event-name">Getting ready</div>

          <div className="event-time">10:00 am</div>

          <div className="event-description">
            Ladies will have breakfast with Em whilst the gents have a brunch
            with Matt.
          </div>
        </div>

        <div className="event left">
          <div className="event-name">Ceremony</div>

          <div className="event-time">2:30 pm</div>

          <div className="event-description">
            Join us at South Thompson beach just in front of Hotel Rottnest as
            we tie the knot!
          </div>
        </div>

        <div className="event right">
          <div className="event-name">Drinks at Sunsets at the Lodge</div>

          <div className="event-time">3:00 pm</div>

          <div className="event-description">
            Party time! Grab a cocktail and something to eat as we kick off the
            celebrations.
          </div>
        </div>

        <div className="event left">
          <div className="event-name">Dinner at Isola</div>

          <div className="event-time">5:30 pm</div>

          <div className="event-description">
            Save room for the finest food Rottnest has to offer as we enjoy a
            dinner together at Isola and watch the sun go down over Thomson's
            Bay.
          </div>
        </div>

        <div className="event right">
          <div className="event-name">Kick on at Hotel Rottnest</div>

          <div className="event-time">8:30 pm</div>

          <div className="event-description">
            Those still standing are welcome to keep the party going at the pub.
          </div>
        </div>
      </div>

      <div className="day-header">Sunday</div>

      <div className="events-container">
        <div className="event left">
          <div className="event-name">Checkout</div>

          <div className="event-time">9:00 am</div>

          <div className="event-description">
            Leave your luggage out the front of your unit by 8:00am and return
            the key to the visitors center. Pack yourself a day bag to spend the
            rest of the day exploring the island.
          </div>
        </div>

        <div className="event right">
          <div className="event-name">Brunch</div>

          <div className="event-time">9:15 am</div>

          <div className="event-description">
            Regroup for a small brunch at the Anderson's unit and enjoy the
            finest pastries from the Rottnest Bakery.
          </div>
        </div>

        <div className="event left">
          <div className="event-name">Enjoy the rest of your day!</div>

          <div className="event-time"></div>

          <div className="event-description">
            Explore the island and enjoy the beach before catching the ferry
            back to Perth.
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container" id="faq">
      <div className="sub-header">FAQ</div>

      <div className="faq-grid">
        <div className="faq-item">
          <div className="faq-question">What should I wear?</div>
          <div className="faq-answer">
            Smart-casual beach wear. No colour is off limits. Feel free to wear
            boardies and go without shoes if you like!
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            I'm a single Uncle, can I bring a plus one?
          </div>
          <div className="faq-answer">
            Absolutely! You can definitely bring a plus one. However, if you
            fail to do so, we'll be assigning you an adorable toddler who's been
            loosely trained in the art of finding future Aunties. Results not
            guaranteed.
          </div>
        </div>
      </div>
    </div>
  );
};

const WeddingInvitation = () => {
  return (
    <div className="container">
      <Header />
      <Background />
      <WeddingDetails />
      <Details />
      <Itinerary />
      <FAQ />
    </div>
  );
};

export default WeddingInvitation;
