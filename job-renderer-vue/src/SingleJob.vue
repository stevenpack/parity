<template>
    <div id="single-job">
        <badge v-bind:label="job.essentials.employment || 'Unknown' "></badge>
        <h3>{{job.headline}}</h3>

        <div class="row">
            <div class="col-md-4">
                <attribute-list title="Methodology" :list="job.methodology"></attribute-list>
            </div>
            <div class="col-md-4">
                <attribute-list title="Technology" :list="job.technologies"></attribute-list>
            </div>
            <div class="col-md-4">
                <attribute-list title="Misc" :list="job.misc"></attribute-list>
            </div>
        </div>

        <a href="#" onclick="confirm('Did I get it?')" role="button" data-toggle="modal" class="btn btn-primary btn-custom">
            Apply For Job
        </a>
    </div>
</template>

<script>
export default {
    name: 'single-job',
    props: ['job']
}
</script>

<style>
</style>
