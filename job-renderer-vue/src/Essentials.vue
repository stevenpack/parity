<template>
  <div id="essentials">

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
  </div>
</template>

<script>
    const moment = require('moment');
    export default {
        name: 'essentials',
        props: [
            'essentials',
        ],
        data () {
            return {
                locations() {
                    return this.essentials.locations.map(this.capitilize).join(', ');
                },
                startDate() {
                    return moment(this.essentials.startdate).format('MMMM Do YYYY');
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
                    return this.essentials.salary.status.toLowerCase();
                },
                interval() {
                    return this.essentials.salary.interval.toLowerCase();
                },
                stockOptions() {
                    return this.essentials.salary.stockoptions ? "included" : "not included";
                },
                teamSize(){
                    return this.essentials.teamsize.max;
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
