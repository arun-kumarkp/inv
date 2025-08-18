import { Button } from './ui/button';
import PremiumCard from './PremiumCard';

interface EventSectionProps {
  title: string;
  date: string;
  time: string;
  location: string;
  mapUrl: string;
  calendarData: string;
  filename: string;
  variant?: 'default' | 'elegant' | 'highlight';
}

const EventSection = ({ 
  title, 
  date, 
  time, 
  location, 
  mapUrl, 
  calendarData, 
  filename, 
  variant = 'default' 
}: EventSectionProps) => {
  return (
    <PremiumCard variant={variant} className="text-center max-w-4xl mx-auto mb-12">
      <h2 className="font-great-vibes text-4xl md:text-5xl text-primary shimmer-text mb-6">
        {title}
      </h2>
      
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <p className="text-base sm:text-lg">
          <span className="font-semibold text-primary">Date:</span> {date}
        </p>
        <p className="text-base sm:text-lg">
          <span className="font-semibold text-primary">Time:</span> {time}
        </p>
        <p className="text-base sm:text-lg">
          <span className="font-semibold text-primary">Location:</span> {location}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
        <Button 
          variant="default" 
          size="lg"
          className="w-full sm:w-auto bg-gradient-gold hover:bg-gradient-shimmer text-white shadow-gold-glow transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 py-3"
          onClick={() => window.open(mapUrl, '_blank')}
        >
          📍 View on Google Maps
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white shadow-soft transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 py-3"
          onClick={() => {
            const element = document.createElement('a');
            element.setAttribute('href', calendarData);
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }}
        >
          📅 Add to Calendar
        </Button>
      </div>
    </PremiumCard>
  );
};

export default EventSection;