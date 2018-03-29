import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex);

const state={
    login:false,  //is login
    userInfo:null,
    videoList:[
           {
            imgLocation:"static/imgs/cover1.jpg",
            videoName:"晚会频道",
            playNum:'22',
            viewNum:'11'
           },
            {
            imgLocation:"static/imgs/cover2.jpg",
            videoName:"学术频道",
            playNum:'2200',
            viewNum:'117'
            },
            {
            imgLocation:"static/imgs/cover1.jpg",
            videoName:"晚会频道",
            playNum:'22',
            viewNum:'11'
           }
    ],
    liveList:[
        {
            imgLocation:"static/imgs/cover1.jpg",
            videoName:"晚会直播",
            playNum:'22',
            viewNum:'11'
           },
            {
            imgLocation:"static/imgs/cover2.jpg",
            videoName:"学术直播",
            playNum:'2200',
            viewNum:'117'
            }
    ]
}

export default new Vuex.Store({
    state,
    mutations
})