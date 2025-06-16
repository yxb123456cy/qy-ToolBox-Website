import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useDefaultDataStore = defineStore('defaultData', () => {
    /**
     * 默认头像URL
     */
    const defaultAvatarURL = ref<string>("");
    /**
     * 获取默认头像URL;
     */
    const getDefaultAvatarURL = computed(() => defaultAvatarURL.value);

    /**
     * 设置头像URL;
     * @param v  url:string
     */
    function setDefaultAvatarURL(v: string) {
        defaultAvatarURL.value = v;
    }


    return {defaultAvatarURL, getDefaultAvatarURL, setDefaultAvatarURL}
})
