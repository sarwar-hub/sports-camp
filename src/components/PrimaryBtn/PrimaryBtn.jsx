
const PrimaryBtn = ({children}) => {
    return (
        
        <button className="px-5 py-2 border-[1px] border-deepDark text-deepDark dark:border-light dark:text-light bg-transparent hover:text-sec hover:border-sec dark:hover:text-sec dark:hover:border-sec transition">{children}</button>
        
    );
};

export default PrimaryBtn;