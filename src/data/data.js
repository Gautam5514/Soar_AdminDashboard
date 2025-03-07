import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

// iconsImgs should be defined as required in your code
export const navigationLinks = [
    { id: 1, title: 'Dashboard', image: iconsImgs.home, path: '/' },
    { id: 2, title: 'Transactions', image: iconsImgs.plane },
    { id: 3, title: 'Account', image: iconsImgs.user },
    { id: 4, title: 'Investments', image: iconsImgs.budget },
    { id: 5, title: 'Credit Cards', image: iconsImgs.wallet },
    { id: 6, title: 'Loans', image: iconsImgs.bills },
    { id: 7, title: 'Services', image: iconsImgs.report },
    { id: 8, title: 'My Privileges', image: iconsImgs.wallet },
    { id: 10, title: 'Settings', image: iconsImgs.gears, path: '/setting' }
];


export const transactions = [
    {
        id: 11,
        name: "Deposite from my card",
        image: personsImgs.person_four,
        date: "28 january 2021",
        amount: -850
    },
    {
        id: 12,
        name: "Deposite paypal",
        image: personsImgs.person_three,
        date: "25 January 2021",
        amount: 2500
    },
    {
        id: 13,
        name: "Jemi Wilson",
        image: personsImgs.person_two,
        date: "21 January 2021",
        amount: 5400
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19,
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20,
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21,
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22,
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23,
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]