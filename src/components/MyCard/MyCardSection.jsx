import React from 'react';

const MyCardsSection = () => {
    const cards = [
        {
            balance: '$5,756',
            cardHolder: 'Eddy Cusuma',
            cardNumber: '3778 **** **** 1234',
            validThru: '12/22',
        },
        {
            balance: '$5,756',
            cardHolder: 'Eddy Cusuma',
            cardNumber: '3778 **** **** 1234',
            validThru: '12/22',
        },
    ];

    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">My Cards</h2>
            <div className="grid grid-cols-2 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-start"
                    >
                        <div className="text-white text-sm mb-2">Balance</div>
                        <div className="text-white text-lg font-semibold mb-4">{card.balance}</div>
                        <div className="text-white text-sm mb-2">CARD HOLDER</div>
                        <div className="text-white text-sm mb-2">{card.cardHolder}</div>
                        <div className="text-white text-sm mb-2">VALID THRU</div>
                        <div className="text-white text-sm mb-2">{card.validThru}</div>
                        <div className="text-white text-sm">{card.cardNumber}</div>
                        <div className="mt-4 flex items-center">
                            <div className="w-8 h-4 bg-gray-500 rounded-full"></div>
                            <div className="w-8 h-4 bg-gray-600 rounded-full ml-2"></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-blue-500 text-sm">See All</div>
        </div>
    );
};

export default MyCardsSection;