<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex flex-col items-center justify-center text-justify min-h-[80vh] px-6 gap-5">
        <div class="max-w-3xl flex gap-5 flex-col">
            <h1 class="text-4xl font-bold text-text dark:text-text-dark">
                DESTRAVE O SEU POTENCIAL
            </h1>
            <p class="text-lg text-text dark:text-text-dark">
                Prepare-se para concursos públicos com materiais de qualidade, professores experientes e uma experiência
                de aprendizado moderna e eficiente.
            </p>

            <div class="flex justify-center gap-6 p-4">
                <RouterLink to="/register"
                            class="button button-primary">
                    Criar Conta
                </RouterLink>
                <RouterLink to="/login"
                            class="button button-secondary">
                    Entrar
                </RouterLink>
            </div>
        </div>
        <div>
            <img src="../assets/img-home.jpg" alt="EAD" class="rounded-lg shadow-lg w-full max-w-lg">
        </div>
    </div>
</template>

