"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the structure of a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

// Sample team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Zuhayr Khan",
    role: "Mentor",
    description: "Providing technical expertise and strategic guidance to help the team develop problem-solving skills, improve their designs, and help to develop and further refine competition strategies.",
    image: "/images/team/mentor.jpg",
  },
  {
    id: 2,
    name: "Sahejpreet Singh",
    role: "Design Lead",
    description: "Responsible for creating and refining CAD models of the robot. He collaborates with the mechanical and electrical team to develop designs that meet game challenges and help score the most.",
    image: "/images/team/design-lead.jpg",
  },
  {
    id: 3,
    name: "Samuel Montero Cano",
    role: "Mechanical Lead",
    description: "Overseeing the fabrication, assembly, and maintenance of the robot's components. He ensures that all mechanical systems function properly and are optimized for competition.",
    image: "/images/team/mechanical-lead.jpg",
  },
  {
    id: 4,
    name: "Sebastian Merino",
    role: "Programming Lead",
    description: "Leading the development of the robot's software. He ensures efficient autonomous routines, driver control responsiveness, and smooth integration of vision systems.",
    image: "/images/team/programming-lead-1.jpg",
  },
  {
    id: 5,
    name: "Ishaan Mittal",
    role: "Programming Lead",
    description: "Specializing in software development for the robot's control system. He works on automation, sensor feedback loops, and drive functionality to enhance overall performance.",
    image: "/images/team/programming-lead-2.jpg",
  },
  {
    id: 6,
    name: "Kishan Joshi",
    role: "Imagery/Media Lead",
    description: "He oversees the team's branding, digital content, and promotional materials while managing the graphics, videos, and social media to enhance its public and social presence.",
    image: "/images/team/media-lead.jpg",
  },
  {
    id: 7,
    name: "Sophia Arfan",
    role: "Award & Outreach/Business Lead",
    description: "Spearheading award submissions and community engagement efforts. She works to highlight the team's impact, manage partnerships, and financial operations.",
    image: "/images/team/outreach-lead.jpg",
  },
  {
    id: 8,
    name: "Soumyaa Kansal",
    role: "Safety Captain/ Strategy Lead",
    description: "Ensures that all team members follow safety protocols while contributing to competition strategy. She works to create a safe workspace while assisting in analyzing gameplay tactics.",
    image: "/images/team/safety-lead.jpg",
  },
  {
    id: 9,
    name: "Muzammil Raza",
    role: "Strategy Lead",
    description: "Analyzing competition data, scouting opponents, and formulating match strategies. He works closely with drive team members to ensure effective decision-making during competitions.",
    image: "/images/team/strategy-lead.jpg",
  },
];

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const visibleMembers = [];
  // Add the active member and the next two members (if they exist)
  for (let i = 0; i < 3; i++) {
    const index = (activeIndex + i) % teamMembers.length;
    visibleMembers.push(teamMembers[index]);
  }

  return (
    <section className="py-20 bg-black" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our dedicated team members work tirelessly to design, build, and program our competition robots while promoting
            STEM education and teamwork.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/40 border-red-900/30 text-white hover:bg-black/60 hover:text-red-500"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/40 border-red-900/30 text-white hover:bg-black/60 hover:text-red-500"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Team Member Cards */}
          <div className="flex flex-wrap justify-center gap-6 py-8 px-12">
            {visibleMembers.map((member, index) => (
              <div
                key={member.id}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Card className="overflow-hidden bg-gray-900 border-red-900/20 h-full flex flex-col transition-transform hover:scale-105 duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x300?text=Team+Member";
                      }}
                    />
                    <div className="absolute bottom-0 left-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-red-500 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-b from-gray-900 to-black">
                    <p className="text-gray-300 mb-4">{member.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-red-600 w-6" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold text-white mb-4">We're Recruiting New Members!</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Want to be part of the Royal Robotics Team? If yes, you are in the right place!
            Join us and develop skills in engineering, programming, design, and teamwork.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
