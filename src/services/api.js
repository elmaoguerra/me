export const drawerWidth = 250;
export const AboutMeSection = {
    id: 'about-me',
    title: 'Hola soy Mauricio Guerra',
    profile: 'Colombiano de nacimiento e Ingeniero Telemático como profesional, con '
        + 'experiencia en desarrollo de software y programación. Soy una persona que cuento con la habilidad de aprender y adaptarme a las labores a cargo; serio y responsable con las actividades que me sean encomendadas, tengo buenas relaciones interpersonales, se me facilita el trabajo en equipo.',
    interest: "Apasionado por aprender cada día algo nuevo acerca de tecnologías disruptivas. Interesado en Blockchain, inteligencia artificial y aprendizaje de máquina para automatizar procesos y la realización de actividades más eficientes de las que hacemos los humanos.",
    aboutItems: [
        {
            title: 'Nombre',
            description: 'Mauricio Andrés Guerra C.'
        },
        {
            title: 'Edad',
            description: (new Date().getFullYear() - 1992) + ' Años.'
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

export const MenuItems = [
    {
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
        href: "#2",
        title: "Proyectos"
    }
]

export const StudySection = {
    id: 'studies',
    title: "Estudios realizados",
    studies: [
        {
            year: "2008",
            centerName: "I.E.D. Gustavo Morales Morales",
            diploma: "Bachiller Académico",
            formal: true,
            city: "Bogotá, D.C."
        },
        {
            year: "2015",
            centerName: "Universidad Distrital Francisco José de Caldas",
            diploma: "Tecnólogo en Sistematización de Datos",
            formal: true,
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
            year: "2018",
            centerName: "Politécnico Grancolombiano - Massachusetts Institute of Technology",
            diploma: "Certificado en Big Data",
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
            centerName: "Federación Colombiana de la Industria de Software y Tecnologías - FEDESOFT",
            diploma: "Desarrollador FullStack y Aplicaciones Híbridas ",
            formal: false,
            city: "Bogotá, D.C."
        },
        {
            year: "2018",
            centerName: "Universidad Distrital Francisco José de Caldas",
            diploma: "Ingeniero en Telemática",
            formal: true,
            city: "Bogotá, D.C."
        }
    ]
}

export const SoftSkillSection = {
    id: 'skills',
    title: "Habilidades en desarrollo de Software",
    description: "En los años de experiencia he adquirido habilidades en diferentes lenguajes de programación, tecnologías, frameworks tanto en frontend como en backend.",
    skills:[
        {name: "Programación Web con C#:", completed: 80},
        {name: "Programación de escritorio C#:", completed: 80},
        {name: "Pruebas Unitarias:", completed: 70},
        {name: "Patrones de diseño:", completed: 70},
        {name: "Comandos y despliegue sobre Linux:", completed: 65},
        {name: "React y React-Native:", completed: 60},
        {name: "Angular y Ionic:", completed: 50},
        {name: "Machine Learning con Python:", completed: 50},
    ]
}

