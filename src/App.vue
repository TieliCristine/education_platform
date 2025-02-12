<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50">
        <div class="dark:bg-slate-950 bg-slate-700 shadow-md">
            <nav class="container mx-auto flex items-center justify-between p-4">
                <div class="flex space-x-2">
                    <RouterLink class="text-text dark:text-text-dark" to="/">Home</RouterLink>
                    <RouterLink class="text-text dark:text-text-dark" to="/dashboard">Dashboard</RouterLink>
                    <RouterLink class="text-text dark:text-text-dark" to="/dashboard/posts">Posts</RouterLink>
                </div>
                <div class="flex space-x-2">
                    <RouterLink class="text-text dark:text-text-dark" to="/login">Login</RouterLink>
                    <RouterLink class="text-text dark:text-text-dark" to="/register">Register</RouterLink>
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    </header>
    <main class="w-screen max-w-6xl mx-auto bg-background dark:bg-background-dark min-h-screen pt-16">
        <div class="mb-6">
            <RouterView/>
        </div>
    </main>
</template>