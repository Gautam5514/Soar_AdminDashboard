import React, { useState } from "react";

const QuickTransfer = () => {
    const [amount, setAmount] = useState(""); // Input state for transfer amount

    // Sample contact data
    const contacts = [
        {
            id: 1,
            name: <b>Livia Bator</b>,
            role: <b>CEO</b>,
            image: "https://via.placeholder.com/50", // Replace with real image links
        },
        {
            id: 2,
            name: "Randy Press",
            role: "Director",
            image: "https://via.placeholder.com/50", // Replace with real image links
        },
        {
            id: 3,
            name: "Workman",
            role: "Designer",
            image: "https://via.placeholder.com/50", // Replace with real image links
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            {/* Header */}
            <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Transfer</h2>

            {/* Contacts List */}
            <div className="flex gap-0.5 items-center justify-between mb-6">
                {contacts.map((contact) => (
                    <div key={contact.id} className="flex flex-col items-center space-y-1">
                        <img
                            src={contact.image}
                            alt={contact.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                            {contact.name}
                        </span>
                        <span className="text-xs text-gray-500">{contact.role}</span>
                    </div>
                ))}
                {/* Arrow */}
                <button className="ml-3">
                    <span className="text-2xl text-gray-400 hover:text-black">&gt;</span>
                </button>
            </div>

            {/* Transfer Section */}
            <div className="flex items-center space-x-2">
                <input
                    type="number"
                    placeholder="Write Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="w-1/3 bg-black text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-800">
                    Send
                    <span className="ml-2">✈️</span>
                </button>
            </div>
        </div>
    );
};

export default QuickTransfer;
