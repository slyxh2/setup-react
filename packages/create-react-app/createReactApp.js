const path = require('path');
const fs = require('fs-extra');

const { Command } = require('commander');
const chalk = require('chalk');
// import chalk from 'chalk';
const packageJSON = require('./package.json');

const spawn = require('cross-spawn');

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
    let scriptName = 'react-scripts';
    let templateName = 'pak-template'; //模板名字在这！！！
    const allDependencies = ['react', 'react-dom', scriptName, templateName];
    console.log('Installing packages. This might take a couple of minutes');
    console.log(
        `Installing ${chalk.cyan('react')}, ${chalk.cyan(
            'react-dom'
        )}, and ${chalk.cyan(scriptName)}${` with ${chalk.cyan(templateName)}`}...`
    );
    await install(root, allDependencies);
    let data = [root, name, true, originalDirectory, templateName];
    let source = `
    const init = require('react-scripts/scripts/init.js');
    init.apply(null, JSON.parse(process.argv[1]));
    `;
    await executeNodeScript({ cwd: process.cwd() }, data, source);
    console.log('Done!');
    process.exit(0);
}
async function executeNodeScript({ cwd }, data, source) {
    return new Promise((resolve) => {
        const child = spawn(
            process.execPath,
            ['-e', source, '--', JSON.stringify(data)],
            { cwd, stdio: 'inherit' }
        );
        child.on('close', resolve);
    });
}
async function install(root, allDependencies) {
    return new Promise((resolve) => {
        const command = 'yarnpkg';
        const args = ['add', '--exact', ...allDependencies, '--cwd', root];
        console.log(command, args);
        const child = spawn(command, args, { stdio: 'inherit' });
        child.on('close', resolve);
    });
}


module.exports = { init }