const path = require('path');
const fs = require('fs-extra');

const { Command } = require('commander');
const chalk = require('chalk');
// import chalk from 'chalk';
const packageJSON = require('./package.json');
const { fstat } = require('fs-extra');
const { runMain } = require('module');


async function init() {
    let projectName;
    new Command(packageJSON.name)
        .version(packageJSON.version)
        .argument('<project-dircetory>')
        .usage(`${chalk.green('<project-dircetory>')}`)
        .action((name) => {
            projectName = name;
        }).parse(process.argv);
    console.log(projectName);
    await creatApp(projectName);
};

async function creatApp(name) {
    let root = path.resolve(name);
    fs.ensureDirSync(name);
    console.log(`Creating a new React app in ${chalk.green(root)}`);
    const packageJSON = {
        name: name,
        version: '0.1.0',
        private: true
    };
    fs.writeFileSync(
        path.join(root, 'package.json'),
        JSON.stringify(packageJSON, null, 2)
    );
    const originalDirectory = process.cwd();
    process.chdir(root); // change working directory to root
    console.log(name);
    console.log(originalDirectory);
    console.log(root);
    await run(root, name, originalDirectory);
}

async function run(root, name, originalDirectory) {

}


module.exports = { init }