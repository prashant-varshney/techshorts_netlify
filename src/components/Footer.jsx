const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='Footer'>
      <p>&copy; {currentYear} &minus; by Prashant Varshney</p>
    </footer>
  );
};

export default Footer;
