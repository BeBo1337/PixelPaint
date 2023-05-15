import { head } from 'lodash';
import { Preset } from '.'

//Under not including 20 tiles is difficulty 1
//Under not including 30 tiles is difficutly 2
//Over that is difficulty 3


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

const shuriken: Preset = {difficulty: 1, name: "Shuriken", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 13,
size: 49};

const three: Preset = {difficulty: 1, name: "Three", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 13,
size: 49};

const heartHollow: Preset = {difficulty: 1, name: "HeartHollow", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 14,
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

const weight: Preset = {difficulty: 1, name: "Weight", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 15,
size: 49};

const dots: Preset = {difficulty: 1, name: "Dots", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true}
    ],
amount: 15,
size: 49};

const waves: Preset = {difficulty: 1, name: "Waves", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 16,
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

const headPhones: Preset = {difficulty: 1, name: "HeadPhones", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 17,
size: 49};

const necklace: Preset = {difficulty: 1, name: "Necklace", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 17,
size: 49};

const smallTarget: Preset = {difficulty: 1, name: "SmallTarget", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 17,
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

const eight: Preset = {difficulty: 1, name: "Eight", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 17,
size: 49};

const one: Preset = {difficulty: 1, name: "One", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 17,
size: 49};

const asymmetrical: Preset = {difficulty: 1, name: "Asymmetrical", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 18,
size: 49};

const jewelry: Preset = {difficulty: 1, name: "Jewelry", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 18,
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

const xSign: Preset = {difficulty: 2, name: "XSign", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 21,
size: 49};

const newSquare: Preset = {difficulty: 2, name: "newSquare", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 21,
size: 49};

const sign: Preset = {difficulty: 2, name: "Sign", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 21,
size: 49};

const claws: Preset = {difficulty: 2, name: "Claws", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 21,
size: 49};

const reticle: Preset = {difficulty: 2, name: "Reticle", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 21,
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

const across: Preset = {difficulty: 2, name: "Across", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 24,
size: 49};

const cyborg: Preset = {difficulty: 2, name: "Cyborg", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 25,
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

const bunny: Preset = {difficulty: 2, name: "Bunny", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 25,
size: 49};

const snake: Preset = {difficulty: 2, name: "Snake", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 25,
size: 49};

const tableTop: Preset = {difficulty: 2, name: "TableTop", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false}
    ],
amount: 25,
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

const symmetrical: Preset = {
    difficulty: 3,
    name: "Symmetrical",
    picture: [
      {i: 0, j: 0, highlighted: false}, {i: 0, j: 1, highlighted: false}, {i: 0, j: 2, highlighted: false}, {i: 0, j: 3, highlighted: true}, {i: 0, j: 4, highlighted: true}, {i: 0, j: 5, highlighted: true}, {i: 0, j: 6, highlighted: true},
      {i: 1, j: 0, highlighted: false}, {i: 1, j: 1, highlighted: false}, {i: 1, j: 2, highlighted: true}, {i: 1, j: 3, highlighted: true}, {i: 1, j: 4, highlighted: true}, {i: 1, j: 5, highlighted: false}, {i: 1, j: 6, highlighted: false},
      {i: 2, j: 0, highlighted: false}, {i: 2, j: 1, highlighted: true}, {i: 2, j: 2, highlighted: true}, {i: 2, j: 3, highlighted: true}, {i: 2, j: 4, highlighted: true}, {i: 2, j: 5, highlighted: true}, {i: 2, j: 6, highlighted: false},
      {i: 3, j: 0, highlighted: true}, {i: 3, j: 1, highlighted: true}, {i: 3, j: 2, highlighted: true}, {i: 3, j: 3, highlighted: true}, {i: 3, j: 4, highlighted: true}, {i: 3, j: 5, highlighted: true}, {i: 3, j: 6, highlighted: true},
      {i: 4, j: 0, highlighted: false}, {i: 4, j: 1, highlighted: true}, {i: 4, j: 2, highlighted: true}, {i: 4, j: 3, highlighted: true}, {i: 4, j: 4, highlighted: true}, {i: 4, j: 5, highlighted: true}, {i: 4, j: 6, highlighted: false},
      {i: 5, j: 0, highlighted: false}, {i: 5, j: 1, highlighted: false}, {i: 5, j: 2, highlighted: true}, {i: 5, j: 3, highlighted: true}, {i: 5, j: 4, highlighted: true}, {i: 5, j: 5, highlighted: false}, {i: 5, j: 6, highlighted: false},
      {i: 6, j: 0, highlighted: false}, {i: 6, j: 1, highlighted: false}, {i: 6, j: 2, highlighted: false}, {i: 6, j: 3, highlighted: true}, {i: 6, j: 4, highlighted: true}, {i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
    amount: 31,
    size: 49};  

const totem: Preset = {difficulty: 3, name: "Totem", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true}
    ],
amount: 31,
size: 49};

const stairs: Preset = {difficulty: 3, name: "Stairs", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 31,
size: 49};
  
const shuriken2: Preset = {difficulty: 3, name: "Shuriken2", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 31,
size: 49};

const doorway: Preset = {difficulty: 3, name: "Doorway", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true}
    ],
amount: 31,
size: 49};

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

const gate: Preset = {difficulty: 3, name: "Gate", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 33,
size: 49};

const two: Preset = {difficulty: 3, name: "Two", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false}
    ],
amount: 33,
size: 49};

