import "./ContentMain.css";
import MyCardsSection from "../MyCard/MyCardSection";
import Transactions from "../Transactions/Transactions";
import QuickTransfer from "../QuickTransfer/QuickTransfer";

import ExpenseStatistics from "../ExpenseStatics/ExpenseStatics";
import BalanceHistoryChart from "../BalanceHistory/BalanceHistory";
import WeeklyActivityChart from "../WeeklyActiveChart/WeeklyActiveCharts";

const ContentMain = () => {
    return (
        <div className="main-content-holder">
            <div className="content-grid-one">
                <MyCardsSection />
                <MyCardsSection />
                <div>
                <h3 className="text-black text-xl font-semibold mb-10 mt-5">Recent Transaction</h3>
                <Transactions />
                </div>
            </div>

            <div className="seconddiv">
                <div className="flex mb-5 gap-5">
                    <WeeklyActivityChart />
                    <ExpenseStatistics />
                </div>
            </div>

            <div className="bottomdiv">
                <div className="flex gap-5 ">
                    <QuickTransfer />

                    <BalanceHistoryChart />
                </div>
            </div>
        </div>
    );
};

export default ContentMain;
