"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Clock,
  Compass,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const mapUrl = siteConfig.contact.location.googleMapsUrl;
  const embedUrl = siteConfig.contact.location.embedMapUrl;
  const waNumber = siteConfig.contact.whatsappNumber || "919999999999";
  const waMessage = encodeURIComponent(
    siteConfig.contact.whatsappPromptMessage ||
      "Hello, I would like to visit your workshop to discuss a custom woodwork commission."
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <section
      id="contact"
      aria-label="Workshop Location and Direct Visit"
      className="py-24 sm:py-32 md:py-36 bg-[#171513] text-[#F7F3EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Atelier Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeading
                number="10"
                label="Visit & Direct Contact"
                title="Visit our workshop in person."
                subtitle="We invite patrons, architects, and families directly to our workshop. Meet the artisan, inspect live wood grains, and discuss your temple mandapam or custom carving face-to-face."
                theme="dark"
                className="mb-8 sm:mb-10"
              />

              {/* Atelier / Contact Details */}
              <div className="space-y-6 pt-6 border-t border-[#E9DFD0]/15">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#23201D] text-[#B18A52] border border-[#E9DFD0]/10 shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="label-editorial text-[9px] text-[#B18A52] block mb-1">
                      Workshop & Atelier Address
                    </span>
                    <p className="font-serif text-lg text-[#F7F3EC] leading-snug">
                      {siteConfig.contact.location.workshop}
                    </p>
                    <p className="text-sm text-[#E9DFD0]/85 mt-1 leading-relaxed">
                      {siteConfig.contact.location.address}
                    </p>
                    <p className="text-xs text-[#E9DFD0]/65 mt-0.5">
                      {siteConfig.contact.location.city},{" "}
                      {siteConfig.contact.location.state} —{" "}
                      {siteConfig.contact.location.postalCode},{" "}
                      {siteConfig.contact.location.country}
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded bg-[#23201D] border border-[#E9DFD0]/10 text-[11px] font-mono text-[#B18A52]">
                      <Compass size={12} />
                      <span>{siteConfig.contact.location.coordinates}</span>
                    </div>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#23201D] text-[#B18A52] border border-[#E9DFD0]/10 shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="label-editorial text-[9px] text-[#B18A52] block mb-1">
                      Visiting Hours
                    </span>
                    <p className="text-sm font-medium text-[#F7F3EC]">
                      Monday – Saturday: 9:00 AM – 7:30 PM
                    </p>
                    <p className="text-xs text-[#E9DFD0]/60 mt-0.5">
                      Sunday: By prior telephonic appointment
                    </p>
                  </div>
                </div>

                {/* Direct Phone / Contact */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#23201D] text-[#B18A52] border border-[#E9DFD0]/10 shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="label-editorial text-[9px] text-[#B18A52] block mb-1">
                      Direct Telephone & WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-base font-mono font-medium text-[#F7F3EC] hover:text-[#B18A52] transition-colors inline-block tracking-wide"
                    >
                      {siteConfig.contact.displayPhone}
                    </a>
                    <p className="text-xs text-[#E9DFD0]/60 mt-0.5">
                      Direct phone and WhatsApp line to the artisan. Prior notice appreciated before in-person visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note about bespoke in-person experience */}
            <div className="mt-10 p-5 bg-[#23201D] border border-[#E9DFD0]/10 text-xs text-[#E9DFD0]/70 leading-relaxed">
              <div className="flex items-center gap-2 mb-1.5 text-[#B18A52] font-semibold">
                <Sparkles size={14} />
                <span>Why Visit In Person?</span>
              </div>
              <p>
                Seeing wood carving in person allows you to touch seasoned teakwood grains, evaluate authentic relief depth under natural light, and discuss exact room dimensions directly with the craftsman without the delays of digital forms.
              </p>
            </div>
          </div>

          {/* Right Column: Workshop Location Map Card (Replaced Inquiry Form) */}
          <div className="lg:col-span-7 bg-[#23201D] border border-[#E9DFD0]/15 p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#E9DFD0]/10 mb-6 gap-3">
                <div>
                  <span className="label-editorial text-[#B18A52] block mb-0.5">
                    Interactive Workshop Map
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#F7F3EC] font-light">
                    Find Our Workshop in Chennai
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171513] border border-[#E9DFD0]/15 text-[11px] text-[#E9DFD0]/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono">Direct Visits Welcome</span>
                </div>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#171513] border border-[#E9DFD0]/20 overflow-hidden shadow-inner">
                <iframe
                  title="Artisan Woodcraft Workshop Location Map"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                />

                {/* Subdued map corner overlay pill with coordinates */}
                <div className="absolute top-3 left-3 bg-[#171513]/90 backdrop-blur-sm border border-[#E9DFD0]/20 px-3 py-1 text-[11px] font-mono text-[#E9DFD0]/90 shadow-md flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#B18A52]" />
                  <span>Jyothi Nagar, Annanur (Ambattur)</span>
                </div>
              </div>

              {/* Location Highlights & Nearby Landmarks */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E9DFD0]/70">
                <div className="p-3 bg-[#171513]/70 border border-[#E9DFD0]/10">
                  <span className="text-[#B18A52] font-semibold block mb-0.5">
                    Suburban Transit
                  </span>
                  Conveniently situated near Annanur Railway Station & Ambattur Industrial Zone.
                </div>
                <div className="p-3 bg-[#171513]/70 border border-[#E9DFD0]/10">
                  <span className="text-[#B18A52] font-semibold block mb-0.5">
                    Road Access
                  </span>
                  Smooth connectivity via Chennai Bypass & CTH (Chennai–Tiruvallur High) Road.
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: Open Maps, Call & WhatsApp */}
            <div className="mt-8 pt-6 border-t border-[#E9DFD0]/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B18A52] hover:bg-[#9A6A3F] text-[#F7F3EC] text-xs uppercase tracking-[0.14em] font-medium py-3.5 px-3 flex items-center justify-center gap-1.5 transition-colors shadow-sm focus-visible:outline-none text-center"
              >
                <Navigation size={15} />
                <span>Open Maps</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="bg-[#171513] hover:bg-[#171513]/60 text-[#F7F3EC] border border-[#E9DFD0]/25 text-xs uppercase tracking-[0.14em] font-medium py-3.5 px-3 flex items-center justify-center gap-1.5 transition-colors focus-visible:outline-none text-center"
              >
                <Phone size={15} className="text-[#B18A52]" />
                <span>Call Phone</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171513] hover:bg-[#171513]/60 text-[#F7F3EC] border border-[#E9DFD0]/25 text-xs uppercase tracking-[0.14em] font-medium py-3.5 px-3 flex items-center justify-center gap-1.5 transition-colors focus-visible:outline-none text-center"
              >
                <MessageSquare size={15} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
