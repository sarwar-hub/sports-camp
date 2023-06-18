import { Fade } from "react-awesome-reveal";

const Status = () => {
    return (
        <div className="">
            <Fade>
            <div className="stats w-full  stats-vertical lg:stats-horizontal shadow bg-light dark:bg-dark rounded-none">

                <div className="stat place-items-center">
                    <div className="stat-title text-4xl text-deepDark dark:text-light">Istructors</div>
                    <div className="stat-value text-7xl text-sec">22</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-4xl text-deepDark dark:text-light">Students</div>
                    <div className="stat-value text-7xl text-sec">433</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-4xl text-deepDark dark:text-light">Courses</div>
                    <div className="stat-value text-7xl text-sec">54</div>
                </div>

            </div>
            </Fade>
        </div>
    );
};

export default Status;