const dungeon: Preset = {difficulty: 3, name: "Dungeon", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true}
    ],
amount: 33,
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

const bat: Preset = {difficulty: 4, name: "Bat", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 18,
size: 64};

const dagger: Preset = {difficulty: 4, name: "Dagger", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 18,
size: 64};

const creeper: Preset = {difficulty: 4, name: "Creeper", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 20,
size: 64};

const pSmiley: Preset = {difficulty: 4, name: "PSmiley", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 20,
size: 64};

const orb: Preset = {difficulty: 4, name: "Orb", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 20,
size: 64};

const candy: Preset = {difficulty: 4, name: "Candy", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 20,
size: 64};

const emerald: Preset = {difficulty: 4, name: "Emerald", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 22,
size: 64};

const medal: Preset = {difficulty: 4, name: "Medal", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 23,
size: 64};

const bowArrow: Preset = {difficulty: 4, name: "BowArrow", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: true}
    ],
amount: 23,
size: 64};

const utensils: Preset = {difficulty: 4, name: "Utensils", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 23,
size: 64};

const minotaur: Preset = {difficulty: 4, name: "Minotaur", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 25,
size: 64};

const staff: Preset = {difficulty: 4, name: "Staff", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 25,
size: 64};

const abstract2: Preset = {difficulty: 4, name: "Abstract2", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: true}
    ],
amount: 26,
size: 64};

const doubleArrows: Preset = {difficulty: 4, name: "DoubleArrows", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 26,
size: 64};

const bolt: Preset = {difficulty: 4, name: "Bolt", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 28,
size: 64};

const alien2: Preset = {difficulty: 4, name: "Alien2", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 30,
size: 64};

const checkers: Preset = {difficulty: 4, name: "Checkers", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: true}
    ],
amount: 32,
size: 64};

const abstract1: Preset = {difficulty: 4, name: "Abstract1", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 32,
size: 64};

const gasMask: Preset = {difficulty: 4, name: "GasMask", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 32,
size: 64};

const rope: Preset = {difficulty: 4, name: "Rope", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 32,
size: 64};

const beatle: Preset = {difficulty: 4, name: "Beatle", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 32,
size: 64};

const skully: Preset = {difficulty: 4, name: "Skully", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 32,
size: 64};

const s: Preset = {difficulty: 4, name: "S", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 33,
size: 64};

const alien1: Preset = {difficulty: 4, name: "Alien1", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: true}
    ],
amount: 34,
size: 64};

const grave: Preset = {difficulty: 5, name: "Grave", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 36,
size: 64};

const moon: Preset = {difficulty: 5, name: "Moon", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 36,
size: 64};

const waraxe: Preset = {difficulty: 5, name: "Waraxe", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 36,
size: 64};

const wrench: Preset = {difficulty: 5, name: "Wrench", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 36,
size: 64};

const worm: Preset = {difficulty: 5, name: "Worm", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 36,
size: 64};

const slime: Preset = {difficulty: 5, name: "Slime", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 37,
size: 64};

const abstract3: Preset = {difficulty: 5, name: "Abstract3", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 37,
size: 64};

const cat: Preset = {difficulty: 5, name: "Cat", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 38,
size: 64};

const chest: Preset = {difficulty: 5, name: "Chest", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 39,
size: 64};

const sideWaysTri: Preset = {difficulty: 5, name: "SideWaysTri", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: true}
    ],
amount: 40,
size: 64};

const valve: Preset = {difficulty: 5, name: "Valve", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 40,
size: 64};

const sails: Preset = {difficulty: 5, name: "Sails", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 40,
size: 64};

const sparks: Preset = {difficulty: 5, name: "Sparks", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: true},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 40,
size: 64};

const fence: Preset = {difficulty: 5, name: "Fence", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: true},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: false}
    ],
amount: 40,
size: 64};

const pokeBall: Preset = {difficulty: 5, name: "Pokeball", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: true},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: true},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
    ],
amount: 40,
size: 64};

const eyeNoid: Preset = {difficulty: 5, name: "eyeNoid", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: true},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: false}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: false}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: true},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount: 42,
size: 64};

const octopus: Preset = {difficulty: 5, name: "Octopus", 
picture: [
     {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: true},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: true},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
    ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: false}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: false}
    ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: true},{i:5, j:4, highlighted: true},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
    ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: true},{i:6, j:3, highlighted: true},{i:6, j:4, highlighted: true},{i:6, j:5, highlighted: true},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: false}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: true},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: true},{i:7, j:4, highlighted: true},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: true},{i:7, j:7, highlighted: true}
    ],
amount:44,
size: 64};

const banner: Preset = {difficulty: 5, name: "Banner", 
picture: [
     {i:0, j:0, highlighted: true},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: true},{i:0, j:4, highlighted: true},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: true}
    ,{i:1, j:0, highlighted: true},{i:1, j:1, highlighted: true},{i:1, j:2, highlighted: true},{i:1, j:3, highlighted: true},{i:1, j:4, highlighted: true},{i:1, j:5, highlighted: true},{i:1, j:6, highlighted: true},{i:1, j:7, highlighted: true}
    ,{i:2, j:0, highlighted: true},{i:2, j:1, highlighted: true},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: true},{i:2, j:4, highlighted: true},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: true},{i:2, j:7, highlighted: true}
    ,{i:3, j:0, highlighted: true},{i:3, j:1, highlighted: true},{i:3, j:2, highlighted: true},{i:3, j:3, highlighted: true},{i:3, j:4, highlighted: true},{i:3, j:5, highlighted: true},{i:3, j:6, highlighted: true},{i:3, j:7, highlighted: true}
    ,{i:4, j:0, highlighted: true},{i:4, j:1, highlighted: true},{i:4, j:2, highlighted: true},{i:4, j:3, highlighted: true},{i:4, j:4, highlighted: true},{i:4, j:5, highlighted: true},{i:4, j:6, highlighted: true},{i:4, j:7, highlighted: true}
    ,{i:5, j:0, highlighted: true},{i:5, j:1, highlighted: true},{i:5, j:2, highlighted: true},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: true},{i:5, j:6, highlighted: true},{i:5, j:7, highlighted: true}
    ,{i:6, j:0, highlighted: true},{i:6, j:1, highlighted: true},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: true},{i:6, j:7, highlighted: true}
    ,{i:7, j:0, highlighted: true},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: true}
    ],
amount: 46,
size: 64};

//Use this as template and change values to true to make your new preset, highlight the code use (cntl + /) to remove comment  

// const false: Preset = {difficulty: 2, name: "AllFalse", 
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

