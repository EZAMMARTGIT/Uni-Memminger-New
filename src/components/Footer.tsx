import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Background with blur - matching header */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#112240]/95 to-[#0A192F]/95 backdrop-blur-xl border-t border-cyan-500/20" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-75" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 border border-cyan-300/30">
                  <span className="text-white">UM</span>
                </div>
              </div>
              <div>
                <h3 className="leading-none text-white">UNI-MEMMINGER</h3>
                <p className="text-[12px] text-cyan-400 leading-none mt-1">Industrial Knitting Systems</p>
              </div>
            </div>
            <p className="text-[14px] text-gray-300 max-w-sm">
              Leading manufacturer of circular knitting machines and belt division systems. 
              Delivering precision engineering and innovation since our founding.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Systems</h4>
            <ul className="space-y-2 text-[14px] text-gray-300">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Main Machine System</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Yarn Feeding & Monitoring</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Knitting Core System</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Transmission System</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Electrical & Control</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-[14px]">
              <li className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@uni-memminger.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Industrial District, Manufacturing Zone</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[14px] text-gray-300">
              © 2025 UNI-MEMMINGER. All rights reserved. V5 Global Edition.
            </p>
            <p className="text-[13px] text-gray-400">
              Powered by EZAM International Group
            </p>
          </div>
          <div className="flex gap-6 text-[14px] text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
}
