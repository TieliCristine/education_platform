<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
    <button
        @click="toggleTheme"
        class="p-2 rounded-full transition duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
        <SunIcon v-if="!isDark" class="w-6 h-6 text-yellow-500" />
        <MoonIcon v-else class="w-6 h-6 text-gray-300" />
    </button>
</template>
