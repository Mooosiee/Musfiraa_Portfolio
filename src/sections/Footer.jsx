const Footer = () => {
  return (
    <footer className="pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex">
        <div className="social-icon">
          <a href="https://github.com/Mooosiee" target="_blank" rel="noopener noreferrer" className="w-1/2 h-1/2">
            <img src="/assets/github.svg" alt="github"  />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/musfiraa-arif-8573a728b" className="w-1/2 h-1/2" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"  /></a>
        </div>
        <div className="social-icon">
          <a href="https://leetcode.com/u/musfiraa/" className="w-1/2 h-1/2" target="_blank" rel="noopener noreferrer">
            <img src="/assets/leetcode.png" alt="Leetcode"  /></a>
        </div>
      </div>

      <p className="text-white-500"> Made with ❤️ By Musfiraa</p>
    </footer>
  );
};

export default Footer;