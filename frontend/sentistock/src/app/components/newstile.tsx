//Card/ Stock News Tile Component
//interface setup
interface NewsTileProps {
  title: string;
  article_link: string;
  img_src_link: string;
};

//component setup
const NewsTile: React.FC<NewsTileProps> = ({title, article_link, img_src_link}) => {
  function directClick() {
    window.open(article_link, "_blank"); // use this instead to open in new tab (better UX)
  };
  return (
    //feel free to play around with the code in className, this is tailwindCSS and is used to design the button!
    <button onClick={directClick} 
    className="flex-1 items-center space-x-2 p-2 bg-slate-100 shadow-md rounded-lg border-2-transparent 
    hover:bg-slate-200 hover:border-[#adc178] transition">
      <img
        src= {img_src_link}
        alt="Stock news button"
        width={20}
        height={20}
        className = "opacity-50 hover:opacity-25 hover:backdrop-blur-xs-grayscale"
      />
      <span className="text-left-gray-900 font-medium">{title}</span>
    </button>
  );
};
export default NewsTile;


