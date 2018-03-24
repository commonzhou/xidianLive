<template>
    <div>
        <div class="doc">
            <h3>使用说明</h3>
            <article>
                <h1>中行直播后台管理系统</h1>
                <p class="subtitle">本系统由Vue和stylus技术栈联手打造</p>
                <h2>摘要</h2>
                <p>和HTTP/1.0相比，HTTP/1.1 新增了以下内容：默认为长连接；提供了范围请求功能；提供了虚拟主机的功能；多了一些缓存处理字段；多了一些状态码。</p>
                <p>和HTTP/1.1相比，HTTP/2.0 新增了以下内容：HTTP/2.0 使用多路复用技术，使用同一个 TCP 连接来处理多个请求；HTTP/1.1 的首部带有大量信息，而且每次都要重复发送。HTTP/2.0 要求通讯双方各自缓存一份首部字段表，从而避免了重复传输；
                  在客户端请求一个资源时，会把相关的资源一起发送给客户端，客户端就不需要再次发起请求了。例如客户端请求 index.html 页面，服务端就把 index.js 一起发给客户端。HTTP/1.1 的解析是基于文本的，而 HTTP/2.0 采用二进制格式。
                </p>
                <h2>说明</h2>
                <p>持久连接需要使用 Connection 首部字段进行管理。HTTP/1.1 开始 HTTP 默认是持久化连接的，如果要断开 TCP 连接，需要由客户端或者服务器端提出断开，使用 Connection : close；而在 HTTP/1.1 之前默认是非持久化连接的，如果要维持持续连接，需要使用 Connection : Keep-Alive。
                  管线化方式 可以同时发送多个请求和响应，而不需要发送一个请求然后等待响应之后再发下一个请求。编码（Encoding）主要是为了对实体进行压缩。常用的编码有：gzip、compress、deflate、identity，其中 identity 表示不执行压缩的编码格式。
                </p>
                <p>在请求报文首部中添加 Range 字段，然后指定请求的范围，例如 Range:bytes=5001-10000。请求成功的话服务器发送 206 Partial Content 状态。通过内容协商返回最合适的内容，例如根据浏览器的默认语言选择返回中文界面还是英文界面。
                  使用虚拟主机技术，使得一台服务器拥有多个域名，并且在逻辑上可以看成多个服务器。
                </p>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>

<style scoped>
     .doc{
        width:80vw;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        margin:0 auto
    }
    .doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    article{
        padding: 45px;
        word-wrap: break-word;   /* 在长单词或 URL 地址内部进行换行。 */
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    article h1{
        font-size:32px;
        padding-top: -20px;
        padding-bottom: 30px;
        margin-bottom: 15px;
        margin-top:-10px;
        border-bottom: 1px solid #ddd;
    }
    article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    article p{
        margin-bottom: 15px;
        line-height: 1.5;
        text-align: left;
    }
    .subtitle{
      text-align: center;
    }
</style>