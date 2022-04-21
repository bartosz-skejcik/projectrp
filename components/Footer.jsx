function Footer() {
  return (
    <footer class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-around w-full text-lg font-semibold py-6">
      <section class="flex flex-row items-center justify-center space-x-2 font-semibold text-gray-200">
        <img src="/logo.png" alt="Logo" className="w-6" />
        <h2>Copyright ©FlameCode - 2022</h2>
      </section>
      <h1 className="uppercase text-gray-200 font-semibold">
        website designed by{" "}
        <a className="text-orange-500" href="https://discord.gg/EhVVXuBVTQ">
          flamecode
        </a>
      </h1>
    </footer>
  );
}

export default Footer;
