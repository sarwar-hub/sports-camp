import pageCoverBg from '../../assets/pageCover.jpg'
const PageCover = ({children}) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${pageCoverBg})` }}>
            <div className="hero-overlay bg-light/20"></div>
            <h1 className='text-light md:text-7xl text-4xl text-center font-semibold py-20'>{children}</h1>
        </div>
    );
};

export default PageCover;