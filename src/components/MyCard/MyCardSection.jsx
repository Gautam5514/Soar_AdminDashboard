
const Card = () => {
    return (
        <div className="grid-one-item grid grid-cols-1">
            <h3 className="text-black text-xl font-semibold mb-4 mt-5">My Cards</h3>
            <div className="grid-title bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg p-4 flex justify-between items-center">
                <div className="grid-content p-4 flex flex-col">
                    <p className="text-gray-400 text-base">Balance</p>
                    <div className="lg-value text-2xl font-semibold text-white mt-2 mb-4">
                        $22,000
                    </div>
                    <div className="card-wrapper flex justify-between items-center">
                        <span className="card-pin-hidden text-4xl text-white font-bold">**** **** **** </span>
                        <span className="text-white text-lg">1234</span>
                    </div>
                    <div className="card-logo-wrapper flex justify-between items-center mt-4">
                        <div className="text-gray-400 text-sm">
                            <p className="mb-1">Expires</p>
                            <p>12/22</p>
                        </div>
                        <div className="card-logo flex items-center">
                            <div className="chip-icon">{/* Add chip icon here */}</div>
                            <div className="logo-shape1 rounded-full bg-gray-500 w-8 h-8 mr-0 opacity-1" style={{ zIndex: 1 }}></div>
                            <div className="logo-shape2 rounded-full bg-gray-400 w-8 h-8 ml-[-10px] opacity-1" style={{ zIndex: 0 }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;