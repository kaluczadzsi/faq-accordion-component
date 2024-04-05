const Header = () => {
  return (
    <picture>
      <source
        className="w-full"
        media="(min-width:465px)"
        srcSet="src\assets\images\background-pattern-desktop.svg"
      />
      <img
        className="w-full object-cover"
        src="src\assets\images\background-pattern-mobile.svg"
        alt="background"
      />
    </picture>
  );
};

export default Header;
