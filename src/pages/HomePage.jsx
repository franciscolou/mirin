import HighlightCarousel from "@/components/layout/HighlightCarousel";
import Navbar from "@/components/layout/Navbar";
import Calendar from "@/components/layout/Calendar";
import EventDescription from "@/components/layout/EventDescription";

import trump from "@/assets/trump.jpg"; // Importa como caminho de imagem
import bolsa from "@/assets/bolsa.jpeg"; // Importa como caminho de imagem

const highlights = [
  { title: "Simulação da ONU em destaque", imageUrl: trump },
  { title: "Debate sobre Clima em Harvard", imageUrl: bolsa },
  { title: "Conferência Interuniversitária 2025", imageUrl: "/img/highlight3.jpg" },
];

export default function HomePage() {
return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        {/* Top navigation */}
        <Navbar />

        {/* Highlight section */}
        <HighlightCarousel items={highlights} />
        <div className="flex flex-column gap-8 mt-8">
            <Calendar />
            <EventDescription />
        </div>
    </div>
);
}