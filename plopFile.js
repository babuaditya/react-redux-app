import {pascalCase,camelCase,snakeCase,constantCase,capitalCase,dotCase,pathCase} from 'change-case'

export default function (plop) {
    //example my component name
    plop.setHelper('pascalCase', text => pascalCase(text));   // MyComponentName
    plop.setHelper('camelCase', text => camelCase(text));     // myComponentName
    plop.setHelper('snakeCase', text => snakeCase(text));     // my_component_name
    plop.setHelper('constantCase', text => constantCase(text)); // MY_COMPONENT_NAME
    plop.setHelper('titleCase', text => capitalCase(text));   // My Component Name
    plop.setHelper('dotCase', text => dotCase(text));         // my.component.name
    plop.setHelper('pathCase', text => pathCase(text));       // my/component/name

    plop.setGenerator('basics', {
        description: 'this is to create a component',
        prompts: [
            {
                type:"input",
                name:'name',
                message:"Component name Please",
            }
        ], 
        actions: [
            {
                type:'add',
                path:'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile:'templates/component/component.hbs'
            },
            {
                type:'add',
                path:'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
                templateFile:'templates/component/styles.hbs'
            },
            {
                type:'add',
                path:'src/components/{{pascalCase name}}/index.ts',
                templateFile:'templates/component/index.hbs'
            },

        ]  
    });
};
