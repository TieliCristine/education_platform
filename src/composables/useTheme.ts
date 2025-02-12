import { ref, onMounted } from 'vue';

export function useTheme() {
    const isDark = ref(
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    const applyTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleTheme = () => {
        isDark.value = !isDark.value;
        applyTheme();
    };

    onMounted(() => {
        applyTheme();
    });

    return { isDark, toggleTheme };
}
