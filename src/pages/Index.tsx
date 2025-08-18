import { useEffect } from 'react';
import FloatingElements from '@/components/FloatingElements';
import PremiumCard from '@/components/PremiumCard';
import EventSection from '@/components/EventSection';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    // Blinking title effect
    const originalTitle = "❤️ Ananthu & Lakshmi Wedding Invitation";
    let showHeart = true;

    const titleInterval = setInterval(() => {
      document.title = showHeart ? "💕 " + originalTitle : "✨ " + originalTitle;
      showHeart = !showHeart;
    }, 2000);

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-elegant relative overflow-x-hidden">
      <FloatingElements />
      <MusicPlayer />
      
      {/* Cover Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8 relative">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h1 className="font-great-vibes text-5xl sm:text-6xl md:text-8xl lg:text-9xl shimmer-text mb-4 sm:mb-6 leading-tight">
            Ananthu & Lakshmi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-playfair px-2">
            Together with their families
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 font-playfair px-2">
            Invite you to celebrate their wedding
          </p>
          
          <div 
            className="text-3xl sm:text-4xl text-primary animate-gentle-bounce cursor-pointer hover:scale-110 transition-transform duration-300 mt-6 sm:mt-8"
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ⇣
          </div>
        </div>
      </section>

      {/* Family Details Section */}
      <section id="details" className="py-8 sm:py-12 md:py-16 px-2 sm:px-4">
        <PremiumCard variant="elegant" className="max-w-4xl mx-auto mb-8 sm:mb-12 text-center">
          <p className="text-base sm:text-lg mb-3 sm:mb-4 font-playfair px-2">
            Smt. Usha Viswanath & Sri. V. D. Viswanath Menon<br />
            Kalachur House, Kalachur Road, Manjummel P.O., Ernakulam
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 font-playfair text-muted-foreground px-2">
            joyfully invite you to join in celebrating the wedding of
          </p>
          
          <div className="font-great-vibes text-3xl sm:text-4xl md:text-6xl text-primary shimmer-text mb-3 sm:mb-4">
            Ananthu Viswanath
          </div>
          <div className="text-2xl sm:text-3xl text-primary mb-3 sm:mb-4">&</div>
          <div className="font-great-vibes text-3xl sm:text-4xl md:text-6xl text-primary shimmer-text mb-6 sm:mb-8">
            Lakshmi Unnikrishnan
          </div>
          
          <p className="text-base sm:text-lg font-playfair px-2">
            D/o. Smt. Shyja Unnikrishnan & Shri T. P. Unnikrishnan<br />
            Thannikkal House, Madathumpady P.O., Erattapady, Mala
          </p>
        </PremiumCard>
      </section>

      {/* Wedding Ceremony Section */}
      <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4">
        <EventSection
          title="Wedding Ceremony"
          date="Sunday, 14 September 2025"
          time="9:30 AM – 2:30 PM"
          location="Highview Arcade, Poopathy, Mala, Thrissur"
          mapUrl="https://maps.google.com/?q=Highview+Arcade+Poopathy+Mala+Thrissur"
          calendarData="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20250914T040000Z%0ADTEND:20250914T090000Z%0ASUMMARY:Wedding%20Ceremony%20-%20Ananthu%20%26%20Lakshmi%0ALOCATION:Highview%20Arcade%2C%20Poopathy%2C%20Mala%2C%20Thrissur%0ADESCRIPTION:Thalikkettu%20at%20Guruvayoor%20Temple%20followed%20by%20lunch%20at%20Highview%20Arcade%0AEND:VEVENT%0AEND:VCALENDAR"
          filename="wedding-ceremony.ics"
          variant="highlight"
        />
      </section>

      {/* Reception Section */}
      <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4">
        <EventSection
          title="Wedding Reception"
          date="Monday, 15 September 2025"
          time="6:00 PM – 9:00 PM"
          location="Santhom Parish Hall, Pathalam, Eloor"
          mapUrl="https://maps.google.com/?q=Santhom+Parish+Hall+Pathalam+Eloor"
          calendarData="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20250915T123000Z%0ADTEND:20250915T153000Z%0ASUMMARY:Wedding%20Reception%20-%20Ananthu%20%26%20Lakshmi%0ALOCATION:Santhom%20Parish%20Hall%2C%20Pathalam%2C%20Eloor%0ADESCRIPTION:Wedding%20Reception%20of%20Ananthu%20%26%20Lakshmi%0AEND:VEVENT%0AEND:VCALENDAR"
          filename="wedding-reception.ics"
          variant="elegant"
        />
      </section>


      {/* Footer */}
      <footer className="py-8 sm:py-12 md:py-16 text-center px-2 sm:px-4">
        <PremiumCard className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-base sm:text-lg font-playfair text-muted-foreground mb-3 sm:mb-4">
              With love,
            </p>
            <p className="font-great-vibes text-2xl sm:text-3xl text-primary shimmer-text">
              Ananthu & Lakshmi
            </p>
            <div className="flex justify-center space-x-4 mt-4 sm:mt-6 text-xl sm:text-2xl">
              <span className="animate-sparkle">💕</span>
              <span className="animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="animate-sparkle" style={{ animationDelay: '1s' }}>🌸</span>
            </div>
          </div>
        </PremiumCard>
      </footer>
    </div>
  );
};

export default Index;