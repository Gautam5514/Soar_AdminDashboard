import "./ContentMain.css";
import MyCardsSection from "../MyCard/MyCardSection";
import Transactions from "../Transactions/Transactions";
import QuickTransfer from "../QuickTransfer/QuickTransfer";

import ExpenseStatistics from "../ExpenseStatics/ExpenseStatics"
import BalanceHistoryChart from "../BalanceHistory/BalanceHistory";
import WeeklyActivityChart from "../WeeklyActiveChart/WeeklyActiveCharts";


const ContentMain = () => {
    return (
        <div className="main-content-holder">
            <div className="content-grid-one">
                <MyCardsSection />
                
                <Transactions />
                {/* <Report /> */}
            </div>
            <div className="content-grid-two">
                {/* <Budget /> */}
                <div className="grid-two-item">
                    <div className="subgrid-two">
                        < WeeklyActivityChart />


                        <QuickTransfer />
                    </div>
                </div>

                <div className="grid-two-item">
                    <div className="subgrid-two">
                        <ExpenseStatistics />
                        <div className="container mx-auto">
                            <BalanceHistoryChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentMain
