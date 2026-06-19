// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const notify_routeTool: Tool = {
  definition: {
    name: 'notify_route',
    description: 'Route notification to appropriate channel',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[notification-router] notify_route executed');
      return ok('notify_route', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'notify_route',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const notify_configure_rulesTool: Tool = {
  definition: {
    name: 'notify_configure_rules',
    description: 'Configure routing rules',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[notification-router] notify_configure_rules executed');
      return ok('notify_configure_rules', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'notify_configure_rules',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const notify_testTool: Tool = {
  definition: {
    name: 'notify_test',
    description: 'Test notification routing',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[notification-router] notify_test executed');
      return ok('notify_test', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'notify_test',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const notify_list_channelsTool: Tool = {
  definition: {
    name: 'notify_list_channels',
    description: 'List configured notification channels',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[notification-router] notify_list_channels executed');
      return ok('notify_list_channels', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'notify_list_channels',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-notification-router] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-notification-router] Unloading...');
}
export const tools: Tool[] = [
  notify_routeTool,
  notify_configure_rulesTool,
  notify_testTool,
  notify_list_channelsTool,
];
