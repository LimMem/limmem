import { readFileSync, statSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
const mkdirp = require('mkdirp');
const Mustache = require("mustache");


export function isDirectoryAndExist(path: string) {
  return existsSync(path) && statSync(path).isDirectory();
}

export const cwd = ():string => {
  return process.cwd();
}

export function absSrcPath() {
  const cwd = process.cwd();
  let path;
  if (isDirectoryAndExist(join(cwd, 'src'))) {
    path =  join(cwd, 'src');
  }
  return path;
}

export function copyTpl(opts: {
  templatePath: string;
  target: string;
  context: any
}) {
  const tpl = readFileSync(opts.templatePath, 'utf-8');
  const content = Mustache.render(tpl, opts.context);
  mkdirp.sync(dirname(opts.target));
  writeFileSync(opts.target, content, 'utf-8');
}

export function appendFileToText(opts: {
  targetFile: string,
  text: string;
}){
  if (!existsSync(opts.targetFile)) {
    writeFileSync(opts.targetFile, opts.text);
    return ;
  }
  let fileContent = readFileSync(opts.targetFile, 'utf-8');
  fileContent += opts.text;
  writeFileSync(opts.targetFile, fileContent, 'utf-8');
}
