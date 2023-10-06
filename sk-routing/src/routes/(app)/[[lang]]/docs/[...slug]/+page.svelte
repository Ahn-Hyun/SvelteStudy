<script>
    import { page } from '$app/stores';
    console.log($page.params);

    const slugArr = $page.params.slug.split('/');
    // console.log(slugArr);
    const { lang = 'ko' } = $page.params;
</script>

{#if lang == 'ko'}
    <h1>안녕</h1>
{:else if lang == 'en'}
    <h1>Hello</h1>
{:else if lang == 'ja'}
    <h1>곤니찌왕</h1>
{/if}

<hr />
<h1>문서 페이지</h1>

{#if slugArr.length == 1}
    <h1>Docs page ; 주제 {slugArr[0]}</h1>
{:else if slugArr.length == 2}
    <h1>Docs page ;주제 {slugArr[0]} ; 소주제 {slugArr[1]}</h1>
{/if}