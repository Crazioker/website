<template>
    <div>{{article}}</div>
</template>
<script setup lang="ts">
const article = ref<any>()

const { data } = await useAsyncData('getData',() => $fetch('/api/article/list', {
    method: 'get',
    params:{
    skip:0,
    limit: 1,
    filter: JSON.stringify({
        id: { '$eq': '13' }
    })
}
}).then((res: any)=>{
    article.value = res?.data?.list
})
)
</script>