import { motion } from "framer-motion";

const events = [
  { date: "APR 18", venue: "Warehouse 9", city: "Berlin, DE", status: "Tickets" },
  { date: "MAY 02", venue: "Fabric", city: "London, UK", status: "Tickets" },
  { date: "MAY 15", venue: "Output Club", city: "New York, US", status: "Sold Out" },
  { date: "JUN 07", venue: "Amnesia", city: "Ibiza, ES", status: "Tickets" },
  { date: "JUL 20", venue: "Rex Club", city: "Paris, FR", status: "Soon" },
];

const EventsSection = () => {
  return (
    <section className="py-24 px-4" id="events">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl mb-16 text-glow-cyan text-primary"
        >
          Upcoming Shows
        </motion.h2>

        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between py-6 border-b border-border hover:border-primary/40 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="font-heading text-primary text-sm md:text-base tracking-widest w-20">
                  {event.date}
                </span>
                <div>
                  <p className="font-heading font-bold text-lg md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    {event.venue}
                  </p>
                  <p className="text-muted-foreground text-sm">{event.city}</p>
                </div>
              </div>
              <span
                className={`font-heading text-xs tracking-widest uppercase px-4 py-2 rounded-sm border ${
                  event.status === "Sold Out"
                    ? "border-secondary/40 text-secondary"
                    : event.status === "Soon"
                    ? "border-muted-foreground/30 text-muted-foreground"
                    : "border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                }`}
              >
                {event.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
