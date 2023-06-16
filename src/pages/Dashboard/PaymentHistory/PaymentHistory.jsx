import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useEnrolled from "../../../hooks/useEnrolled";
import HistoryRow from "./HistoryRow/HistoryRow";

const PaymentHistory = () => {
    // selected courses
    const [enrolledCourses] = useEnrolled();
   
    return (
        <div>
            <Helmet><title>Payment History | Sports Camp</title></Helmet>

            <SectionTitle>Payment History</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-deepDark dark:text-light">
                            <th>SL</th>
                            <th>Course</th>
                            <th>Amount</th>
                            <th>time</th>
                            <th>trxID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses?.map((course, index) => <HistoryRow key={course?._id} course={course} index={index}></HistoryRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;