<template>
  <div id="attribute-list">
      <h5 class="small-title">{{title}}</h5>
      <ul class="customlist">
          <li :class="listItemClass(list[key])"
              v-for="key in keys()"
              :title="titleStr(key)">
              {{decorateKey(key)}} {{valText(key)}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'attribute-list',
    props: [
        'title',
        'list',
    ],
    data () {
        return {
            keys() {

                let compareBoolFirstThenStrings = (a,b) => {
                    //bool first (true > false)
                    if (typeof this.list[a] === 'boolean' && typeof this.list[b] === 'boolean') {
                        if (this.list[a] && this.list[b]) {
                            return 0;
                        }
                        if (this.list[a]) {
                            return -1;
                        }
                        if (this.list[b]) {
                            return 1;
                        }
                    }
                    //Then strings
                    if (typeof this.list[a] === 'boolean' || typeof this.list[b] === 'string') {
                        return -1;
                    }
                    if (typeof this.list[a] === 'string' || typeof this.list[b] === 'boolean') {
                        return 1;
                    }

                    return a < b;
                };

                return Object.keys(this.list)
                    .filter(key => this.list.hasOwnProperty(key))
                    .sort(compareBoolFirstThenStrings);
            },
            decorateKey(key) {
                let termEntry = this.termsMap[key];
                return termEntry || key;
            },
            valText(key) {
                let val = this.list[key];
                if (typeof val === 'boolean') {
                    return '';
                }

                if (typeof val === 'string') {
                    console.log(val + " is " + typeof val);
                    return '= ' + val;
                }
                if (this.isArray(val)) {
                    return '(hover for deets)';
                }

                console.log('Don\'t know how to render ' + val);

            },
            titleStr(key) {
                let val = this.list[key];
                if (this.isArray(val)) {
                    return val.join(', ');
                }
                return '';
            },
            isArray(obj) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            },
            listItemClass(val) {
                if (typeof val === 'boolean')
                    return val ? "tick" : "cross";

                return 'bullet';
            },
            termsMap: {
                //No nice way, short of looking up in a dictionary to do this. So, we'll do nice
                //versions for terms we know about, and ones we don't will display raw
                "codereviews": "Code Reviews",
                "prototyping": "Prototyping",
                "pairprogramming": "Pair Programming",
                "failfast": "Fail Fast",
                "unittests": "Unit Tests",
                "integrationtests": "Integration Tests",
                "buildserver": "Build Server",
                "staticcodeanalysis" :"Static Code Analysis",
                "versioncontrol":"Version Control",
                "issuetracker": "Issue Tracker",
                "knowledgerepo": "Knowledge Repo",
                "standups": "Standups",
                "qaprotocol": "QA protocol",
                "agilemanagement":"Agile Management",
                "freedomovertools" : "Freedom Over Tools",
                "onecommandbuild": "One Command Build",
                "quickstart": "Quickstart",
                "commitondayone": "Commit on Day One"
            }
        }
    }
}
</script>

<style>
    .customlist {
        padding: 0 10px 0 0;
        font-family: FontAwesome;
        list-style: none;
    }

    .customlist li.tick:before {
        list-style: none;
        content: "\f00c";
        padding: 0 10px 0 0;
        font-family: FontAwesome;

    }
    .customlist li.cross:before  {
        content: "\f00d";
        padding: 0 10px 0 0;
        font-family: FontAwesome;
        color: red !important;
    }

    .customlist li.bullet:before  {
        content: "\f240";
        padding: 0 10px 0 0;
        font-family: FontAwesome;
    }
</style>
