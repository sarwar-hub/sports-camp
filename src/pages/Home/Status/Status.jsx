
const Status = () => {
    return (
        <div className="section">
            <div className="stats w-full  stats-vertical lg:stats-horizontal shadow bg-dark rounded-none">

                <div className="stat place-items-center">
                    <div className="stat-title text-4xl text-light">Istructors</div>
                    <div className="stat-value text-7xl text-sec">22</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-4xl text-light">Students</div>
                    <div className="stat-value text-7xl text-sec">433</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-4xl text-light">Courses</div>
                    <div className="stat-value text-7xl text-sec">54</div>
                </div>

            </div>
        </div>
    );
};

export default Status;