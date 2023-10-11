import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import ro from '../img/ro.jpg'


export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">About Me</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rodrigo Muñoz Delaporte</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Self driven Software Developer
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
            src={ro}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                As a self-taught software developer, I have cultivated a diverse and comprehensive skill set, making me proficient in various cutting-edge technologies and tools that drive modern software development. With a strong foundation in web and application development, I have honed my skills in JavaScript, Python, React.js, Django, NoSQL databases, PostgreSQL, Docker, Kubernetes, and GitHub Actions.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">💼 My Expertise:</h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" >☕ --| 🐍</span>
                  <span>
                    <strong className="font-semibold text-gray-900"> JavaScript &  Python:</strong> Proficient in both front-end and back-end development, I utilize JavaScript and Python to create responsive and efficient web applications, leveraging their versatility for a wide range of projects.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">⚛️</span>
                  <span>
                    <strong className="font-semibold text-gray-900">React.js: </strong> 
                      I have a deep understanding of React.js, allowing me to build interactive, user-friendly, and serverless web applications, ensuring a seamless user experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">🌐</span>
                  <span>
                    <strong className="font-semibold text-gray-900">Django: </strong> 
                      With expertise in Django, I have developed robust and scalable back-end systems, implementing secure and efficient data handling and API integration.
                      </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">🌿</span>
                  <span>
                    <strong className="font-semibold text-gray-900">Celery: </strong> 
                    I'm well-versed in Celery for task queuing, making sure background processes run smoothly.
                    </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">🤖</span>
                  <span>
                    <strong className="font-semibold text-gray-900">Selenium: </strong>                 
                    Automation is my forte, and I harness Selenium to streamline repetitive tasks and enhance testing processes.
                    </span>
                </li>

Database Management: Skilled in both NoSQL and relational databases, I can design and manage data storage solutions that cater to the specific needs of each project, utilizing technologies like PostgreSQL and NoSQL databases.

Load Balancers*: I have experience in configuring and managing Nginx web servers, optimizing web application performance, and ensuring secure and efficient content delivery, making use of Nginx as a reverse proxy server and load balancer.

🐳 Containerization & ☸️  Orchestration: Proficient in Docker and Kubernetes, I have experience in containerizing applications, enabling easy deployment, scaling, and management in complex environments.


Continuous Integration & Deployment (CI/CD): I have experience setting up and automating CI/CD pipelines using GitHub Actions, ensuring reliable and efficient software development and deployment processes.


Professional Approach:

My journey as a self-taught developer reflects my passion for continuous learning and adaptability. I thrive in collaborative environments, am an avid problem solver, and am committed to delivering high-quality, efficient, and secure software solutions. My ability to stay up-to-date with emerging technologies, coupled with a strong foundation in software development principles, positions me as a valuable asset for any project or team.

**Experience:

I have successfully completed various projects, including [mention specific projects or contributions], demonstrating my ability to tackle complex challenges and deliver results in real-world applications.

**Education:

While self-taught, my passion for software development has led me to consistently expand my knowledge and skills through online courses, self-study, and project-based learning.

🤝 Collaborative Team Player: I excel in cross-functional teams, valuing open communication and knowledge sharing.
📈 Continuous Learner: Self-improvement is my mantra; I stay updated with the latest tech trends and best practices.
🌐 DevOps Enthusiast: I believe in bridging the gap between development and operations to deliver robust, reliable software.
                  
                
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
