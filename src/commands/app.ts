import {Command, flags} from '@oclif/command'
import { existsSync } from 'fs';
import { join } from 'path';
import Generator from '../generator'
import { cwd } from '../utils';

export default class App extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ limmem App [NAME] [SUBNAME]`,
  ]
  static args = [
    { name: 'name', require: true, description: '组件名称' },
    { name: 'subName', require: false, description: '子组件名称' }
  ];
  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    const { args } = this.parse(App);
    const { name, subName } = args;
    const srcPath = join(`${cwd()}`, 'src/component');
    if (!existsSync(srcPath)) {
      this.error('src目录不存在，请cd到正确的文件路径', { code: '-1' });
    }
    const gen = new Generator({
      name,
      subName,
      absoluteSrc: srcPath
    });
    gen.run();
  }
}
