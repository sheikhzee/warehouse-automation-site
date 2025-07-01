import React from 'react';
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-900 text-white p-6 text-center text-2xl font-bold">
        Smart Warehouse Automation
      </header>

      <main className="p-8 space-y-16">

        {/* Hero Section */}
        <section className="text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Smarter Warehouses Start Here
          </motion.h1>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We provide cutting-edge automation solutions to optimize warehouse operations, reduce manual labor, and improve overall efficiency.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Explore Our Services
          </motion.button>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
          <p className="max-w-3xl mx-auto mb-8 text-center">
            From inventory tracking to intelligent robotic systems, our services are designed to transform traditional warehouses into high-performing automated hubs. We tailor every solution to the specific needs of your facility.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.li
              className="p-4 bg-white rounded shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p>Real-time stock visibility, smart alerts, and error-free replenishment processes to ensure nothing falls through the cracks.</p>
            </motion.li>

            <motion.li
              className="p-4 bg-white rounded shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">Robotic Handling</h3>
              <p>Deploy autonomous robots for picking, sorting, packing, and transporting goods throughout your facility.</p>
            </motion.li>

            <motion.li
              className="p-4 bg-white rounded shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">WMS Integration</h3>
              <p>Seamless connection of automation hardware with your existing warehouse management system for unified control.</p>
            </motion.li>
          </ul>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
          <p className="mb-4">
            Founded by a team of engineers, logistics experts, and software developers, Smart Warehouse Automation brings decades of combined experience in building intelligent logistics ecosystems.
          </p>
          <p className="mb-4">
            We work with small and large businesses alike, customizing automation strategies that scale with your growth. Our mission is to make high-tech efficiency accessible to every warehouse.
          </p>
          <p>
            Whether you're looking to start small or overhaul your entire system, we help you plan, implement, and evolve — one smart step at a time.
          </p>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="mb-4">Want to explore how automation can benefit your warehouse? Reach out for a free consultation.</p>
          <button className="mt-2 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
            Contact Us
          </button>
        </section>

      </main>

      <footer className="bg-blue-900 text-white text-center p-4 mt-16">
        &copy; {new Date().getFullYear()} SmartWarehouse Solutions
      </footer>
    </div>
  );
}
