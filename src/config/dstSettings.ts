export const wordSettings = {
  global: {
    title: "全局",
    class: 'worldsettings',
    data: [
      {
        lable_cn: '活动',
        lable: 'Events',
        default: 'Auto',
        icon_id: 16*2+2,
        list: [
          {
            title: '自动',
            value: 'Auto'
          },
          {
            title: '无',
            value: 'None'
          }
        ]
      },
      {
        lable_cn: '秋',
        lable: 'Autumn',
        default: 'default',
        icon_id: 16*0+4,
        list: [
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '长',
            value: 'Long'
          },
          {
            title: '极长',
            value: 'Very Long'
          },
          {
            title: '随机',
            value: 'Random'
          }
        ]
      },
      {
        lable_cn: '冬',
        lable: 'Winter',
        default: 'default',
        icon_id: 16*7+16,
        list: [
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '长',
            value: 'Long'
          },
          {
            title: '极长',
            value: 'Very Long'
          },
          {
            title: '随机',
            value: 'Random'
          }
        ]
      },
      {
        lable_cn: '春',
        lable: 'Spring',
        icon_id: 16*7+6,
        default: 'default',
        list: [
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '长',
            value: 'Long'
          },
          {
            title: '极长',
            value: 'Very Long'
          },
          {
            title: '随机',
            value: 'Random'
          }
        ]
      },
      {
        lable_cn: '夏',
        lable: 'Summary',
        icon_id: 16*7+8,
        default: 'default',
        list: [
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '长',
            value: 'Long'
          },
          {
            title: '极长',
            value: 'Very Long'
          },
          {
            title: '随机',
            value: 'Random'
          }
        ]
      },
      {
        lable_cn: '昼夜选项',
        lable: 'Day Type',
        icon_id: 16*1+9,
        default: 'default',
        list: [
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '长 白天',
            value: 'Long Day'
          },
          {
            title: '长 黄昏',
            value: 'Long Dusk'
          },
          {
            title: '长 夜晚',
            value: 'Long Night'
          },
          {
            title: '无 白天',
            value: 'No Day'
          },
          {
            title: '无 黄昏',
            value: 'No Dusk'
          },
          {
            title: '无 夜晚',
            value: 'No Night'
          },
          {
            title: '仅 白天',
            value: 'Only Day'
          },
          {
            title: '仅 黄昏',
            value: 'Only Dusk'
          },
          {
            title: '仅 夜晚',
            value: 'Only Night'
          }
        ]
      },
      {
        lable_cn: '出生模式',
        lable: 'Spawn Mode',
        icon_id: 16*6+14,
        default: 'Florid Postern',
        list: [
          {
            title: '绚丽之门',
            value: 'Florid Postern'
          }
          ,
          {
            title: '随机',
            value: 'Random'
          }
          ,
        ]
      },
      {
        lable_cn: '冒险家死亡',
        lable: 'Survivor Death',
        icon_id: 16*2+13,
        default: 'Becomme Ghost',
        list: [
          {
            title: '变鬼魂',
            value: 'Becomme Ghost'
          },
          {
            title: '更改冒险家',
            value: 'Change Survivor'
          }
        ]
      },
      {
        lable_cn: '在绚丽之门复活',
        lable: 'Revive At Florid Postern',
        icon_id: 16*5+14,
        default: 'Enabled',
        list: [
          {
            title: '启用',
            value: 'Enabled'
          },
          {
            title: '禁用',
            value: 'Disabled'
          }
        ]
      },
      {
        lable_cn: '鬼魂理智值惩罚',
        lable: 'Ghost Sanity Drain',
        icon_id: 16*2+14,
        default: 'Disabled',
        list: [
          {
            title: '禁用',
            value: 'Disabled'
          },
          {
            title: '启用',
            value: 'Enabled'
          }
        ]
      },
      {
        lable_cn: '死亡重置倒计时',
        lable: 'Death Reset Timer',
        icon_id: 16*6+4,
        default: 'Disabled',
        list: [
          {
            title: '禁用',
            value: 'Disabled'
          },
          {
            title: '慢',
            value: 'Slow'
          },
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '快',
            value: 'Fast'
          },
          {
            title: '立刻',
            value: 'Instant'
          },
        ]
      },
      {
        lable_cn: '皮弗娄牛交配频率',
        lable: 'beefaloheat',
        icon_id: 16*0+9,
        default: 'default',
        list: [
          {
            title: '无',
            value: 'never'
          },
          {
            title: '很少',
            value: 'rare'
          },
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '较多',
            value: 'often'
          },
          {
            title: '大量',
            value: 'always'
          },

        ]
      },
      {
        lable_cn: '坎普斯',
        lable: 'krampus',
        icon_id: 16*3+10,
        default: 'default',
        list: [
          {
            title: '无',
            value: 'never'
          },
          {
            title: '很少',
            value: 'rare'
          },
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '较多',
            value: 'often'
          },
          {
            title: '大量',
            value: 'always'
          },
        ]
      },
    ]
  },
  events: {
    title: '活动',
    class: 'worldsettings',
    data: [
      {
        lable_cn: '盛夏鸦年华',
        lable: 'midsummer_cawnival',
        icon_id: 16*1+7,
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '万圣夜',
        icon_id: 16*8+2,
        lable: 'haallowed_nights',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '冬季盛宴',
        lable: 'winters_feast',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '火鸡之年',
        icon_id: 16*5+9,
        lable: 'year_of_the_gobbler',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '座狼之年',
        icon_id: 16*7+14,
        lable: 'year_of_the_varg',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '猪王之年',
        icon_id: 16*5+12,
        lable: 'year_of_the_pig',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '胡萝卜鼠之年',
        icon_id: 16*8+6,
        lable: 'year_of_the_carrat',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '皮弗娄牛之年',
        icon_id: 16*8+5,
        lable: 'year_of_the_beefalo',
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
      {
        lable_cn: '浣猫之年',
        lable: 'year_of_the_catcoon',
        icon_id: 16*8+8,
        default: 'Default',
        list: [
          {
            title: '默认',
            value: 'Default'
          },
          {
            title: '总是',
            value: 'enabled'
          }
        ]
      },
    ]
  },
  world: {
    title: '世界',
    class: 'worldsettings',
    data: [
      {
        lable_cn: '野火',
        lable: 'wildfires',
        icon_id: 16*6+12,
        default: 'default',
        list: [
          {
            title: '无',
            value: 'never'
          },
          {
            title: '很少',
            value: 'rare'
          },
          {
            title: '默认',
            value: 'default'
          },
          {
            title: '较多',
            value: 'often'
          },
          {
            title: '大量',
            value: 'always'
          },
        ]
      }
    ]
  }
}

