# 使用 Node 镜像作为基础镜像
FROM node:18.12.0 as build-stage

# 安装 pnpm
RUN npm install -g pnpm@7.11.0


# 设置工作目录
WORKDIR /dst-mods-front

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 将所有文件复制到工作目录
COPY . .

# 安装依赖
RUN pnpm install

# 构建生产环境
RUN pnpm build

# 使用 Nginx 镜像作为最终镜像
FROM nginx:1.21.0

# 复制自定义的 Nginx 配置文件到 Docker 镜像中
COPY nginx.conf /etc/nginx/nginx.conf

# 复制构建好的文件到 Nginx 静态文件目录
COPY --from=build-stage /dst-mods-front/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 5001

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
