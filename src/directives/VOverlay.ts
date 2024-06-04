import type { DirectiveBinding } from 'vue';

// 定义指令
function VOverlayDirective(el: HTMLElement, binding: DirectiveBinding) {
  // 获取 Vuetify 的 VOverlay 组件
  const VOverlay = el.__vueApp__.component('v-overlay');

  // 创建 overlay 实例
  const overlay = new VOverlay({
    propsData: {
      value: binding.value,
    },
  }).$mount();

  // 将 overlay 实例插入到元素中
  el.appendChild(overlay.$el);

  // 监听 binding.value 的变化，并更新 overlay 的显示状态
  const unwatch = binding.instance.$watch(
    () => binding.value,
    (newValue) => {
      overlay.value = newValue;
    }
  );

  // 在组件销毁时销毁 overlay 实例
  binding.instance.$on('hook:beforeDestroy', () => {
    unwatch();
    overlay.$destroy();
  });
}

// 导出指令
export default VOverlayDirective;