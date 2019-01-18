const head = "head-trainer",
    trainee = "trainee",
    trainer = "trainer";
const permissions = {
    getUsers: {
        all: [head],
        read: [trainee, trainer],
        write: [trainer],
        delete: []
    },
    getUsers1: {
        all: [head, trainee],
        read: [trainee, trainer],
        write: [trainer],
        delete: []
    }
};

export { permissions, head, trainee, trainer };
