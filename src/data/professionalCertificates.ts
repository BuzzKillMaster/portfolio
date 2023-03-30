import ProfessionalCertificate from "@/types/ProfessionalCertificate";
import ProfessionalCertificates from "@/enums/ProfessionalCertificates";

const professionalCertificates: {[key: string]: ProfessionalCertificate} = {
    [ProfessionalCertificates.Frontend]: {
        title: "Meta Front-End Developer",
        category: "Front-End Development",
        source: "https://www.coursera.org/account/accomplishments/specialization/certificate/RVRA76493QVX",
        timeline: "September 2022 - March 2023",
        description: "I possess a strong foundation in HTML, CSS, and JavaScript and am proficient in utilizing various frameworks and tools such as React, Next, and Tailwind. Additionally, I am well-equipped to adapt to the needs of any project, demonstrating proficiency in other frameworks such as Vue and Angular when required.",
        skills: [
            "Proficiently create responsive websites utilizing HTML for effective content structuring, CSS for visually engaging style, and JavaScript for the development of interactive user experiences.",
            "Demonstrating expertise in utilizing React in conjunction with various JavaScript libraries and frameworks to create efficient and robust web applications.",
            "Experienced in leveraging the Bootstrap CSS Framework to effectively design webpages, with a strong understanding of version control and collaboration tools such as GitHub repositories.",
        ]
    },
    [ProfessionalCertificates.Backend]: {
        title: "Meta Back-End Developer",
        category: "Back-End Development",
        source: null,
        timeline: "September 2022 - Present",
        description: "In addition to front-end development, I specialize in designing, implementing, and maintaining efficient back-end systems and automations using robust tools such as Django. My expertise extends to creating high-performing APIs and full-stack applications.",
        skills: [
            "Proficient in various programming systems, including Python, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML, and other relevant technologies.",
            "Demonstrating a solid foundation in programming skills and a strong ability to apply these skills effectively to solve complex problems.",
        ]
    },
    [ProfessionalCertificates.Database]: {
        title: "Meta Database Engineer",
        category: "Database Engineering",
        source: null,
        timeline: "September 2022 - Present",
        description: "I possess a strong understanding of database systems, beyond the limitations of a specific ORM or framework. My expertise extends to creating complex queries and optimizing data storage, ensuring data integrity and security.",
        skills: [
            "Proficiently utilize SQL syntax to interact with databases and gain familiarity with relevant database systems.",
            "Capable of creating databases from scratch and effectively managing and optimizing them to ensure optimal performance.",
            "Proficiently develop Python-based applications that connect clients to MySQL databases through effective utilization of database-driven programming techniques.",
            "Possess a strong working knowledge of advanced data modeling concepts to ensure efficient and effective database design.",
        ]
    },
    [ProfessionalCertificates.Android]: {
        title: "Meta Android Developer",
        category: "Android Development",
        source: null,
        timeline: "September 2022 - Present",
        description: "I possess the capability to proficiently develop native mobile applications for Android utilizing Kotlin and Jetpack Compose, as well as cross-platform applications using React Native. My expertise enables me to rapidly develop complex functionalities and custom implementations, ensuring that I am not limited by the work done by others.",
        skills: [
            "Proficiently programming in Kotlin, adhering to best practices for design, and effectively utilizing the fundamentals of user interface creation with Jetpack Compose.",
            "Demonstrating the ability to build native Android applications using Android Studio, managing the application's lifecycle, and ensuring optimal performance and stability.",
            "Proficiently creating cross-platform mobile applications using React Native, employing the best practices and techniques to ensure efficient and effective development.",
        ]
    },
    [ProfessionalCertificates.iOS]: {
        title: "Meta iOS Developer",
        category: "iOS Development",
        source: null,
        timeline: "September 2022 - Present",
        description: "I possess the capability to proficiently develop native applications for iOS using Swift and Swift UI, as well as cross-platform applications using React Native. My expertise in Swift programming language enables me to create complex applications without worrying about limitations imposed by existing frameworks.",
        skills: [
            "Possessing a strong foundation in programming fundamentals, effectively creating user interfaces (UI) utilizing Swift UI, and adhering to best practices in UI design.",
            "Demonstrating the ability to create robust applications for iOS systems, proficiently managing their lifecycles to ensure optimal performance and stability.",
            "Proficiently publishing, deploying, and maintaining iOS applications, as well as cross-platform applications utilizing React Native, to ensure efficient and effective deployment and maintenance of mobile applications.",
        ]
    },
    // [ProfessionalCertificates.Marketing]: {
    //     title: "Meta Social Media Marketing",
    //     category: "Social Media Marketing",
    //     source: null,
    //     timeline: "September 2022 - Present",
    //     description: "Marketing campaigns, customer segment analysis, persona creation, you name and I probably know how to do it. I'm trained in using Meta Ads Manager to deliver targeted advertising, regardless of its purpose, as well as creating and interacting with an online following.",
    //     skills: [
    //         "Establishing an online presence, building a following, and managing social media accounts.",
    //         "Developing effective social media posts and creating a strong social media brand presence.",
    //         "Creating Facebook and Instagram ad campaigns in Meta Ads Manager that drive business results.",
    //         "Learning to evaluate and interpret the results of social posts and advertising campaigns.",
    //     ]
    // },
    // [ProfessionalCertificates.Analytics]: {
    //     title: "Meta Marketing Analytics",
    //     category: "Marketing Analytics",
    //     source: null,
    //     timeline: "September 2022 - Present",
    //     description: "Data drives results and I know how to gather, analyze and visualize data using tools like Pandas and Tableau, while simultaneously using the collected data to drive business, advertising and marketing decisions that result in improved ROAS, ROI and customer satisfaction.",
    //     skills: [
    //         "Collecting, sorting, evaluating, and visualizing marketing data.",
    //         "Summarizing and analyzing data using marketing analytics methods.",
    //         "Designing experiments and testing hypotheses to evaluate advertising effectiveness.",
    //         "Using Meta Ads Manager to test ad effectiveness and evaluate the results.",
    //     ]
    // },
    // [ProfessionalCertificates.Upcoming]: {
    //     title: "Upcoming Certificates",
    //     category: "Upcoming Certificates",
    //     timeline: "Coming soon",
    //     description: "It doesn't matter how much I know or how good I am, there will always be more to learn and I'll be right there to learn it all. My education is a lifelong project and something that I value quite highly. It is with that in mind that I maintain subscriptions to various online learning institutions and have new courses and certifications already lined up. The following are the certificates that I will be completing before the end of the year.",
    //     skills: [
    //         "IBM DevOps and Software Engineering Professional Certificate",
    //         "IBM Cybersecurity Analyst Professional Certificate",
    //         "IBM Machine Learning Professional Certificate",
    //         "IBM AI Engineering Professional Certificate",
    //         "IBM Applied AI Professional Certificate",
    //     ]
    // },
}

export default professionalCertificates