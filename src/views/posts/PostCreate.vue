<script setup lang="ts">

import type { FormKitNode } from '@formkit/core';
import axiosInstance from '@/lib/axios.ts';
import router from '@/router';
import { AxiosError } from 'axios';


type PostForm = {
    title: string;
    body: string;
}
const createPost = async (payload: PostForm, node?: FormKitNode) => {
    try {
        await axiosInstance.post('/dashboard/posts', payload);
        await router.push('/dashboard/posts');
    } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 422) {
            node?.setErrors([], e.response?.data.errors);
        }
    }
}

</script>
<template>
    <section>
        <h1 class="text-3xl text-slate-200 p-4">Create Post</h1>
        <div class="max-w-md mx-auto bg-slate-950 rounded-lg p-4">
            <FormKit type="form" submit-label="Create" @submit="createPost">
                <FormKit type="text" label="Title" name="title"/>
                <FormKit type="textarea" label="Message" name="body"/>
            </FormKit>
        </div>
    </section>
</template>