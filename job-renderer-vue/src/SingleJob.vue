<template>
    <div id="single-job">
        <div class="container">
            <div class="row">
                <div style="display: inline-block">
                    <badge v-bind:label="job.essentials.employment || 'Unknown' "></badge>
                </div>
                <div style="display: inline-block">
                    <badge v-bind:label="job.essentials.industry || 'Unknown' "></badge>
                </div>
            </div>
        </div>

        <h3>{{job.headline}}</h3>
        <br/>
        <p class="lead">
            Here's the essential information for this position:
        </p>
        <br/>
        <ul>
            <li>Location(s): <b>{{locations()}}</b></li>
            <li>Start Date: <b>{{startDate()}}</b></li>
            <li>Salary: <b>{{amount()}} {{taxStatus()}} per {{interval()}} </b></li>
            <li>Stock Options: <b>{{stockOptions()}} </b></li>
            <li>Team: <b>We max out at {{teamSize()}} humans </b></li>

        </ul>
        <br/>
        <p class="lead">
            And all the details...
        </p>
        <br/>
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


        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="creativewidget text-center section lb">
                        <i class="fa fa-star"></i>
                        <h4>Bonus Content</h4>
                        <p v-for="item in job.other">{{item}}</p>

                    </div>
                </div><!-- end col -->

                <div class="col-md-6">
                    <div class="creativewidget text-center section lb">
                        <i class="fa fa-briefcase"></i>
                        <img v-for="os in machineTypes()" :src="os+'.png'">
                        <p></p>
                    </div><!-- end creativewidget -->
                </div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->




        <a href="#" onclick="confirm('Did I get it?')" role="button" data-toggle="modal" class="btn btn-primary btn-custom">
            Apply For Job
        </a>
    </div>
</template>

<script>
    const moment = require('moment');
    export default {
        name: 'single-job',
        props: ['job'],
        data() {
            return {
                locations() {
                    return this.job.essentials.locations.map(this.capitilize).join(', ');
                },
                startDate() {
                    return moment(this.job.essentials.startdate).format('MMMM Do YYYY');
                },
                amount() {
                    let salary = job.essentials.salary;
                    let amountStr = salary.amount;
                    if (Number.prototype.toLocaleString) {
                          amountStr = salary.amount.toLocaleString(undefined,{
                              style: "currency",
                              currency: salary.currency
                          })
                    } else {
                        amountStr = salary.amount + " " + salary.currency;
                    }
                    return amountStr
                },
                taxStatus() {
                    return this.job.essentials.salary.status.toLowerCase();
                },
                interval() {
                    return this.job.essentials.salary.interval.toLowerCase();
                },
                stockOptions() {
                    return this.job.essentials.salary.stockoptions ? "included" : "not included";
                },
                teamSize(){
                    return this.job.essentials.teamsize.max;
                },
                machineTypes() {
                    //hack: global from the exercise
                    return OperatingSystems().all.map(item => String.prototype.toLowerCase);
                },
                capitilize(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
            }
        }
    }
</script>

<style>
</style>
