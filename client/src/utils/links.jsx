import React from 'react'



import { FaRegListAlt } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { FaRegNewspaper } from "react-icons/fa";

import { FaRegClipboard } from "react-icons/fa";


const links = [
    {
        id: 1,
        text: 'All Casepapers',
        path: '.',
        icon: <FaRegListAlt />
    },
    {
        id: 2,
        text: 'Add Casepaper',
        path: 'add-casepaper',
        icon: <FaWpforms />
    },
    {
        id: 3,
        text: 'All Followup Papers',
        path: 'all-followuppapers',
        icon: <FaRegClipboard />
    },
    {
        id: 4,
        text: 'Add Followup Paper',
        path: 'add-followuppaper',
        icon: <FaRegNewspaper />
    },

    {
        id: 5,
        text: 'Profile',
        path: 'profile',
        icon: <ImProfile />
    },
]


export default links
