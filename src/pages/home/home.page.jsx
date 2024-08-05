import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "./components/Hero";
import JobSection from "./components/JobSection";

function HomePage() {
  return (
    <div>
      <Hero />
      <JobSection />
    </div>
  );
}

export default HomePage;
