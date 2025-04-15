export default function (plop) {
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
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
                path:'src/components/{{name}}.tsx',
                templateFile:'templates/component.hbs'
            }
        ]  
    });
};
