import { useState } from "react";
import { iconsImgs, personsImgs } from "../../utils/images";
const QuickTransfer = () => {
    const [amount, setAmount] = useState(""); // Input state for transfer amount

    // Sample contact data
    const contacts = [
        {
            id: 1,
            name: <b>Livia Bator</b>,
            role: <b>CEO</b>,
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

        <div className="p-6 bg-white rounded-xl w-[45%] h-[300px] max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            {/* Header */}

            {/* Contacts List */}
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6 mt-2">
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
            <div className="flex mt-3 flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <span className="text-sm w-[115px]">Write Amount</span>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="w-full sm:w-1/3 bg-black text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-800">
                    Send
                    <img src={iconsImgs.plane} alt="plane icon" className="ml-2 w-4 h-4" />
                </button>
            </div>
        </div>

    );
};

export default QuickTransfer;
