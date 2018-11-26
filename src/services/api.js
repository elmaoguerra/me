export const drawerWidth = 250;
export const AboutMeSection = {
    title: 'Hola soy Mauricio Guerra',
    profile: 'Colombiano de nacimiento e Ingeniero Telemático como profesional, con '
        + 'experiencia en desarrollo de software y programación. Soy una persona que cuento con la habilidad de aprender y adaptarme a las labores a cargo; serio y responsable con las actividades que me sean encomendadas, tengo buenas relaciones interpersonales, se me facilita el trabajo en equipo.',
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
        href: "#1",
        title: "Acerca de"
    },
    {
        href: "#2",
        title: "Experiencia"
    }
]

export const StudySection = {
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
            centerName: "Universidad Distrital Francisco José de Caldas",
            diploma: "Ingeniero en Telemática",
            formal: true,
            city: "Bogotá, D.C."
        }
    ]
}

export const SoftSkillSection = {
    title: "Habilidades en desarrollo de Software",
    skills:[
        {name: "Programación Web con C#:", completed: 80},
        {name: "Programación de escritorio C#:", completed: 80},
        {name: "Pruebas Unitarias:", completed: 70},
        {name: "Patrones de diseño:", completed: 70},
        {name: "Comandos y despliegue sobre Linux:", completed: 60},
        {name: "React y React-Native:", completed: 50},
        {name: "Angular y Ionic:", completed: 50},
        {name: "Machine Learning con Python:", completed: 50},
    ]
}

