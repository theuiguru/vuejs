<template>
  <v-app>
    <v-content>
      <div class="wrapper">
        <h1>Vue-Text-Converter</h1>
        <v-textarea v-model="textInput" ref="textArea" outline autofocus :rows="15" clearable append-icon="content_copy" :append-icon-cb="handleCopy"></v-textarea>
        <v-chip>
          <v-avatar class="white"><b>{{wordCount}}</b></v-avatar>
          <b>Word Count</b>
        </v-chip>
        <v-chip>
          <v-avatar class="white"><b>{{characterCount}}</b></v-avatar>
          <b>Character Count</b>
        </v-chip>
        
        <div>
          <v-btn v-for="option in convertOptions" :key="option.name" @click="getOptionMethod(option.name)" outline round small color="primary">{{option.name}}  
          </v-btn>

          <v-menu offset-y>
            <v-btn slot="activator" outline round small color="primary">
              Delimited List
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in delimiterOptions" :key="item.name" @click="toDelimitedList(item.char)">
                <v-list-tile-title>
                  <small><b>{{item.name}} ({{item.char}})</b></small>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>

        <v-snackbar v-model="copied" :timeout="1000">
          <div style="margin:0 auto;">
            Copied!
          </div>
        </v-snackbar>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import cc from 'change-case';
import { convertOptions, delimiterOptions } from '@/constants';
export default {
  data: () => ({
    textInput: '',
    copied: false,
    convertOptions,
    delimiterOptions
  }),
  computed: {
    characterCount() {
      if (this.textInput) {
        return this.textInput.length;
      }
      return 0;
    },
    wordCount() {
      if (this.textInput) {
        return this.textInput.split(' ').length;
      }
      return 0;
    }
  },
  methods: {
    getOptionMethod(name) {
      const camelCaseName = cc.camel(name);
      const x = `to${cc.ucFirst(camelCaseName)}`;
      return this[x]();
    },
    handleCopy() {
      this.$refs.textArea.focus();
      document.execCommand('selectAll');
      this.copied = document.execCommand('copy');
    },
    toUpperCase() {
      this.textInput = cc.upper(this.textInput);
    },
    toLowerCase() {
      this.textInput = cc.lower(this.textInput);
    },
    toSentenceCase() {
      this.textInput = this.textInput
        .trim()
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    },
    toTitleCase() {
      this.textInput = cc.title(this.textInput);
    },
    toCamelCase() {
      this.textInput = cc.camel(this.textInput);
    },
    toPascalCase() {
      this.textInput = cc.pascal(this.textInput);
    },
    toHeaderCase() {
      this.textInput = cc.header(this.textInput);
    },
    toKebabCase() {
      this.textInput = cc.param(this.textInput);
    },
    toSnakeCase() {
      this.textInput = cc.snake(this.textInput);
    },
    toConstantCase() {
      this.textInput = cc.constant(this.textInput);
    },
    toDotCase() {
      this.textInput = cc.dot(this.textInput);
    },
    toPathCase() {
      this.textInput = cc.path(this.textInput);
    },
    toReverse() {
      this.textInput = this.textInput
        .split('')
        .reverse()
        .join('');
    },
    toColumnList() {
      this.textInput = this.textInput
        .split(',')
        .map(char => char.trimStart().trim())
        .join('\n');
    },
    toDelimitedList(char) {
      this.textInput = this.textInput.split('\n').join(char);
    }
  }
};
</script>


<style scoped>
button {
  text-transform: none !important;
}
.wrapper {
  text-align: center;
  padding: 30px;
  height: 100%;
  min-height: 100vh;
}
</style>
