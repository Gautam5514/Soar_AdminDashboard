import { useState } from "react";
import { iconsImgs, personsImgs } from "../../utils/images";

const QuickTransfer = () => {
    const [amount, setAmount] = useState("");

    // Sample contact data
    const contacts = [
        {
            id: 1,
            name: "Livia Bator",
            role: "CEO",
            image: personsImgs.person_two, // Replace with real image links
        },
        {
            id: 2,
            name: "Randy Press",
            role: "Director",
            image: personsImgs.person_one, // Replace with real image links
        },
        {
            id: 3,
            name: "Workman",
            role: "Designer",
            image: personsImgs.person_three, // Replace with real image links
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-full mx-auto shadow-lg">
            {/* Header */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Transfer</h3>

            {/* Contacts List */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-between mb-6">
                {contacts.map((contact) => (
                    <div key={contact.id} className="flex flex-col items-center space-y-1 w-20">
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
                <button className="ml-3 hidden sm:block">
                    <span className="text-2xl text-gray-400 hover:text-black">&gt;</span>
                </button>
            </div>

            {/* Transfer Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="text-sm font-medium w-full sm:w-auto">Write Amount</span>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-800">
                    Send
                    <img src={iconsImgs.plane} alt="plane icon" className="ml-2 w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default QuickTransfer;
