import ProjectCard from "./project"
import covid from '../Assets/Images/covid.mp4'
import f_system_c from '../Assets/Images/f_system_c.mp4'
import pacmunp from '../Assets/Images/pacmun.png'
import pacmunw from '../Assets/Images/pacmun.webp'
// import todo from '../Assets/Images/todo.mp4'
import sync from '../Assets/Images/sync.mp4'
import portfolio from '../Assets/Images/portfolio.mp4'
import spotify from '../Assets/Images/spotify.mp4'
// import space from '../Assets/Images/space.mp4'
import threads from '../Assets/Images/simple_threads_c.mp4'
import wordle from '../Assets/Images/wordle.mp4'
import pluginp from '../Assets/Images/plugin.png'
import pluginw from '../Assets/Images/plugin.webp'

export const Projects = ({dark}) => {
    const projects = [
        // {
        //     imgpng: '',
        //     imgweb: '',
        //     vid: space,
        //     source: '',
        //     link: 'https://spacestagram-tvut.herokuapp.com',
        //     tools: 'React.js, Bootstrap, REST APIs',
        //     name: 'Spacestagram',
        //     desc: 'Uses NASA\'s image of the day API in order to display images of the day over a set range with the ability to like or unlike an image and expand the description.'
        // },
        {
            imgpng: '',
            imgweb: '',
            vid: spotify,
            source: '',
            link: 'https://mixerify.ml',
            tools: 'React.js, Express, Tailwind CSS, Spotify API',
            name: 'Mixerify',
            desc: 'Developed a front end to allow a user to browse their Spotify library to pick playlists to send to our ML model, then developed a backend facilitating authorization and operating the Python ML model.'
        },
        {
            imgpng: '',
            imgweb: '',
            vid: f_system_c,
            source: '',
            link: '',
            tools: 'C, FUSE',
            name: 'Simple File System',
            desc: 'Implementation of a simple file system written in C. Can be mounted using FUSE and works as expected as a basic file system. Implements an I-Node structure for data storage. The file system stores a directory table, I-Node table, bitmap of free data blocks and a superblock to disk, as well as keeping them cached in memory when active to improve performance. '
        },
        {
            imgpng: '',
            imgweb: '',
            vid: wordle,
            source: '',
            link: 'https://wordle-reactjs.herokuapp.com',
            tools: 'React.js, Tailwind CSS',
            name: 'Wordle',
            desc: 'Implementation of Wordle. Has a dictionary of all the valid Wordle words that it randomly selects a word from and validates user input against. Uses a collection of oncapture events to automatically move the user through the interface.'
        },
        {
            imgpng: '',
            imgweb: '',
            vid: covid,
            source: '',
            link: '',
            tools: 'Python, Jupyter, Azure',
            name: 'COVID Sentiment Analysis',
            desc: 'Scraped comments on YouTube videos that matched keywords and location parameters then analyzed the comments using a trained sentiment analysis model to examine different COVID sentiments by region.'
        },
        {
            imgpng: pacmunp,
            imgweb: pacmunw,
            vid: '',
            source: '',
            link: 'https://pacmun.tristans.ca',
            tools: 'PHP, CSS, JS, Lighthouse',
            name: 'PACMUN Website',
            desc: 'A complete overhaul of the PACMUN website with an emphasis on fast loading times. Optimized the home page to load to usable in under 3 seconds on a 3G connection. Rebuilt committees pages to serve out of an object-orientated PHP database using mod-rewrite.'
        },
        {
            imgpng: '',
            imgweb: '',
            vid: portfolio,
            source: 'https://github.com/tvut/portfolio-website-react',
            link: '',
            tools: 'React.js, CSS',
            name: 'Portfolio Website',
            desc: 'Built using React.js to allow for modular components and a dark mode that uses local browser storage. Vanilla CSS and modern web techniques were used to speed up page load.'
        },
        {
            imgpng: pluginp,
            imgweb: pluginw,
            vid: '',
            source: '',
            link: 'https://x.tristans.ca',
            tools: 'PHP, CSS, Wordpress',
            name: 'WP Masonry Gallery',
            desc: 'A rewrite of a Wordpress gallery plugin with the goal of generating and serving images with resolution more correctly suited for the device screen size to save bandwidth and server load.'
        },
        {
            imgpng: '',
            imgweb: '',
            vid: sync,
            source: '',
            link: 'https://github.com/tvut/tuya-sync',
            tools: 'Python',
            name: 'TuyaSync',
            desc: 'Program that would sample what was on a computer screen then change linked smart lights color to the average color from the screen.'
        },
        // {
        //     imgpng: '',
        //     imgweb: '',
        //     vid: todo,
        //     source: '',
        //     link: '',
        //     tools: 'React.js, Bootstrap',
        //     name: 'React ToDo',
        //     desc: 'Simple To-do app written in React that takes advantage of local browser storage in order to store and keep track of to-dos.'
        // },
        {
            imgpng: '',
            imgweb: '',
            vid: threads,
            source: '',
            link: '',
            tools: 'C, pthreads',
            name: 'User Thread Scheduling Library',
            desc: 'Implementation of a user thread scheduling library with an I/O thread and either one or two non-I/O execution threads. Makes use of context switching and several queues in order to effectively swap contexts between threads.'
        }
      ]
    return (
        <div className='overflow'>
            {projects.map((p, index) => (
                        <ProjectCard
                            key={index}
                            imgpng={p.imgpng}
                            imgweb={p.imgweb}
                            vid={p.vid}
                            source={p.source}
                            link={p.link}
                            tools={p.tools}
                            name={p.name}
                            desc={p.desc}
                            dark={dark}
                        />
                ))}
        </div>
    )
}

export default Projects