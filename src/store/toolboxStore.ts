import {defineStore} from "pinia";
import {ref, computed} from "vue";

// 工具项接口
export interface ToolItem {
    id: string;
    title: string;
    category: string;
    description?: string;
    icon?: string;
    // 方法;
    func?: Function,
}

// 创建工具箱状态管理
export const useToolboxStore = defineStore('toolbox', () => {
    // 当前选中的工具ID
    const selectedToolId = ref<string>('');

    // 工具列表数据
    const toolItems = ref<ToolItem[]>([
        {id: 't-1', title: '大小写转换', category: '编码转换', description: '快速转换文本大小写格式'},
        {id: 't-2', title: 'Unicode转换', category: '编码转换', description: '在Unicode和文本之间转换'},
        {id: 't-3', title: 'URL转换', category: '编码转换', description: '编码和解码URL字符串'},
        {id: 't-4', title: '进制转换', category: '编码转换', description: '在不同进制之间转换数字'},
        {id: 't-5', title: '时间戳转换', category: '编码转换', description: '时间戳与日期时间的相互转换'},
        {id: 't-6', title: 'Base64转换', category: '编码转换', description: 'Base64编码和解码工具'},
        {id: 't-7', title: 'UUID和随机数', category: '综合工具', description: '生成UUID和各种随机数'},
        {id: 't-8', title: '正则工具', category: '综合工具', description: '正则表达式测试和验证'},
        {id: 't-9', title: 'Cron表达式', category: '综合工具', description: 'Cron表达式生成和解析'},
        {id: 't-10', title: '二维码工具', category: '综合工具', description: '生成和解析二维码'},
        {id: 't-11', title: 'AES加密', category: '加密工具', description: 'AES加密和解密数据'},
        {id: 't-12', title: 'RSA加密', category: '加密工具', description: 'RSA公钥私钥加密解密'},
        {id: 't-13', title: 'MD5计算', category: '加密工具', description: '计算文本的MD5哈希值'},
    ]);

    // 获取当前选中的工具
    const selectedTool = computed(() => {
        return toolItems.value.find(item => item.id === selectedToolId.value);
    });

    // 按分类获取工具
    const toolsByCategory = computed(() => {
        const result: Record<string, ToolItem[]> = {};

        toolItems.value.forEach(tool => {
            if (!result[tool.category]) {
                result[tool.category] = [];
            }
            result[tool.category].push(tool);
        });

        return result;
    });

    // 设置当前选中的工具
    function setSelectedTool(id: string) {
        selectedToolId.value = id;
    }

    return {
        selectedToolId,
        toolItems,
        selectedTool,
        toolsByCategory,
        setSelectedTool
    };
});
