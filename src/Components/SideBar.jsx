const SideBar = () => {
  return (
    <div className="flex flex-col  absolute right-4 justify-between gap-5">
      <a href="https://wa.me/918939353360" target="_blank" rel="noreferrer">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/ios-glyphs/60/whatsapp.png"
          alt="whatsapp"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/adithyan-sivaraman-610a7222/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/material/48/linkedin--v1.png"
          alt="linkedin--v1"
        />
      </a>
      <a
        href="https://twitter.com/adithyansivaram"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/material/48/twitter--v2.png"
          alt="twitter--v2"
        />
      </a>
    </div>
  );
};
export default SideBar;
