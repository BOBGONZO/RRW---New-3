"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Download, Award } from "lucide-react";
import Image from "next/image";

export default function DonatePage() {
  return (
    <main className="royal-gradient min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Donations</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our project is quite large, and with all works of art we need funds to make it.
              Sponsors will get different plaques and benefits depending on the amount of
              money they donate.
            </p>
            <p className="text-xl text-gray-200 mt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Scroll down to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-red-900/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 py-3 px-12 border border-red-900/20 rounded-xl bg-red-950/30 animate-fade-in inline-block">
                Types of Donations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="donation-bronze rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center justify-center h-16 mb-4">
                  <Award className="h-10 w-10 text-white/90" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Bronze</h3>
                <p className="mb-6 opacity-90">This plaque is for sponsors who donate $100+</p>
                <div className="flex justify-center mt-6">
                  <span className="donation-tier-dollar">$</span>
                </div>
              </div>

              <div className="donation-silver rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center justify-center h-16 mb-4">
                  <Award className="h-10 w-10 text-white/90" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Silver</h3>
                <p className="mb-6 opacity-90">This plaque is for sponsors who donate $1000+</p>
                <div className="flex justify-center mt-6">
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                </div>
              </div>

              <div className="donation-gold rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center justify-center h-16 mb-4">
                  <Award className="h-10 w-10 text-white/90" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Gold</h3>
                <p className="mb-6 opacity-90">This plaque is for sponsors who donate $2500+</p>
                <div className="flex justify-center mt-6">
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                </div>
              </div>

              <div className="donation-diamond rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center justify-center h-16 mb-4">
                  <Award className="h-10 w-10 text-white/90" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Diamond</h3>
                <p className="mb-6 opacity-90">This plaque is for sponsors who donate $4500+</p>
                <div className="flex justify-center mt-6">
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                </div>
              </div>

              <div className="donation-ruby rounded-xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 col-span-1 sm:col-span-2 lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-center h-16 mb-4">
                  <Award className="h-10 w-10 text-white/90" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ruby</h3>
                <p className="mb-6 opacity-90">This plaque is for sponsors who donate $7500+</p>
                <div className="flex justify-center mt-6">
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                  <span className="donation-tier-dollar">$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-red-900/20 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Donation Information</h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-white w-full max-w-4xl">
                <img
                  src="/images/donation-info.jpg"
                  alt="Donation Information"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-3xl font-bold text-white mb-6">What is First Robotics?</h2>
              <p className="text-gray-200 mb-4">
                Support Bishop Reding's FIRST Robotics Team 9562 and help students bring their passion for robotics to life!
                Your generous donation will go directly toward funding essential resources such as competition fees, materials,
                tools, and technology that allow our team to design, build, and program innovative robots.
              </p>
              <p className="text-gray-200 mb-4">
                With your support, students will have the opportunity to develop critical STEM skills, collaborate in a
                competitive environment, and gain hands-on experience in engineering and problem-solving.
              </p>
              <p className="text-gray-200 mb-6">
                Making a donation is quick and easy! Simply visit the link by clicking the button below and select "Make a Donation."
                Choose Bishop Reding Secondary School from the list, enter your desired donation amount, and in the
                "Message to School Board" section, be sure to write "BR FIRST ROBOTICS TEAM 9562 - YOUR COMPANY NAME"
                to ensure your contribution directly benefits our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://hcdsb.schoolcashonline.com/Fee/Index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto text-base">
                    Visit Donation Site! <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <a
                  href="https://jmp.sh/iUQ2NiXm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/20 w-full sm:w-auto text-base">
                    Download Full Donation PDF <Download className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-in-up">
              <img
                src="/images/robot-competition.jpg"
                alt="FIRST Robotics Competition"
                className="rounded-lg shadow-xl border border-red-900/20 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
