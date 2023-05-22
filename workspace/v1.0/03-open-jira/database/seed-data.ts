interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: "Pendiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum accusamus dolorem, veniam nobis nam optio odit exercitationem consequatur illo necessitatibus esse libero pariatur delectus qui cumque natus officia sint!",
            status: 'pending',
            createAt: Date.now()
        },
        {
            description: "En progreso Praesentium eum accusamus dolorem, veniam nobis nam optio odit exercitationem consequatur illo necessitatibus esse libero pariatur delectus qui cumque natus officia sint!",
            status: 'in-progress',
            createAt: Date.now() - 1000000
        },
        {
            description: "Terminado Esse libero pariatur delectus qui cumque natus officia sint!",
            status: 'finished',
            createAt: Date.now() - 100000000
        },
    ],

}