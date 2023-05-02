import { Preset } from '.'

//Under not including 20 tiles is difficulty 1
//Under not including 30 tiles is difficutly 2
//Over that is difficulty 3

const target: Preset = {difficulty: 3, name: "Target", 
picture: [
         {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
        ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
        ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
        ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
        ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
        ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
        ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
        ],
amount: 32,
size: 49};

const diagonals: Preset = {difficulty: 1, name: "Diagonals", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true}
    ],
amount: 17,
size: 49};

const arrow: Preset = {difficulty: 2, name: "Arrow", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 29,
size: 49};

const flower: Preset = {difficulty: 2, name: "Flower", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 20,
size: 49};

const umbrella: Preset = {difficulty: 2, name: "Umbrella", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 21,
size: 49};

const ladder: Preset = {difficulty: 2, name: "Ladder", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 23,
size: 49};

const smiley: Preset = {difficulty: 1, name: "Smiley", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 9,
size: 49};

const coin: Preset = {difficulty: 2, name: "Coin", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 29,
size: 49};

const snowFlake: Preset = {difficulty: 1, name: "SnowFlake", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 16,
size: 49};

const heart: Preset = {difficulty: 3, name: "Heart", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 34,
size: 49};

const key: Preset = {difficulty: 1, name: "Key", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 14,
size: 49};

const qMark: Preset = {difficulty: 2, name: "QMark", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 22,
size: 49};

const hourGlass: Preset = {difficulty: 1, name: "HourGlass", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 19,
size: 49};

const spaceShip: Preset = {difficulty: 2, name: "SpaceShip", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 20,
size: 49};

const musicNote: Preset = {difficulty: 1, name: "MusicNote", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 12,
size: 49};

const twinMusicNote: Preset = {difficulty: 2, name: "TwinMusicNote", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 22,
size: 49};

const anchor: Preset = {difficulty: 1, name: "Anchor", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 17,
size: 49};

const diagArrows: Preset = {difficulty: 2, name: "DiagArrows", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 25,
size: 49};

const snowFlake2: Preset = {difficulty: 2, name: "SnowFlake2", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true}
    ],
amount: 21,
size: 49};

const jellyFish: Preset = {difficulty: 2, name: "JellyFish", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 27,
size: 49};

const android: Preset = {difficulty: 2, name: "Android", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 26,
size: 49};


//Use this as template and change values to true to make your new preset, highlight the code use (cntl + /) to remove comment  
// const false: Preset = {difficulty: 3, name: "AllFalse", 
// picture: [
//      {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
//     ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
//     ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
//     ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
//     ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
//     ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
//     ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
//     ],
// amount: 0,
// size: 49};

export const presets: Preset[] = [target,diagonals,arrow,flower,snowFlake2,umbrella,twinMusicNote,ladder,coin,snowFlake,jellyFish,key,heart,qMark,hourGlass,android,spaceShip,musicNote,smiley,anchor,diagArrows]
