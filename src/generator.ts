import { existsSync } from 'fs';
import { join, basename } from 'path';
import { chartsSubFiles, chartsFiles } from './data';
import { appendFileToText, copyTpl } from './utils';
const assert = require('assert');
const lodash = require('lodash');

class Generator {
  constructor(opts: {
    name: string;
    subName: string;
    absoluteSrc: string;
  }) {
    this.name = opts.name;
    this.subName = opts.subName;
    this.absoluteSrc = opts.absoluteSrc;
  }
  name: string;
  subName: string;
  absoluteSrc: string;

  createComponent() {
    const name = this.name;
    const componentName = lodash.upperFirst(name);
    const componentsDir = join(`${this.absoluteSrc}`, componentName);
    if (existsSync(componentsDir)) {
      assert(
        false,
        '组件已存在，请勿重复创建。请修改组件名称，以免覆盖原组件',
      );
    }

    const prefixCls = name.toLowerCase();
    const context = {
      componentName,
      prefixCls,
    };

    const prefixFilePath = '../template/index';
    chartsFiles.forEach((item: { template: string; targetPath: string; }) => {
      copyTpl({
        templatePath: join(__dirname, prefixFilePath, item.template),
        target: join(
          `${this.absoluteSrc}`,
          `${componentName}`,
          item.targetPath,
        ),
        context,
      });
    });
    this.modifyExportIndex(componentName);
  }

  modifyExportIndex(componentName: string) {
    const target = join(
      `${this.absoluteSrc}`, 'index.ts'
    )
    appendFileToText({
      targetFile: target,
      text: '\n'+ `export { default as ${componentName} } from './${componentName}';`
    });
  }

  createSubComponent() {
    const name = this.name;
    const subName = this.subName;
    const componentName = lodash.upperFirst(name);
    const componentsDir = join(`${this.absoluteSrc}`, componentName);
    if (!existsSync(componentsDir)) {
      this.createComponent();
    }

    const subFileName = basename(subName);
    const subComponentName = lodash.upperFirst(subFileName);
    const subComponentsDir = join(
      `${this.absoluteSrc}`,
      componentName,
      `components/${subComponentName}`,
    );
    if (existsSync(subComponentsDir)) {
      assert(
        false,
        `${componentName}:${subComponentName}组件已存在，请勿重复创建。请修改组件名称，以免覆盖原组件`,
      );
    }
    const prefixCls = subComponentName.toLowerCase();
    const context = {
      componentName: subComponentName,
      prefixCls,
    };

    const prefixFilePath = '../template/sub';
    chartsSubFiles.forEach((item: { template: string; targetPath: string; }) => {
      copyTpl({
        templatePath: join(__dirname, prefixFilePath, item.template),
        target: join(
          `${this.absoluteSrc}`,
          `${componentName}/`,
          `components/${subComponentName}`,
          item.targetPath,
        ),
        context,
      });
    });
  }


  run() {
    if (!this.absoluteSrc) {
      console.error('src目录不存在，请cd到正确的文件路径');
      process.exit(-1);
    }
    if (this.subName) {
      this.createSubComponent();
    } else {
      this.createComponent();
    }
  }

}

export default Generator;
