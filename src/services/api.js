export const drawerWidth = 250;
export const AboutMeSection = {
    id: 'about-me',
    title: 'Hola soy Mauricio Guerra',
    profile: 'Colombiano de nacimiento e Ingeniero Telemático como profesional, con ' +
        'experiencia en desarrollo de software más en backend que en frontend. Soy una persona que cuento con la habilidad de aprender y adaptarme fácilmente. ' +
        'He desarrollado en C# con ASP.MVC, WPF y ASP.NET Core. Me gusta Python y lo utilizo para análisis de datos y machine learning en tiempo libre.',
    interest: "Apasionado por aprender cada día algo nuevo acerca de tecnologías disruptivas. Interesado en React, Blockchain, inteligencia artificial y aprendizaje de máquina para la realización de actividades más eficientes.",
    aboutItems: [{
            title: 'Nombre',
            description: 'Mauricio Andrés Guerra C.'
        },
        {
            title: 'Edad',
            description: calcMyAge() + ' Años.'
        },
        {
            title: 'Email',
            description: 'maoguerra007@hotmail.com'
        },
        {
            title: 'Tarjeta Profesional',
            description: 'Si, expedida en octubre de 2018'
        }
    ]
}

export const MenuItems = [{
        href: "#about-me",
        title: "Acerca de"
    },
    {
        href: "#studies",
        title: "Estudios realizados"
    },
    {
        href: "#skills",
        title: "Habilidades"
    },
    {
        href: "#projects",
        title: "Proyectos"
    }
]

export const StudySection = {
    id: 'studies',
    title: "Estudios realizados",
    studies: [{
            year: "2018",
            centerName: "Universidad Distrital Francisco José de Caldas",
            diploma: "Ingeniero en Telemática",
            formal: true,
            city: "Bogotá, D.C."
        },
        {
            year: "2018",
            centerName: "Federación Colombiana de la Industria de Software y Tecnologías - FEDESOFT",
            diploma: "Desarrollador FullStack y Aplicaciones Híbridas ",
            formal: false,
            city: "Bogotá, D.C."
        },
        {
            year: "2018",
            centerName: "Coursera",
            diploma: "GCP Big Data and Machine Learning Fundamentals",
            formal: false,
            city: "Google Cloud"
        },
        {
            year: "2018",
            centerName: "Politécnico Grancolombiano - Massachusetts Institute of Technology",
            diploma: "Certificado en Big Data",
            formal: false,
            city: "Bogotá, D.C."
        },
        {
            year: "2018",
            centerName: "Platzi",
            diploma: "Carrera de Inteligencia Artificial, Big Data y Data Science",
            formal: false,
            city: "Bogotá, D.C."
        },
        {
            year: "2015",
            centerName: "Universidad Distrital Francisco José de Caldas",
            diploma: "Tecnólogo en Sistematización de Datos",
            formal: true,
            city: "Bogotá, D.C."
        },
        // {
        //     year: "2008",
        //     centerName: "I.E.D. Gustavo Morales Morales",
        //     diploma: "Bachiller Académico",
        //     formal: true,
        //     city: "Bogotá, D.C."
        // }
    ]
}

export const SoftSkillSection = {
    id: 'skills',
    title: "Habilidades en desarrollo de Software",
    description: "En los años de experiencia he adquirido habilidades en diferentes lenguajes de programación, tecnologías, frameworks tanto en frontend como en backend.",
    skills: [{
            name: "Programación web con C#",
            completed: 80
        },
        {
            name: "Programación de escritorio C#",
            completed: 80
        },
        {
            nameprojects: "Pruebas unitarias",
            completed: 70
        },
        {
            name: "Patrones de diseño",
            completed: 70
        },
        {
            name: "Comandos y despliegue sobre Linux",
            completed: 65
        },
        {
            name: "Docker",
            completed: 65
        },
        {
            name: "React y React-Native",
            completed: 60
        },
        {
            name: "Machine learning con Python",
            completed: 60
        },
        {
            name: "Django",
            completed: 55
        },
        {
            name: "Angular y Ionic",
            completed: 50
        },
    ]
}

export const ProjectsSection = {
    id: 'projects',
    title: "Últimos proyectos desarrollados",
    projects: [{
    id: 1,
    title: "Fila única inteligente",
    description: "Solución de bajo costo para automatización de fila única en supermercados.",
    goals: [
        "REST API en .Net Core con Postgres en Linux.",
        "Implementación de MQTT en Javascript y Python.",
        "Operación offline.",
        "Despliegue en docker.",
        "Sincronización de estadísticas.",
        "React y amcharts para gráficas."
    ]
}, {
    id: 2,
    title: "Dll para dispositivos de pago cctalk",
    description: "API para manejo de efectivo en monederos mediante el protocolo cctalk.",
    goals: [
        "Comunicación serial en USB y RS232 para: Smart Hopper, Eagle CPI, Bulk Coin Recycler (BCR)",
        "Algoritmo de pago utilizando distribución de probabilidad.",
        "Implementación de NLog para la traza de transacciones.",
        "Manejo asíncrono de tareas y propagación de eventos.",
        "Implementación para moneda colombiana (COP) y peruana (PEN)."
    ]
}, {
    id: 3,
    title: "Sistema de turnos",
    description: "Conjunto de aplicaciones de escritorio y web para la dispensación y atención de turnos.",
    goals: [
        "Implementación de SignalR en C# y Javascript.",
        "REST API en .Net Core con SQL Server y Postgres.",
        "Operación offline en Windows y Linux.",
        "React como librería para el front-end.",
        "Despliegue de contenidos en Linux.",
        "Implementación de norma ISO 29110."
    ]
}]}

function calcMyAge() {
    const today = new Date()

    let age = today.getFullYear() - 1992
    if (today.getMonth() != 12)
        age -= 1

    return age;
}