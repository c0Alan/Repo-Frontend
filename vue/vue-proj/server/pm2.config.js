// 文件名为 pm2.config.js
module.exports = {
    apps: [{
        name: "vue-proj01", // 应用名称
        script: "/srv/frontend/vue/vue-proj01/server/main.js", // 入口文件
		log_file: '/srv/frontend/vue/vue-proj01/logs/server.log',
        error_file: '/srv/frontend/vue/vue-proj01/logs/server-err.log',
        out_file: '/srv/frontend/vue/vue-proj01/logs/server.log',
        pid_file: '/srv/frontend/vue/vue-proj01/logs/server.pid',
    }]
}