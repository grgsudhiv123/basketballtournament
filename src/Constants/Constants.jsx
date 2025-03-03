import HeroFront from "../assets/videos/dribbleFirstpage.mp4"
import logo from "../assets/images/basketball-basket-board.png"

import Beyond from "../assets/text/Untitled/BEYOND.svg"
import Limits from "../assets/text/Untitled/LIMITS.svg"
import Hold from "../assets/images/hold.png";
import dunk from "../assets/images/dunk.png";
import belowfeet from "../assets/images/belowfeet.png";
import tournament from "../assets/images/tournament.png";

import lebron from "../assets/images/lebron.png"
import curry from "../assets/images/curry.png"
import durant from "../assets/images/durant.png"
import harden from "../assets/images/harden.png"



export const videos = {
    heroPage : HeroFront,
}


export const imageBskt = {
    Hold : Hold,
    dunk : dunk,
    belowfeet : belowfeet,
    tournament : tournament,
}

export const Logos = {
    bsktBallLogo : logo,
}


export const BoldText = {
    Beyond : Beyond,
    Limits : Limits,
} 


export const Sponsers = [
    {
        name : "Lebron James",
        team : "Los Angeles Lakers",
        position : "Forward",
        img : lebron,
    },
    {
        name : "Stephen Curry",
        team : "Golden State Warriors",
        position : "Point Guard",
        img : curry,
    },
    {
        name : "Kevin Durant",
        team : "Phoenix Suns",
        position : "Forward ",
        img : durant,
    },
    {
        name : "James Harden",
        team : "Los Angeles Clippers",
        position : "Shooting Guard",
        img : harden,
    }
]