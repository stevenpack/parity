<template>
  <div id="tech-table">

      <div class="table-responsive">
          <table class="table-condensed">
              <thead>
               <tr>
                   <th>Skill</th>
                   <th>Level</th>
               </tr>
              </thead>
              <tbody>
                <tr v-for="skill in levelSkills()">
                    <td class="skill-label">{{skill}}</td>
                    <td :class="levelClass(skill)">{{list[skill]}}</td>
                </tr>
              </tbody>
          </table>
      </div>
      <div class="table-responsive">
          <table class="table-condensed">
              <thead>
              <tr>
                  <th>Skill</th>
                  <th>Level</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="skill in singleSkills()">
                  <td class="skill-label">{{skill}}</td>
                  <td :class="levelClass(skill)">{{list.oneof[skill]}}</td>
              </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    name: 'tech-table',
    props: [
        'list',
    ],
    data () {
        return {
            levelSkills () {
                return Object.keys(this.list).filter(key =>
                    this.list.hasOwnProperty(key) && typeof this.list[key] === "string"
                )
            },
            singleSkills () {
                return Object.keys(this.list.oneof);
            },
            levelClass (skill) {

                let base = "level ";
                let knownLevels = ["Expert", "Good", "Familiar"];
                let level = this.list[skill];
                if (knownLevels.indexOf(level) > -1) {
                    return base + level.toLowerCase();
                }
                return base + "unknown";
            }
        }
    }
}
</script>

<style>
    .level {
        text-align: center;
    }

    .skill-label {
        background-color: whitesmoke;
    }

    .expert {
        background-color: green;
        color: white;
        font-weight: bold;

    }

    .good {
        background-color: lightgreen;
    }

    .familiar {
        background-color: #B1FF92;
    }

    .unknown {
        background-color: whitesmoke;
    }

</style>
