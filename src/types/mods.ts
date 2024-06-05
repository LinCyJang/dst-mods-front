type modsCards = {
  app_name: string; // 模组适用的游戏名称
  ban_reason: string; // 如果模组被禁止，这里提供原因
  ban_text_check_result: number; // 文本检查的结果，0通常表示没有违规
  banned: boolean; // 模组是否被禁止
  banner: string; // 模组横幅的Steam用户ID
  can_be_deleted: boolean; // 模组是否可以被删除
  can_subscribe: boolean; // 用户是否可以订阅这个模组
  consumer_appid: number; // 模组的Steam应用ID
  consumer_shortcutid: number; // 模组的快捷方式ID
  creator: string; // 创建这个模组的Steam用户ID
  creator_appid: number; // 创建者的Steam应用ID
  favorited: number; // 模组被收藏的次数
  file_description: string; // 模组的描述
  file_size: number; // 模组文件的大小
  file_type: number; // 文件类型，0通常表示这是一个模组
  file_url: string; // 模组文件的URL
  filename: string; // 模组文件的名称
  flags: number; // 模组的一些标志位
  followers: number; // 关注这个模组的用户数量
  hcontent_file: string; // 文件内容的哈希值
  hcontent_preview: string; // 预览图的哈希值
  language: number; // 模组支持的语言，6通常表示英语
  lifetime_favorited: number; // 模组被收藏的总次数
  lifetime_followers: number; // 模组的总关注者数量
  lifetime_playtime: string; // 模组的总游戏时间
  lifetime_playtime_sessions: string; // 模组的总游戏会话数
  lifetime_subscriptions: number; // 模组的总订阅数
  maybe_inappropriate_sex: boolean; // 模组是否包含不适当的性内容
  maybe_inappropriate_violence: boolean; // 模组是否包含不适当的暴力内容
  num_children: number; // 子模组的数量
  num_comments_public: number; // 公共评论的数量
  num_reports: number; // 模组被举报的次数
  preview_file_size: number; // 预览文件的大小
  preview_url: string; // 模组预览图的URL
  publishedfileid: number; // 发布文件的ID
  result: number; // 结果代码，1通常表示成功
  revision: number; // 模组的修订版本
  revision_change_number: string; // 修订变更的编号
  show_subscribe_all: boolean; // 是否显示“全部订阅”选项
  subscriptions: number; // 模组的订阅数
  tags: {
    display_name: string;
    tag: string;
  }[]; // 模组的标签
  time_created: number; // 模组创建的时间戳
  time_updated: number; // 模组最后更新的时间戳
  title: string; // 模组的标题
  url: string; // 模组的URL
  views: number; // 模组的浏览次数
  visibility: number; // 模组的可见性，0表示公开
  vote_data: {
    score: number;
    votes_down: number;
    votes_up: number;
  }; // 模组的投票数据
  workshop_accepted: boolean; // 模组是否被Steam Workshop接受
  workshop_file: boolean; // 是否是一个工作坊文件
}


export type { modsCards }