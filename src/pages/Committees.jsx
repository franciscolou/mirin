import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { committees } from "@/lib/utils";

export default function CommitteesPage() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col">
            <Navbar />

            <div className="flex flex-col items-center mt-12 px-4">
                <h1 className="text-3xl font-bold mb-8">Comitês</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {committees.map((committee, idx) => (
                        <button
                            key={committee.title}
                            className="flex flex-col items-center bg-neutral-800 text-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl hover:bg-neutral-700 focus:outline-none"
                            onClick={() => setSelected(committee)}
                        >
                            <img
                                src={committee.img}
                                alt={committee.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4 w-full flex flex-col items-center">
                                <span className="text-lg font-semibold">{committee.title}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-3/4 p-6 relative flex flex-col"
                        style={{ maxHeight: "90vh" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-black hover:bg-gray-200 rounded-full p-2 transition duration-150"
                            onClick={() => setSelected(null)}
                            aria-label="Fechar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="overflow-y-auto flex-1 pt-8">
                            <img
                                src={selected.img}
                                alt={selected.title}
                                className="w-full h-56 object-cover rounded mb-4"
                            />
                            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                            {selected.bulletPoints && selected.bulletPoints.length > 0 && (
                                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                                    {selected.bulletPoints.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            )}
                            <p className="text-gray-700">{selected.description}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}