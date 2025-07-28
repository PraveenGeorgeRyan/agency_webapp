import React from 'react';
import MaterialIcon from '../../../components/MaterialIcon';

const ContactUsHero: React.FC = () => (
  <section className="relative w-full pt-[76px] bg-gradient-to-b from-red-600 to-red-500 text-white overflow-hidden">
    <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center relative z-[1] gap-8 py-8 mx-auto">
      <div className="flex flex-col lg:flex-row sm:gap-16">
        <div className="flex flex-col gap-8 w-full lg:w-1/2 pt-8 sm:pt-0 justify-center text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-snug">Contact Us</h1>
          <div>
            <p className="mb-4">We simplify lead generation so you can focus on growing your business. Our internet marketing experts are always available to assist you with any of your issues, needs or requests. Even if you're just looking for some friendly advice, please don't hesitate to contact us or give us a call.</p>
            <p>You are under no obligation to make a purchase and we keep your personal information private and confidential. <a href="/privacy-policy" className="underline">View our privacy policy.</a></p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gray-50 w-full text-black">
            <p className="text-3xl font-bold md:mb-8">Get Started</p>
            <form>
              <div className="grid md:grid-cols-2 gap-x-4">
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">First & Last Name <span className="text-red-500">*</span></label><input type="text" placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label><input type="tel" placeholder="Phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label><input type="email" placeholder="yourmail@gmail.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label><input type="text" placeholder="Company Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                <div className="mb-4 md:col-span-2"><label className="block text-sm font-medium text-gray-700">Company Website <span className="text-red-500">*</span></label><input type="url" placeholder="website.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Inquiry Type <span className="text-red-500">*</span></label><select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"><option>Please Select</option></select></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">How Did You Hear About Us? <span className="text-red-500">*</span></label><select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"><option>Please Select</option></select></div>
                <div className="mb-4 md:col-span-2"><label className="block text-sm font-medium text-gray-700">Message</label><textarea placeholder="Your Message" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm h-24"></textarea></div>
              </div>
              <button type="submit" className="w-max block no-underline rounded-full bg-gradient-to-t from-red-600 to-red-500">
                <div className="group transition-all text-lg text-white font-bold px-7 py-3 flex items-center gap-2 rounded-full ease-in-out duration-300 shadow-xl hover:bg-black"> Submit <MaterialIcon className="relative -top-px">arrow_outward</MaterialIcon> </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUsHero;
