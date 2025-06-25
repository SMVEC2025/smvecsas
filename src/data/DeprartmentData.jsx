import { 
  FaBriefcase, FaChartLine, FaCoins, FaFileSignature, FaGavel,
  FaUserTie, FaChartBar, FaLaptopCode, FaDesktop, FaKeyboard, FaBrain,
  FaAtom, FaMicroscope, FaBookOpen, FaUsers, FaDna, FaLeaf,
  FaAppleAlt, FaUtensils, FaVideo, FaNewspaper
} from 'react-icons/fa';

export const DepartmentData = [
    {
        id: 1,
        department: "commerce",
        icons: <FaFileSignature />,
        linkurl:"commerce",
        programs: {
            ug: [
                {
                    id: "11",
                    name: "B. Com. General"
                },
                {
                    id: "12",
                    name: "B. Com. Accounting and Finance"
                },
                {
                    id: "13",
                    name: "B. Com. Professional Accounting"
                },
                {
                    id: "14",
                    name: "B. Com. Cost and Management Accounting"
                },
                {
                    id: "15",
                    name: "B. Com. Corporate Secretaryship"
                },
                {
                    id: "16",
                    name: "B. Com. Computer Applications"
                },
            ],
            pg: [
                {
                    id: "17",
                    name: "Master of Commerce (M.Com)"
                }
            ]
        }
    },
    {
        id: 2,
        department: "computational studies",
        icons: <FaFileSignature />,
        linkurl:"computational-studies",
        programs: {
            ug: [
                {
                    id: "21",
                    name: "B.Sc. Computer Science"
                },
                {
                    id: "22",
                    name: "B.Sc. Data Science and Analytics"
                },
                {
                    id: "23",
                    name: "B.C.A."
                },
            ],
            pg: [
                {
                    id: "24",
                    name: "M.Sc. Computer Science"
                }
            ]
        }
    },
    {
        id: 3,
        department: "business studies",
        icons: <FaFileSignature />,
        linkurl:"business-studies",
        programs: {
            ug: [
                {
                    id: 31,
                    name: "B.B.A. (General) "
                },
                {
                    id: 31,
                    name: "B.B.A. Fintech and Digital Marketing"
                },
                {
                    id: 33,
                    name: "B.C.A."
                },
            ],

        },

    },
    {
        id: 4,
        department: "Physics",
        icons: <FaFileSignature />,
        linkurl:"physics",
        programs: {
            ug: [
                {
                    id: 41,
                    name: "B. Sc. Physics"
                }
            ],
            pg: [
                {
                    id: 42,
                    name: "M.Sc. Physics"
                }
            ]
        }
    },
    {
        id: 5,
        department: "Chemistry",
        icons: <FaFileSignature />,
        linkurl:"chemistry",
        programs: {
            ug: [
                {
                    id: 51,
                    name: "B. Sc. Chemistry"
                }
            ],
            pg: [
                {
                    id: 52,
                    name: "M.Sc. Chemistry"
                }
            ]
        }
    },
    // {
    //     id: 6,
    //     department: "Mathematics",
    //     icons: <FaFileSignature />,
    //     linkurl:"mathematics",
    //     programs: {
    //         ug: [
    //             {
    //                 id: 61,
    //                 name: "B. Sc. Mathematics"
    //             }
    //         ],

    //     }
    // },
    // {
    //     id: 7,
    //     department:"tamil",
    //     icons: <FaFileSignature />,
    //     linkurl:"tamil",
    //     programs: {
    //         ug: [
    //             {
    //                 id: 71,
    //                 name: "B.A. Tamil"
    //             }
    //         ],

    //     }
    // },
    // {
    //     id: 8,
    //     department: "English",
    //     icons: <FaFileSignature />,
    //     linkurl:"english",
    //     programs: {
    //         ug: [
    //             {
    //                 id: 81,
    //                 name: "B.A. English"
    //             }
    //         ],

    //     }
    // },
    {
        id: 9,
        department: "French",
        icons: <FaFileSignature />,
        linkurl:"french",
        programs: {
            ug: [
                {
                    id: 91,
                    name: "B.A. French"
                }
            ],

        }
    },
    // {
    //     id: 10,
    //     department: "Bio Science",
    //     icons: <FaFileSignature />,
    //     linkurl:"bio-science",
    //     programs: {
    //         ug: [
    //             {
    //                 id: 101,
    //                 name: "B. Sc. Bio Technology"
    //             },
    //             {
    //                 id: 102,
    //                 name: "B. Sc. Micro Biology"
    //             }
    //         ],

    //     }
    // },
    {
        id: 11,
        department: "Food Science",
        icons: <FaFileSignature />,
        linkurl:"food-science",
        programs: {
            ug: [
                {
                    id: 111,
                    name: "B.Sc. Nutrition and Dietetics"
                }

            ],

        }
    },
    {
        id: 12,
        department: "Media Studies",
        icons: <FaFileSignature />,
        linkurl:"media-studies",
        programs: {
            ug: [
                {
                    id: 121,
                    name: "B.Sc. Visual Communication"
                },
                {
                    id: 122,
                    name: "B.A. Journalism and Mass Communication"
                }

            ],

        }
    },

]