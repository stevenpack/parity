<template>
    <div id="single-job">
        <div class="container">
            <div class="row">
                <div style="display: inline-block">
                    <badge :label="job.essentials.employment || 'Unknown' "></badge>
                </div>
                <div style="display: inline-block">
                    <badge :label="job.essentials.industry || 'Unknown' "></badge>
                </div>
            </div>
        </div>

        <h3>{{job.headline}}</h3>
        <br/>
        <essentials :essentials="job.essentials"></essentials>
        <a href="#" onclick="confirm('Did I get it?')" role="button" data-toggle="modal" class="btn btn-primary btn-custom">
            Apply For Job
        </a>
        <br/>
        <br/>
        <p class="lead">
            Need more? OK, all the details...
        </p>
        <br/>

        <div class="row">
            <div class="col-md-6">
                <attribute-list title="Methodology" :list="job.methodology"></attribute-list>
            </div>
            <div class="col-md-6">
                <attribute-list title="Misc" :list="job.misc"></attribute-list>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div style="display: inline-block">
                    <tech-table title="Core Technology" :list="job.technologies"></tech-table>
                    <tech-table title="Plus one of" :list="job.technologies.oneof"></tech-table>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="creativewidget text-center section lb">
                        <i class="fa fa-star"></i>
                        <h4>Bonus Content</h4>
                        <p v-for="item in job.other" title="Bonus!">{{item}}</p>

                    </div>
                </div>
                <div class="col-md-6">
                    <!-- These could be components -->
                    <div class="creativewidget text-center section lb">
                        <i class="fa fa-briefcase"></i>
                        <h4>Your Rig</h4>
                        <div>
                            <img :src="'src/assets/img/' + job.equipment.computer.toLowerCase() + '.png'"
                                 :alt="job.equipment.computer"
                                 :title="job.equipment.computer"
                                 width="48"
                            >
                        </div>
                        <div class="big-plus">+</div>
                        <span v-for="os in machineTypes()">
                            <img  :src="'src/assets/img/' + os.toLowerCase() + '.png'"
                                 :alt="osAltText(os)"
                                 :title="osAltText(os)"
                                 :class="osClass(os)"
                                 width="48" >
                            &nbsp;
                        </span>
                        <p></p>
                    </div>
                    <!--TODO: specs and profile. Profile could be d3 pie chart -->
                </div>
            </div>
            <a href="#" onclick="confirm('Did I get it?')" role="button" data-toggle="modal" class="btn btn-primary btn-custom">
                Apply For Job
            </a>
            <br/>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'single-job',
        props: ['job'],
        data() {
            return {

                machineTypes() {
                    //hack: global from the exercise
                    return OperationSystems().all;
                },
                osClass(os) {
                  return job.equipment.operatingsystem.indexOf(os) > -1 ? "" : "not-used";
                },
                osAltText(os) {
                    let question = os + "?";
                    let answer = job.equipment.operatingsystem.indexOf(os) > -1 ? "We use it!" : "Nope, not here.";
                    return question + " " + answer;
                }
            }
        }
    }
</script>

<style>

    .big-plus {
        font-size: xx-large;
        font-weight: bold;
        padding-top: 5px;
        padding-bottom: 10px;
        text-align: center;
    }

    .not-used {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        opacity: 0.1;
    }

</style>
