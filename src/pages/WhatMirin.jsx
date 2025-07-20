import Navbar from "@/components/layout/Navbar";
import mirinBanner from "@/assets/map.jpg"; // Use any prominent image you prefer

export default function WhatMirin() {
    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col">
            {/* Top navigation */}
            <Navbar />

            {/* Banner image */}
            <div className="w-full h-72 md:h-96 overflow-hidden">
                <img
                    src={mirinBanner}
                    alt="Mirin Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title and description */}
            <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-6 text-left w-full bg-black text-white px-4 py-2 rounded">
                    O que é o Mirin?
                </h1>
                <div className="text-lg text-gray-700 text-left w-full">
                    <p className="text-justify mb-4">
                        O XIX Modelo Intercolegial de Relações Internacionais (MIRIN) da PUC-Rio acontecerá entre os dias 21 e 25 de julho de 2025, no campus da universidade. O evento reúne estudantes do Ensino Médio e do Ensino Superior em uma imersão prática no universo da diplomacia, simulações políticas e negociações internacionais.
                    </p>
                    <p className="text-justify mb-4">
                        Durante cinco dias de debates intensos, os participantes representam países, personalidades ou instituições em comitês históricos e contemporâneos, enfrentando desafios que exigem argumentação qualificada, negociação estratégica e construção de soluções diplomáticas.
                    </p>
                    <p className="text-justify mb-4">
                        O MIRIN é organizado exclusivamente por alunos da PUC-Rio, de diferentes cursos e áreas, que assumem funções acadêmicas e administrativas, elaboram os materiais preparatórios e conduzem o desenvolvimento dos comitês. Essa pluralidade também fortalece o caráter multidisciplinar do evento, que alia teoria e prática em um ambiente colaborativo e desafiador.
                    </p>
                    <p className="text-justify">
                        Consolidado como um dos mais relevantes modelos de simulação do país, o MIRIN chega à sua 19ª edição valorizando o protagonismo juvenil e acadêmico, estimulando habilidades como oratória, escrita diplomática, liderança e pensamento crítico. Além dos comitês, o evento promove atividades sociais e culturais, favorecendo o networking entre estudantes de diferentes níveis de ensino e instituições.
                    </p>
                </div>
            </div>
        </div>
    );
}