<script setup lang="ts">
import axiosInstance from '@/lib/axios.ts';

const user = async () => {
    try {
        const response = await axiosInstance.get('/user');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

const logout = async () => {
    try {
        const response = await axiosInstance.get('/logout');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

user();

</script>
<template>
    <h1>Dash</h1>
</template>