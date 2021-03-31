import {Command, flags} from '@oclif/command'
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { cwd, absSrcPath, copyTpl} from '../utils';
const assert = require('assert');
const lodash = require('lodash');

export default class Edit extends Command {
  static description = '生成edit编辑器'

  static examples = [
    `$ limmem edit [NAME] [TEXT]`,
  ]
  static args = [
    { name: 'name', require: true, description: '组件' },
    { name: 'text', require: false, description: '组件名称' }

  ];
  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  // 增加mobileCompTodo  路径 src/editor/Editor/constant/mobileCompTodo.js
  addMobileCompTodo(srcPath:string, name:string, text:string) {
    // 格式：
    // YearMonthView: {
    //   todoProps: ["", "", ""],
    //   todoEvents: [""],
    //   todoStyles: [
    //     "textAlign",
    //     "padding",
    //     "margin",
    //     "width",
    //     "height",
    //     "backgroundColor",
    //     "borderColor",
    //     "customStyle",
    //   ],
    // },

    ///// 待添加区域
    const componentName = lodash.upperFirst(name);
    const Str = `${componentName}: {
    todoProps: [""],
    todoEvents: [""],
    todoStyles: [
      "textAlign",
      "padding",
      "margin",
      "width",
      "height",
      "backgroundColor",
      "borderColor",
      "customStyle",
    ],
  },
  //待添加区域
`
    const filePath = join(srcPath, '/editor/Editor/constant/mobileCompTodo.js');
    let content = readFileSync(filePath, 'utf-8');
     content = content.replace("//待添加区域", Str);
    writeFileSync(filePath, content);

  }

  // 增加mobileCompTodo  路径 src/editor/constant/mobileCompList.js
  addMobileCompList(srcPath:string, name:string, text:string) {
    ///// 待添加区域1
     ///// 待添加区域2
    // {
    //   label: "Flex布局",
    //   compName: "Flex",
    // },
    // 提示需要手动复制
    const componentName = lodash.upperFirst(name);
    const Str1 = `import ${componentName} from "./mobileComp/${lodash.lowerFirst(name)}";
//待添加区域1`;
    const str2 = `${componentName},
//待添加区域2`;
    const str3 = `{
  label: "${text}",
  compName: "${componentName}",
},
//待添加区域3`

    const filePath = join(srcPath, '/editor/constant/mobileCompList.js');
    let content = readFileSync(filePath, 'utf-8');
    content = content.replace("//待添加区域1", Str1);
    content = content.replace("//待添加区域2", str2);
    content = content.replace("//待添加区域3", str3);
    writeFileSync(filePath, content);
  }

  // src/editor/mobileComponents/plus
  addPlus(srcPath:string, name:string, text:string) {
    // 增加模板
    const componentName = lodash.upperFirst(name);

    const tempPath = join(srcPath, '/editor/mobileComponents/plus');
    copyTpl({
      templatePath: join(__dirname, '../../template/edit/mobileComponents/mobileComponents.tpl'),
      target: join(tempPath, `${componentName}/${componentName}.jsx`),
      context: {
        mobileComponents: componentName,
        text
      }
    });

    copyTpl({
      templatePath: join(__dirname, '../../template/edit/mobileComponents/index.tpl'),
      target: join(tempPath, `${componentName}/index.js`),
      context: {
        mobileComponents: componentName,
        text
      }
    });

  }

// src/editor/constant/mobileComp   增加模板文件
  addMobileComp(srcPath:string, name:string, text:string) {
    const componentName = lodash.lowerFirst(name);
    copyTpl({
      templatePath: join(__dirname, '../../template/edit/mobileComp.tpl'),
      target: join(srcPath, `/editor/constant/mobileComp/${componentName}.js`),
      context: {
        mobileComponents: lodash.upperFirst(name),
        text
      }
    });
  }

  addIndex(srcPath:string, name:string) {
    //待添加区域
    const targetPath = join(srcPath, '/editor/mobileComponents/index.js');
    const text = `${lodash.upperFirst(name)}: MyLoadablePlus('${lodash.upperFirst(name)}'),
    //待添加区域`
    let content = readFileSync(targetPath, 'utf-8');
    content = content.replace("//待添加区域", text);
    writeFileSync(targetPath, content);
  }

  mobileTodoLists(srcPath:string, name:string) {
    const componentName = lodash.lowerFirst(name);
    const targetPath = join(srcPath, `/edit/Editor/constant/mobileTodoLists/${componentName}.js`);
    copyTpl({
      templatePath: join(__dirname, '../../template/edit/mobileTodoLists.tpl'),
      target: targetPath,
      context: {
      }
    });
  }


  async run() {
    const { args } = this.parse(Edit);
    console.log('tag', args)
    const { name,text } = args;
    const srcPath = absSrcPath();
    if (!srcPath) {
      this.error('src目录不存在，请cd到正确的文件路径', { code: '-1' });
    }
    this.addMobileCompTodo(srcPath, name, text);
    this.addMobileCompList(srcPath, name, text);
    this.addPlus(srcPath, name, text);
    this.addMobileComp(srcPath, name, text);
    this.mobileTodoLists(srcPath, name);
    this.addIndex(srcPath, name)
  }
}