// const false: Preset = {difficulty: 4, name: "AllFalse", 
// picture: [
//      {i:0, j:0, highlighted: false},{i:0, j:1, highlighted: false},{i:0, j:2, highlighted: false},{i:0, j:3, highlighted: false},{i:0, j:4, highlighted: false},{i:0, j:5, highlighted: false},{i:0, j:6, highlighted: false},{i:0, j:7, highlighted: false}
//     ,{i:1, j:0, highlighted: false},{i:1, j:1, highlighted: false},{i:1, j:2, highlighted: false},{i:1, j:3, highlighted: false},{i:1, j:4, highlighted: false},{i:1, j:5, highlighted: false},{i:1, j:6, highlighted: false},{i:1, j:7, highlighted: false}
//     ,{i:2, j:0, highlighted: false},{i:2, j:1, highlighted: false},{i:2, j:2, highlighted: false},{i:2, j:3, highlighted: false},{i:2, j:4, highlighted: false},{i:2, j:5, highlighted: false},{i:2, j:6, highlighted: false},{i:2, j:7, highlighted: false}
//     ,{i:3, j:0, highlighted: false},{i:3, j:1, highlighted: false},{i:3, j:2, highlighted: false},{i:3, j:3, highlighted: false},{i:3, j:4, highlighted: false},{i:3, j:5, highlighted: false},{i:3, j:6, highlighted: false},{i:3, j:7, highlighted: false}
//     ,{i:4, j:0, highlighted: false},{i:4, j:1, highlighted: false},{i:4, j:2, highlighted: false},{i:4, j:3, highlighted: false},{i:4, j:4, highlighted: false},{i:4, j:5, highlighted: false},{i:4, j:6, highlighted: false},{i:4, j:7, highlighted: false}
//     ,{i:5, j:0, highlighted: false},{i:5, j:1, highlighted: false},{i:5, j:2, highlighted: false},{i:5, j:3, highlighted: false},{i:5, j:4, highlighted: false},{i:5, j:5, highlighted: false},{i:5, j:6, highlighted: false},{i:5, j:7, highlighted: false}
//     ,{i:6, j:0, highlighted: false},{i:6, j:1, highlighted: false},{i:6, j:2, highlighted: false},{i:6, j:3, highlighted: false},{i:6, j:4, highlighted: false},{i:6, j:5, highlighted: false},{i:6, j:6, highlighted: false},{i:6, j:7, highlighted: false}
//     ,{i:7, j:0, highlighted: false},{i:7, j:1, highlighted: false},{i:7, j:2, highlighted: false},{i:7, j:3, highlighted: false},{i:7, j:4, highlighted: false},{i:7, j:5, highlighted: false},{i:7, j:6, highlighted: false},{i:7, j:7, highlighted: false}
//     ],
// amount: 0,
// size: 64};

export const presets: Preset[] = [target,diagonals,arrow,flower,snowFlake2,umbrella,
    twinMusicNote,ladder,coin,snowFlake,jellyFish,key,heart,qMark,hourGlass,android,
    spaceShip,musicNote,smiley,anchor,diagArrows,newSquare,bunny,snake,sign,eight,
    one,two,three,reticle,utensils,shuriken,across,creeper,alien1,sideWaysTri,
    pSmiley,moon,valve,dagger,octopus,checkers,abstract1,waraxe,bolt,abstract2,
    sails,gasMask,grave,rope,orb,sparks,alien2,emerald,beatle,fence,cat,bat,skully,
    staff,medal,banner,candy,abstract3,bowArrow,wrench,doubleArrows,pokeBall,
    slime,minotaur,chest,worm,eyeNoid,symmetrical,claws,dungeon,shuriken2,stairs,
    tableTop,gate,cyborg,totem,doorway,dots,s,waves,headPhones,smallTarget,asymmetrical,necklace,
    weight,jewelry,heartHollow,xSign]

    //7x7: lvl1 : 20, lvl2 : 21, lvl3 : 10

    //8x8: lvl4 : 24, lvl5: 18