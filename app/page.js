"use client";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

export default function Home() {
  const clerk = useClerk();
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/header-logo.png"
              alt="SapiKu Logo"
              width={1000}
              height={1000}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Belanja</a>
            <a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Tentang</a>
            <a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Kontak</a>
            <SignedOut>
              <button
                onClick={() => clerk.openSignIn({})}
                className="bg-[#E56F17] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e55817] transition-colors"
              >
                Login
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-row space-x-5 items-center">
            <SignedOut>
              <button
                onClick={() => clerk.openSignIn({})}
                className="bg-[#E56F17] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e55817] transition-colors"
              >
                Login
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-5 pt-8">
        <div className="bg-[#cccccc] rounded-2xl p-4 lg:p-16 text-white relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full mb-8 lg:mb-0">
              <h1 className="text-sm sm:text-lg font-medium text-black mb-2 mt-20 text-center lg:text-left font-poppins relative z-10">
                Pusat Daging Murah Jakarta
              </h1>
              <h2 className="text-2xl sm:text-4xl lg:text-7xl font-bold text-black mb-2 text-center lg:text-left font-poppins relative z-10">
                Aneka Daging
              </h2>
              <p className="text-3xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 text-center lg:text-left font-montserrat relative z-10">
                SEGAR/FRESH
              </p>
              <div className="relative lg:absolute lg:top-20 xl:top-3 lg:right-0 z-0 mb-8">
                <Image
                  src="/sapiku-logo.png"
                  alt="SapiKu HD"
                  width={1000}
                  height={1000}
                  className="w-156 xl:w-192 h-auto"
                />
              </div>
              <div className="text-center lg:text-left mb-10">
                <button className="bg-[#E56F17] text-white px-8 py-3 rounded-full hover:bg-[#e55817] transition-colors">
                  Pesan Sekarang
                </button>
              </div>
              <div className="justify-end text-right hidden lg:block">
                <h3 className="text-xl font-bold text-black mb-4">SapiKu</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Kami menyediakan beragam aneka daging, mulai dari<br />
                  Daging Segar, Daging Beku, Daging Slice, Daging BBQ,<br />
                  Jeroan, Tetelan, Iga, dan produk penunjang lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container mx-auto px-5 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daging Beku */}
          <div className="bg-[#71C454] rounded-3xl p-8 text-white relative flex flex-col sm:flex-row lg:block">
            <div>
              <div className="lg:mt-30">
                <h3 className="text-lg font-normal relative z-10">Aneka</h3>
                <h4 className="text-3xl font-semibold relative z-10">Daging</h4>
                <p className="text-3xl sm:text-3xl font-black font-montserrat relative z-10">BEKU/FROZEN</p>
              </div>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors mt-5">
                Telusuri
              </button>
            </div>
            <div className="lg:absolute lg:top-[-50px] lg:right-[-50px] z-0">
              <Image
                src="/daging-beku.png"
                alt="Daging Beku"
                width={500}
                height={500}
                className="w-120 lg:w-100"
              />
            </div>
          </div>

          {/* Jeroan & Tetelan */}
          <div className="bg-[#E56F17] rounded-3xl p-8 text-white relative flex flex-col sm:flex-row items-center justify-center lg:block">
            <div>
              <div className="lg:mt-30">
                <h3 className="text-lg text-center sm:text-left font-normal relative z-10">Aneka</h3>
                <h4 className="text-3xl text-center sm:text-left font-semibold relative z-10">Jeroan &</h4>
                <p className="text-4xl text-center sm:text-left font-black text-white font-montserrat relative z-10">TETELAN</p>
              </div>
              <button className="bg-gray-800 text-gray-200 px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors mt-5 block mx-auto lg:mx-0">
                Telusuri
              </button>
            </div>
            <div className="lg:absolute lg:top-[-50px] lg:right-[-20px] z-0">
              <Image
                src="/jeroan-tetelan.png"
                alt="Jeroan & Tetelan"
                width={1000}
                height={1000}
                className="w-90 lg:w-100"
              />
            </div>
          </div>

          {/* Tulang Iga */}
          <div className="bg-[#cccccc] rounded-3xl p-5 text-black relative lg:col-span-1">
            <div className="lg:block flex flex-col sm:flex-row items-center h-full">
              <div className="lg:absolute lg:top-[-50px] lg:right-[-20px] z-0">
                <Image
                  src="/tulang-iga.png"
                  alt="Tulang Iga"
                  width={1000}
                  height={1000}
                  className="w-90 lg:w-100"
                />
              </div>
              <div className="lg:mt-30">
                <h3 className="text-lg font-normal relative z-10">Aneka</h3>
                <h4 className="text-3xl font-semibold relative z-10">Tulang Iga &</h4>
                <p className="text-4xl font-black text-white mb-6 font-montserrat relative z-10">TULANG SOP</p>
                <button className="bg-[#E56F17] text-white px-6 py-2 rounded-full text-sm hover:bg-[#e55817] transition-colors">
                  Telusuri
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 overflow-visible">
          {/* Produk Penunjang */}
          <div className="bg-[#cccccc] rounded-2xl p-6 text-black relative overflow-visible flex flex-col sm:flex-row justify-between items-center lg:block">
            <div>
              <h3 className="text-lg text-center sm:text-left font-medium relative z-10">Aneka</h3>
              <h4 className="text-2xl text-center sm:text-left font-bold relative z-10">Produk</h4>
              <p className="text-2xl text-center sm:text-left font-black text-white mb-4 font-montserrat relative z-10">PENUNJANG</p>
              <button className="bg-[#E56F17] text-white px-6 py-2 rounded-full text-sm hover:bg-[#e55817] transition-colors relative z-10 lg:mb-50 block mx-auto lg:mx-0">
                Telusuri
              </button>
            </div>
            <div className="lg:absolute -bottom-5 xl:-bottom-10 lg:-right-10 z-0">
              <Image
                src="/produk-penunjang.png"
                alt="Produk Penunjang"
                width={1000}
                height={1000}
                className="w-120 lg:w-150"
              />
            </div>
          </div>

          {/* Daging Slice */}
          <div className="bg-[#71C454] rounded-2xl p-6 text-white relative overflow-visible flex flex-col sm:flex-row items-center justify-center lg:block">
            <div className="lg:absolute -bottom-5 xl:-bottom-15 lg:-right-15 z-0">
              <Image
                src="/daging-slice.png"
                alt="Daging Slice"
                width={1000}
                height={1000}
                className="w-90 lg:w-120"
              />
            </div>
            <div>
              <h3 className="text-lg text-center sm:text-left font-normal relative z-10">Aneka</h3>
              <h4 className="text-2xl text-center sm:text-left font-semibold relative z-10">Daging</h4>
              <p className="text-3xl text-center sm:text-left font-black mb-4 font-montserrat relative z-10">SLICE</p>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors relative z-10 lg:mb-50 block mx-auto lg:mx-0">
                Telusuri
              </button>
            </div>
          </div>

          {/* Daging BBQ/Steak */}
          <div className="bg-[#E56F17] rounded-3xl p-6 text-white lg:col-span-2 overflow-visible relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-6 lg:mb-0 relative z-10 lg:mt-20">
                <h3 className="text-lg text-center lg:text-left font-medium">Aneka</h3>
                <h4 className="text-2xl text-center lg:text-left font-semibold">Daging</h4>
                <p className="text-3xl text-center lg:text-left font-black mb-6 font-montserrat">BBQ/STEAK</p>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors lg:mb-30 block mx-auto lg:mx-0">
                  Telusuri
                </button>
              </div>
              <div className="lg:absolute lg:-bottom-10 lg:-right-5 z-0">
                <Image
                  src="/daging-steak.png"
                  alt="Daging BBQ/Steak"
                  width={1000}
                  height={1000}
                  className="w-90 lg:w-120"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-5 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Kenapa Memilih Kami?</h2>
          <p className="text-gray-600">Lihat berbagai keunggulan yang kami tawarkan!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/delivery.svg"
                alt="Gratis Ongkir"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Gratis Ongkir</h3>
            <p className="text-gray-600 text-sm">
              Belanja hemat tanpa mikir ongkir, gratis ke seluruh area tertentu
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/guarantee.svg"
                alt="Sistem Pre-Order"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Sistem Pre-Order</h3>
            <p className="text-gray-600 text-sm">
              Cukup pesan hari ini, dan kami antar besok
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/support.svg"
                alt="Layanan Pelanggan 24/7"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Layanan Pelanggan 24/7</h3>
            <p className="text-gray-600 text-sm">
              Selalu sedia untuk melayani Anda kapan saja
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/icons/wallet.svg"
                alt="Harga & Kualitas Terjamin"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Harga & Kualitas Terjamin</h3>
            <p className="text-gray-600 text-sm">
              Dengan harga yang kompetitif untuk bisnis dan katering
            </p>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="container mx-auto px-5 py-16">
        <div className="bg-[#71C454] rounded-2xl p-8 lg:p-16 text-white relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-[70%] mb-8 lg:mb-0 relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left font-montserrat relative z-10">Discount 5%</h2>
              <h3 className="text-4xl lg:text-7xl xl:text-9xl font-black lg:leading-15 xl:leading-25 text-center lg:text-left tracking-tighter font-montserrat relative z-10">
                DAGING
                <span className="hidden lg:inline"><br /></span>
                <span className="inline lg:hidden"> </span>
                RENDANG
                <br />
                & SEMUR
              </h3>
              <p className="text-2xl font-semibold mb-8 text-center lg:text-left font-montserrat relative z-10">9 Nov to 31 Dec</p>
              <div className="lg:absolute lg:top-0 lg:right-0 lg:z-0">
                <Image
                  src="/sapiku-banner.png"
                  alt="SapiKu Banner"
                  width={1000}
                  height={1000}
                  className="w-120 xl:w-172 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-[30%] text-center lg:text-left">
              <h4 className="text-lg font-medium mb-2">Untuk Para Pelanggan Kami</h4>
              <h5 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Pesta Akhir Tahun</h5>
              <p className="text-base mb-6">
                Buat moment akhir tahun kamu dan keluarga menjadi lebih bermakna bersama
                SapiKu, Pusat Daging Murah Jakarta
              </p>
              <button className="bg-white text-red-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-5 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Produk Terbaik Kami</h2>
          <p className="text-gray-600">Pilih produk-produk terbaik yang kami tawarkan!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <Image
                src="/product-1.png"
                alt="Daging Segar/Fresh 1 kg"
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full text-xs font-bold">
                SALE
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Daging Segar/Fresh 1 kg</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">Rp145.000</span>
                <span className="text-black font-bold">Rp135.000</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <Image
                src="/product-2.png"
                alt="Daging Beku untuk Rendang 1 kg"
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full text-xs font-bold">
                SALE
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Daging Beku untuk Rendang 1 kg</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">Rp125.000</span>
                <span className="text-black font-bold">Rp112.500</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <Image
                src="/product-3.png"
                alt="Daging Beku untuk Semur 1 kg"
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full text-xs font-bold">
                SALE
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Daging Beku untuk Semur 1 kg</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">Rp120.000</span>
                <span className="text-black font-bold">Rp108.000</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative">
              <Image
                src="/product-4.png"
                alt="Tulangan Iga Kambing 1 kg"
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Tulangan Iga Kambing 1 kg</h3>
              <div className="mb-4">
                <span className="text-black font-bold">Rp120.000</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-5.png"
              alt="Daging Sliced Meat Teriyaki Fat 500 g"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Daging Sliced Meat Teriyaki Fat 500 g</h3>
              <span className="text-black font-bold">Rp67.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-6.png"
              alt="Tulangan Iga Sop Super 1 kg"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Tulangan Iga Sop Super 1 kg</h3>
              <span className="text-black font-bold">Rp90.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-7.png"
              alt="Tulangan Iga Shortrib 1 kg (Konro Bakar)"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Tulangan Iga Shortrib 1 kg (Konro Bakar)</h3>
              <span className="text-black font-bold">Rp120.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-8.png"
              alt="Hati Sapi 1 kg"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Hati Sapi 1 kg</h3>
              <span className="text-black font-bold">Rp50.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-9.png"
              alt="Varian Saus My Taste"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Varian Saus My Taste</h3>
              <span className="text-black font-bold">Rp23.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-10.png"
              alt="Varian Saus Kikkoman"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Varian Saus Kikkoman</h3>
              <span className="text-black font-bold">Rp28.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-11.png"
              alt="Udang Fresh 500 g"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Udang Fresh 500 g</h3>
              <span className="text-black font-bold">Rp55.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/product-12.png"
              alt="Cumi Ring 500 g"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-normal text-black mb-2">Cumi Ring 500 g</h3>
              <span className="text-black font-bold">Rp50.000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-5 py-16">
        <div className="bg-[#E56F17] rounded-2xl p-8 lg:p-16 text-white relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left font-montserrat">Gratis 100%</h2>
              <h3 className="text-4xl lg:text-7xl xl:text-8xl font-black lg:leading-15 xl:leading-20 text-center lg:text-left tracking-tighter font-montserrat">
                ONGKOS KIRIM
              </h3>
              <p className="text-2xl font-light mb-8 text-center lg:text-left font-montserrat">*Syarat & Ketentuan Berlaku</p>
            </div>
            <div className="mb-8 lg:w-1/3">
              <Image
                src="/hero-bg.png"
                alt="Background"
                width={1000}
                height={1000}
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="lg:w-1/3 text-center lg:text-left lg:ml-10">
              <h4 className="text-lg font-medium mb-2">Untuk Para Pelanggan Kami</h4>
              <h5 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Pesta Akhir Tahun</h5>
              <p className="text-base mb-6">
                Buat moment akhir tahun kamu dan keluarga menjadi lebih bermakna bersama
                SapiKu, Pusat Daging Murah Jakarta
              </p>
              <button className="bg-white text-red-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-5 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Berita Update</h2>
          <p className="text-gray-600">Cermati artikel-artikel seputar peternakan sapi dan dunia daging!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/blog-1.png"
              alt="Teknologi Peternakan Sapi"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">Teknologi Peternakan Sapi: Dari Sensor hingga AI</h3>
              <p className="text-gray-600 mb-4">
                Industri peternakan sapi kini memanfaatkan teknologi seperti sensor suhu tubuh, pemantauan GPS, dan kecerdasan buatan (AI)...
              </p>
              <a href="#" className="text-[#E56F17] font-medium hover:underline">Read more →</a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/blog-2.png"
              alt="Pakan Berkualitas"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">Pakan Berkualitas, Kunci Daging Sapi Premium</h3>
              <p className="text-gray-600 mb-4">
                Jenis dan kualitas pakan sangat memengaruhi rasa, tekstur, dan nilai gizi daging sapi. Artikel ini membahas pentingnya nutrisi...
              </p>
              <a href="#" className="text-[#E56F17] font-medium hover:underline">Read more →</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src="/blog-3.png"
              alt="Tren Konsumsi Daging Sapi"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-4">Tren Konsumsi Daging Sapi di Indonesia: Lokal vs Impor</h3>
              <p className="text-gray-600 mb-4">
                Permintaan daging sapi terus meningkat, tetapi Indonesia masih mengandalkan impor. Artikel ini mengulas data konsumsi...
              </p>
              <a href="#" className="text-[#E56F17] font-medium hover:underline">Read more →</a>
            </div>
          </div>

          <div className="relative rounded-2xl shadow-sm overflow-hidden border border-gray-100 h-96 bg-cover bg-center" style={{ backgroundImage: "url('/blog-4.png')" }}>
            {/* Black overlay with 40% opacity */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 p-8 text-white flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold mb-4">Sapi Ramah Lingkungan</h3>
              <p className="mb-6">
                Peternakan sapi sering dikaitkan dengan emisi gas rumah kaca, namun pendekatan berkelanjutan seperti rotasi...
              </p>
              <a href="#" className="text-white font-medium hover:underline">Read more →</a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-5 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[50fr_10fr_20fr_20fr] gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/header-logo.png"
                  alt="SapiKu Logo"
                  width={1000}
                  height={1000}
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-4">Pusat Daging Murah Jakarta</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 lg:pr-[50%]">
                Sapiku.id adalah pusat daging sapi murah dan berkualitas di Jakarta, menyediakan daging segar, beku, hingga produk peternakan untuk kebutuhan harian dan hari besar Anda.
              </p>

              {/* Social Media */}
              <div className="flex space-x-10">
                <a href="https://www.instagram.com/sapiku_ind/" target="_blank"
                  rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/footer_icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" target="_blank"
                  rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/footer_icons/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" target="_blank"
                  rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/footer_icons/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" target="_blank"
                  rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/footer_icons/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Belanja</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Tentang</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#E56F17] transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Lokasi</h4>
              <p className="text-gray-600 text-sm leading-relaxed text-justify lg:pr-[10%]">
                Gg. Swadaya 3 No.90, RT 003 / RW 006,
                Kel. Srengseng Sawah, Kec. Jagakarsa,
                Kota Jakarta Selatan, DKI Jakarta 12640
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-black mb-4">Contacts</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/footer_icons/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <p className="text-gray-600 text-sm">+62 822 9869 6842</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/footer_icons/mail.svg"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <p className="text-gray-600 text-sm">admin@sapiku.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 pb-4 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center lg:text-left mb-4 lg:mb-0">
              © 2025 Pusat Daging Murah. All Rights Reserved.
            </p>

            {/* WhatsApp Button */}
            <div className="fixed bottom-6 right-6">
              <a
                href="https://wa.me/6282298696842"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
