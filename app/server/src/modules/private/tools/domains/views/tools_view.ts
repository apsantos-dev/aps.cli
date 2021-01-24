import Tool from '../models/Tool';

export default {
  render(tool: Tool) {
    return {
      id: tool.id,
      active: tool.active,
      avatarURL: tool.avatarURL,
      name: tool.name,
      site: tool.site,
      status: tool.status,
      version: tool.version,
      info: tool.info,
    };
  },

  renderMany(tools: Tool[]) {
    return tools.map((tool) => this.render(tool));
  },
};
