import Navbar from "@/components/layout/Navbar";
import { faq } from "@/lib/utils";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col">
            <Navbar />

            <main className="flex flex-col items-start px-6 py-12 max-w-5xl mx-auto w-full">
                <h1 className="text-3xl font-bold mb-8 text-left w-full">Perguntas Frequentes</h1>
                <div className="w-full space-y-6">
                    {faq.map((item, idx) => (
                        <div key={idx} className="border-b pb-6 text-left">
                            <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
                            <p className="text-gray-700">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
