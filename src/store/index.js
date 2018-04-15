import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'

Vue.use(Vuex);

const state={
    login:false,  //is login
    userInfo:null,
    videoList:[                   //直播列表
        //    {
        //     imgLocation:"static/imgs/cover1.jpg",
        //     videoName:"晚会频道",
        //     playNum:'22',
        //     viewNum:'11'
        //    },
        //     {
        //     imgLocation:"static/imgs/cover2.jpg",
        //     videoName:"学术频道",
        //     playNum:'2200',
        //     viewNum:'117'
        //     },
        //     {
        //     imgLocation:"static/imgs/cover1.jpg",
        //     videoName:"晚会频道",
        //     playNum:'22',
        //     viewNum:'11'
        //    }
    ],
    liveList:[                        //频道列表
        // {
        //     imgLocation:"static/imgs/cover1.jpg",
        //     videoName:"晚会直播",
        //     playNum:'22',
        //     viewNum:'11'
        //    },
        //     {
        //     imgLocation:"static/imgs/cover2.jpg",
        //     videoName:"学术直播",
        //     playNum:'2200',
        //     viewNum:'117'
        //     }
    ],
    allMedia:[                   //媒体库列表
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
    liveUser:[                   //直播统计信息的用户列表
        
    ]
}

export default new Vuex.Store({
    state,
    mutations
})