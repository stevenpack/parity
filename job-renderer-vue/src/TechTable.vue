<template>
  <div id="tech-table">

      <h5 class="small-title">{{title}}</h5>
      <div class="table-responsive">
          <table class="table-striped table-condensed skills">
              <tr v-for="level in levels()">
                  <td class="level">{{level}}</td>
                  <td :class="'skill ' + level.toLowerCase()" v-for="skill in skillsForLevel(level)">{{skill}}</td>
              </tr>

          </table>
      </div>
  </div>
</template>

<script>
export default {
    name: 'tech-table',
    props: [
        'title',
        'list',
    ],
    data () {

        let sortMap = {
            "Expert" : 1,
            "Good" : 2,
            "Familiar": 3
        };

        return {
            levels() {
              return Level().all.sort(this.levelComparer);
            },
            levelSkills () {
                return Object.keys(this.list).filter(key =>
                    this.list.hasOwnProperty(key) && typeof this.list[key] === "string"
                )
            },
            skillsForLevel(level) {
                return Object.entries(this.list)
                    .filter(item => item[1] === level)
                    .map(item => item[0]);
            },
            levelClass (skill) {

                let base = "level ";
                let knownLevels = ["Expert", "Good", "Familiar"];
                let level = this.list[skill];
                if (knownLevels.indexOf(level) > -1) {
                    return base + level.toLowerCase();
                }
                return base + "unknown";
            },
            levelComparer(a,b) {
                let aWeight = sortMap[a] || 0;
                let bWeight = sortMap[b] || 0;
                return aWeight > bWeight;
            }
        }
    }
}
</script>

<style>
    .level {
       font-weight: bold;
    }

    table.skills td {
        background-clip: padding-box;
        border-radius: 5px;

        padding-left: 5px;
        padding-right: 5px;
        border: 2px solid transparent;
    }

    .skill {
        padding-left: 2px;
        padding-right: 2px;
    }

    .expert {
        background-color: #3498db;
        color: white;
        font-weight: bold;

    }

    .good {
        background-color: #2980b9;
        font-weight: normal;
        color: whitesmoke;
    }

    .familiar {
        background-color: lightblue;
    }

    .unknown {
        background-color: whitesmoke;
    }

</style>
