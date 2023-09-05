// 在你的docsify项目中的一个JavaScript文件中
import MarkdownIt from 'markdown-it';

// 创建一个Markdown渲染器
const md = new MarkdownIt();

// 注册一个插件，以便在HTML标签内部渲染Markdown样式
md.use(require('markdown-it-container'), 'render-md', {
  validate: function (params) {
    return params.trim() === 'render-md';
  },
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // 开始标签
      return '<div class="markdown-body">';
    } else {
      // 结束标签
      return '</div>';
    }
  }
});

// 导出Markdown渲染器
export default md;
