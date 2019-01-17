const head = 'head-trainer', trainee = 'trainee' , trainer = 'trainer';
const permissions = {
    'getUsers': {
        all: ['head'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getUsers1': {
        all: ['head','trainee'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },  
}

function hasPermission(moduleName, role, permissionType) {
    if(permissions.hasOwnProperty(moduleName)) {
        if(permissions[moduleName]['all'].includes(role)) {
            console.key('true');
        }
        else {
            console.log(permissions[moduleName][permissionType].includes(role));
        }
    }
    else {
        console.log('false');
    }
    
        
}
hasPermission( 'getUsers','trainee', 'read');
hasPermission( 'getUsers1','trainer', 'write');
hasPermission( 'getUsers5','trainer', 'delete');