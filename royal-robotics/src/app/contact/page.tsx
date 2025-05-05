"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="royal-gradient min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Reach out to us for any of your inquiries by using any of the 3 following methods:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-white">First Name</label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-white">Last Name</label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white">Subject</label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message here..."
                        className="bg-white/10 border-red-900/20 text-white placeholder:text-gray-400 min-h-[150px]"
                      />
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700 w-full">
                      Submit <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-200 mb-8">
                  Have questions or want to get involved? Reach out to us using any of the methods below.
                  We'd love to hear from you!
                </p>
              </div>

              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-300 mt-1">Royalrobotics9562@hotmail.com</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Have questions or want to collaborate? Reach out to us via email for inquiries,
                        partnerships, or general information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-300 mt-1">School Number: (905) - 875 - 0124</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Need to speak with a team member? Call us for quick assistance regarding competitions,
                        sponsorships, or events.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Location</h3>
                      <p className="text-gray-300 mt-1">1120 Main St E, Milton, ON L9T 6H7</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Visit our robotics lab to see our team in action! We're based at Bishop Reding Secondary School,
                        working on cutting-edge projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.6283792476953!2d-79.849766!3d43.32018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b7223e5e6b8d1%3A0x5e4e287da7b60291!2sBishop%20P.%20F.%20Reding%20Catholic%20Secondary%20School!5e0!3m2!1sen!2sca!4v1709669294686!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
