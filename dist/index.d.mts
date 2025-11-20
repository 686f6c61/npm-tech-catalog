export { getCatalog, getCategories, getCountByCategory, getMetadata, getMostPopularCategory, getSimpleTechnologies, getStacks, getStatistics, getTechByName, getTechByNameStrict, getTechnologies, getTechnologyCount, getTechsByPartialName, getTechsByType, getTechsByTypes, techExists } from './core/index.mjs';
export { autocomplete, searchByName, searchTech } from './search/index.mjs';
export { FilterCriteria, filterTechnologies, getStacksByComponent, getStacksByComponentType, getStandaloneTechnologies, getTechnologiesUsedInStacks, sortByName, sortByType } from './filters/index.mjs';
export { CatalogValidationResult, ValidationResult, isValidTechnologyType, sanitizeName, validateCatalog, validateSearchOptions, validateStack, validateTechnology } from './validators/index.mjs';
export { B as BaseTechnology, e as Catalog, d as CatalogMetadata, h as CatalogStatistics, C as CategoryMetadata, F as FilterOptions, f as SearchOptions, g as SearchResult, a as SimpleTechnology, S as StackComponent, b as StackTechnology, c as Technology, T as TechnologyType, j as isSimpleTechnology, i as isStackTechnology } from './index-CKsEp0Si.mjs';

var _metadata = {
	nombre: "SPARRING Technology Catalog",
	version: "3.0",
	descripcion: "Official technology catalog for SPARRING system autocomplete",
	total_tecnologias: 1094,
	categorias: {
		Language: {
			descripcion: "Programming, markup, query and scripting languages",
			ejemplos: [
				"Python",
				"JavaScript",
				"TypeScript",
				"Java",
				"C#",
				"Go",
				"Rust",
				"PHP",
				"SQL",
				"HTML",
				"CSS"
			]
		},
		Framework: {
			descripcion: "Frameworks and meta-frameworks for application development",
			ejemplos: [
				"React",
				"Angular",
				"Vue.js",
				"Django",
				"Spring Boot",
				"Laravel",
				"Next.js",
				"Express.js",
				"FastAPI"
			]
		},
		Library: {
			descripcion: "Specialized libraries and packages",
			ejemplos: [
				"jQuery",
				"Lodash",
				"Redux",
				"Axios",
				"NumPy",
				"Pandas",
				"PyTorch",
				"TensorFlow",
				"Jest",
				"Cypress"
			]
		},
		Database: {
			descripcion: "Database management systems (SQL, NoSQL, cache, graph, time-series)",
			ejemplos: [
				"MongoDB",
				"PostgreSQL",
				"MySQL",
				"Redis",
				"Elasticsearch",
				"Neo4j",
				"DynamoDB",
				"Cassandra"
			]
		},
		Server: {
			descripcion: "Web servers, application servers, runtimes and proxies",
			ejemplos: [
				"Node.js",
				"Nginx",
				"Apache HTTP Server",
				"Deno",
				"Bun",
				"Gunicorn",
				"Tomcat",
				"IIS"
			]
		},
		Tool: {
			descripcion: "DevOps tools, build tools, testing, CI/CD, containerization, orchestration, monitoring",
			ejemplos: [
				"Docker",
				"Kubernetes",
				"Webpack",
				"Git",
				"Jest",
				"Jenkins",
				"Terraform",
				"Prometheus",
				"Grafana"
			]
		},
		Platform: {
			descripcion: "Cloud platforms, PaaS/SaaS services, hosting, authentication, CMS, collaboration",
			ejemplos: [
				"AWS",
				"Azure",
				"Google Cloud",
				"Vercel",
				"Netlify",
				"Firebase",
				"Heroku",
				"GitHub",
				"Stripe"
			]
		},
		Stack: {
			descripcion: "Complete technology stacks with specific components",
			estructura: {
				nombre: "Stack name (e.g., MEAN, MERN, LAMP)",
				tipo: "Stack",
				componentes: [
					{
						nombre: "Component technology name",
						tipo: "Technology category (Language/Framework/Database/etc.)"
					}
				]
			},
			ejemplos: [
				"MEAN",
				"MERN",
				"LAMP",
				"JAMstack",
				"T3",
				"Django Stack",
				"Spring Stack",
				".NET Stack"
			]
		}
	},
	uso: "This catalog can be used for technology autocomplete, validation, and search in SPARRING applications"
};
var tecnologias = [
	{
		nombre: "JavaScript",
		tipo: "Language"
	},
	{
		nombre: "Python",
		tipo: "Language"
	},
	{
		nombre: "Java",
		tipo: "Language"
	},
	{
		nombre: "TypeScript",
		tipo: "Language"
	},
	{
		nombre: "C#",
		tipo: "Language"
	},
	{
		nombre: "C++",
		tipo: "Language"
	},
	{
		nombre: "PHP",
		tipo: "Language"
	},
	{
		nombre: "C",
		tipo: "Language"
	},
	{
		nombre: "Go",
		tipo: "Language"
	},
	{
		nombre: "Rust",
		tipo: "Language"
	},
	{
		nombre: "Kotlin",
		tipo: "Language"
	},
	{
		nombre: "Ruby",
		tipo: "Language"
	},
	{
		nombre: "Swift",
		tipo: "Language"
	},
	{
		nombre: "Objective-C",
		tipo: "Language"
	},
	{
		nombre: "Scala",
		tipo: "Language"
	},
	{
		nombre: "Dart",
		tipo: "Language"
	},
	{
		nombre: "R",
		tipo: "Language"
	},
	{
		nombre: "MATLAB",
		tipo: "Language"
	},
	{
		nombre: "Perl",
		tipo: "Language"
	},
	{
		nombre: "Haskell",
		tipo: "Language"
	},
	{
		nombre: "Lua",
		tipo: "Language"
	},
	{
		nombre: "Elixir",
		tipo: "Language"
	},
	{
		nombre: "Clojure",
		tipo: "Language"
	},
	{
		nombre: "Erlang",
		tipo: "Language"
	},
	{
		nombre: "F#",
		tipo: "Language"
	},
	{
		nombre: "OCaml",
		tipo: "Language"
	},
	{
		nombre: "Groovy",
		tipo: "Language"
	},
	{
		nombre: "Visual Basic .NET",
		tipo: "Language"
	},
	{
		nombre: "Delphi",
		tipo: "Language"
	},
	{
		nombre: "Assembly",
		tipo: "Language"
	},
	{
		nombre: "Fortran",
		tipo: "Language"
	},
	{
		nombre: "COBOL",
		tipo: "Language"
	},
	{
		nombre: "Ada",
		tipo: "Language"
	},
	{
		nombre: "Lisp",
		tipo: "Language"
	},
	{
		nombre: "Scheme",
		tipo: "Language"
	},
	{
		nombre: "Prolog",
		tipo: "Language"
	},
	{
		nombre: "Julia",
		tipo: "Language"
	},
	{
		nombre: "Nim",
		tipo: "Language"
	},
	{
		nombre: "Crystal",
		tipo: "Language"
	},
	{
		nombre: "Zig",
		tipo: "Language"
	},
	{
		nombre: "D",
		tipo: "Language"
	},
	{
		nombre: "Racket",
		tipo: "Language"
	},
	{
		nombre: "Tcl",
		tipo: "Language"
	},
	{
		nombre: "VHDL",
		tipo: "Language"
	},
	{
		nombre: "Verilog",
		tipo: "Language"
	},
	{
		nombre: "Solidity",
		tipo: "Language"
	},
	{
		nombre: "Vyper",
		tipo: "Language"
	},
	{
		nombre: "Move",
		tipo: "Language"
	},
	{
		nombre: "Cairo",
		tipo: "Language"
	},
	{
		nombre: "Hack",
		tipo: "Language"
	},
	{
		nombre: "Apex",
		tipo: "Language"
	},
	{
		nombre: "ABAP",
		tipo: "Language"
	},
	{
		nombre: "ActionScript",
		tipo: "Language"
	},
	{
		nombre: "CoffeeScript",
		tipo: "Language"
	},
	{
		nombre: "Elm",
		tipo: "Language"
	},
	{
		nombre: "PureScript",
		tipo: "Language"
	},
	{
		nombre: "ReasonML",
		tipo: "Language"
	},
	{
		nombre: "Ballerina",
		tipo: "Language"
	},
	{
		nombre: "V",
		tipo: "Language"
	},
	{
		nombre: "Haxe",
		tipo: "Language"
	},
	{
		nombre: "Red",
		tipo: "Language"
	},
	{
		nombre: "Io",
		tipo: "Language"
	},
	{
		nombre: "Pike",
		tipo: "Language"
	},
	{
		nombre: "Smalltalk",
		tipo: "Language"
	},
	{
		nombre: "Eiffel",
		tipo: "Language"
	},
	{
		nombre: "Modula-2",
		tipo: "Language"
	},
	{
		nombre: "Oberon",
		tipo: "Language"
	},
	{
		nombre: "Pascal",
		tipo: "Language"
	},
	{
		nombre: "BASIC",
		tipo: "Language"
	},
	{
		nombre: "Logo",
		tipo: "Language"
	},
	{
		nombre: "Scratch",
		tipo: "Language"
	},
	{
		nombre: "LabVIEW",
		tipo: "Language"
	},
	{
		nombre: "Ladder Logic",
		tipo: "Language"
	},
	{
		nombre: "PostScript",
		tipo: "Language"
	},
	{
		nombre: "AWK",
		tipo: "Language"
	},
	{
		nombre: "Bash",
		tipo: "Language"
	},
	{
		nombre: "PowerShell",
		tipo: "Language"
	},
	{
		nombre: "SQL",
		tipo: "Language"
	},
	{
		nombre: "PL/SQL",
		tipo: "Language"
	},
	{
		nombre: "T-SQL",
		tipo: "Language"
	},
	{
		nombre: "GraphQL",
		tipo: "Language"
	},
	{
		nombre: "HTML",
		tipo: "Language"
	},
	{
		nombre: "CSS",
		tipo: "Language"
	},
	{
		nombre: "Sass",
		tipo: "Language"
	},
	{
		nombre: "SCSS",
		tipo: "Language"
	},
	{
		nombre: "Less",
		tipo: "Language"
	},
	{
		nombre: "Stylus",
		tipo: "Language"
	},
	{
		nombre: "XML",
		tipo: "Language"
	},
	{
		nombre: "YAML",
		tipo: "Language"
	},
	{
		nombre: "JSON",
		tipo: "Language"
	},
	{
		nombre: "TOML",
		tipo: "Language"
	},
	{
		nombre: "Markdown",
		tipo: "Language"
	},
	{
		nombre: "LaTeX",
		tipo: "Language"
	},
	{
		nombre: "Wolfram Language",
		tipo: "Language"
	},
	{
		nombre: "Vimscript",
		tipo: "Language"
	},
	{
		nombre: "Emacs Lisp",
		tipo: "Language"
	},
	{
		nombre: "Odin",
		tipo: "Language"
	},
	{
		nombre: "Gleam",
		tipo: "Language"
	},
	{
		nombre: "Roc",
		tipo: "Language"
	},
	{
		nombre: "Carbon",
		tipo: "Language"
	},
	{
		nombre: "Mojo",
		tipo: "Language"
	},
	{
		nombre: "Vale",
		tipo: "Language"
	},
	{
		nombre: "TypeSpec",
		tipo: "Language"
	},
	{
		nombre: "MDX",
		tipo: "Language"
	},
	{
		nombre: "Nushell",
		tipo: "Language"
	},
	{
		nombre: "Fish",
		tipo: "Language"
	},
	{
		nombre: "Zsh",
		tipo: "Language"
	},
	{
		nombre: "SPARQL",
		tipo: "Language"
	},
	{
		nombre: "Cypher",
		tipo: "Language"
	},
	{
		nombre: "Gremlin",
		tipo: "Language"
	},
	{
		nombre: "LINQ",
		tipo: "Language"
	},
	{
		nombre: "HCL",
		tipo: "Language"
	},
	{
		nombre: "Dhall",
		tipo: "Language"
	},
	{
		nombre: "Jsonnet",
		tipo: "Language"
	},
	{
		nombre: "CUE",
		tipo: "Language"
	},
	{
		nombre: "Bicep",
		tipo: "Language"
	},
	{
		nombre: "Puppet DSL",
		tipo: "Language"
	},
	{
		nombre: "Jinja",
		tipo: "Language"
	},
	{
		nombre: "Handlebars",
		tipo: "Language"
	},
	{
		nombre: "Mustache",
		tipo: "Language"
	},
	{
		nombre: "Liquid",
		tipo: "Language"
	},
	{
		nombre: "Pug",
		tipo: "Language"
	},
	{
		nombre: "EJS",
		tipo: "Language"
	},
	{
		nombre: "Haml",
		tipo: "Language"
	},
	{
		nombre: "Slim",
		tipo: "Language"
	},
	{
		nombre: "Nunjucks",
		tipo: "Language"
	},
	{
		nombre: "XPath",
		tipo: "Language"
	},
	{
		nombre: "XQuery",
		tipo: "Language"
	},
	{
		nombre: "XSLT",
		tipo: "Language"
	},
	{
		nombre: "Regex",
		tipo: "Language"
	},
	{
		nombre: "Awk",
		tipo: "Language"
	},
	{
		nombre: "Sed",
		tipo: "Language"
	},
	{
		nombre: "React",
		tipo: "Framework"
	},
	{
		nombre: "Angular",
		tipo: "Framework"
	},
	{
		nombre: "Vue.js",
		tipo: "Framework"
	},
	{
		nombre: "Svelte",
		tipo: "Framework"
	},
	{
		nombre: "Next.js",
		tipo: "Framework"
	},
	{
		nombre: "Nuxt.js",
		tipo: "Framework"
	},
	{
		nombre: "Gatsby",
		tipo: "Framework"
	},
	{
		nombre: "Remix",
		tipo: "Framework"
	},
	{
		nombre: "Astro",
		tipo: "Framework"
	},
	{
		nombre: "SolidJS",
		tipo: "Framework"
	},
	{
		nombre: "Qwik",
		tipo: "Framework"
	},
	{
		nombre: "Ember.js",
		tipo: "Framework"
	},
	{
		nombre: "Backbone.js",
		tipo: "Framework"
	},
	{
		nombre: "Preact",
		tipo: "Framework"
	},
	{
		nombre: "Alpine.js",
		tipo: "Framework"
	},
	{
		nombre: "Lit",
		tipo: "Framework"
	},
	{
		nombre: "Stencil",
		tipo: "Framework"
	},
	{
		nombre: "Express.js",
		tipo: "Framework"
	},
	{
		nombre: "Fastify",
		tipo: "Framework"
	},
	{
		nombre: "Koa",
		tipo: "Framework"
	},
	{
		nombre: "Hapi",
		tipo: "Framework"
	},
	{
		nombre: "NestJS",
		tipo: "Framework"
	},
	{
		nombre: "AdonisJS",
		tipo: "Framework"
	},
	{
		nombre: "Meteor",
		tipo: "Framework"
	},
	{
		nombre: "Sails.js",
		tipo: "Framework"
	},
	{
		nombre: "FeathersJS",
		tipo: "Framework"
	},
	{
		nombre: "LoopBack",
		tipo: "Framework"
	},
	{
		nombre: "Django",
		tipo: "Framework"
	},
	{
		nombre: "Flask",
		tipo: "Framework"
	},
	{
		nombre: "FastAPI",
		tipo: "Framework"
	},
	{
		nombre: "Pyramid",
		tipo: "Framework"
	},
	{
		nombre: "Tornado",
		tipo: "Framework"
	},
	{
		nombre: "Bottle",
		tipo: "Framework"
	},
	{
		nombre: "CherryPy",
		tipo: "Framework"
	},
	{
		nombre: "web2py",
		tipo: "Framework"
	},
	{
		nombre: "TurboGears",
		tipo: "Framework"
	},
	{
		nombre: "Starlette",
		tipo: "Framework"
	},
	{
		nombre: "Sanic",
		tipo: "Framework"
	},
	{
		nombre: "Spring Boot",
		tipo: "Framework"
	},
	{
		nombre: "Spring",
		tipo: "Framework"
	},
	{
		nombre: "Spring MVC",
		tipo: "Framework"
	},
	{
		nombre: "Jakarta EE",
		tipo: "Framework"
	},
	{
		nombre: "Quarkus",
		tipo: "Framework"
	},
	{
		nombre: "Micronaut",
		tipo: "Framework"
	},
	{
		nombre: "Helidon",
		tipo: "Framework"
	},
	{
		nombre: "Play Framework",
		tipo: "Framework"
	},
	{
		nombre: "Vert.x",
		tipo: "Framework"
	},
	{
		nombre: "Dropwizard",
		tipo: "Framework"
	},
	{
		nombre: "Spark Java",
		tipo: "Framework"
	},
	{
		nombre: "Struts",
		tipo: "Framework"
	},
	{
		nombre: "JSF",
		tipo: "Framework"
	},
	{
		nombre: "Vaadin",
		tipo: "Framework"
	},
	{
		nombre: "GWT",
		tipo: "Framework"
	},
	{
		nombre: "ASP.NET Core",
		tipo: "Framework"
	},
	{
		nombre: "ASP.NET",
		tipo: "Framework"
	},
	{
		nombre: "Blazor",
		tipo: "Framework"
	},
	{
		nombre: ".NET MAUI",
		tipo: "Framework"
	},
	{
		nombre: "Xamarin",
		tipo: "Framework"
	},
	{
		nombre: "Entity Framework",
		tipo: "Framework"
	},
	{
		nombre: "Laravel",
		tipo: "Framework"
	},
	{
		nombre: "Symfony",
		tipo: "Framework"
	},
	{
		nombre: "CodeIgniter",
		tipo: "Framework"
	},
	{
		nombre: "Yii",
		tipo: "Framework"
	},
	{
		nombre: "CakePHP",
		tipo: "Framework"
	},
	{
		nombre: "Zend Framework",
		tipo: "Framework"
	},
	{
		nombre: "Phalcon",
		tipo: "Framework"
	},
	{
		nombre: "Slim",
		tipo: "Framework"
	},
	{
		nombre: "Lumen",
		tipo: "Framework"
	},
	{
		nombre: "FuelPHP",
		tipo: "Framework"
	},
	{
		nombre: "Ruby on Rails",
		tipo: "Framework"
	},
	{
		nombre: "Sinatra",
		tipo: "Framework"
	},
	{
		nombre: "Hanami",
		tipo: "Framework"
	},
	{
		nombre: "Padrino",
		tipo: "Framework"
	},
	{
		nombre: "Roda",
		tipo: "Framework"
	},
	{
		nombre: "Gin",
		tipo: "Framework"
	},
	{
		nombre: "Echo",
		tipo: "Framework"
	},
	{
		nombre: "Fiber",
		tipo: "Framework"
	},
	{
		nombre: "Beego",
		tipo: "Framework"
	},
	{
		nombre: "Revel",
		tipo: "Framework"
	},
	{
		nombre: "Buffalo",
		tipo: "Framework"
	},
	{
		nombre: "Chi",
		tipo: "Framework"
	},
	{
		nombre: "Gorilla",
		tipo: "Framework"
	},
	{
		nombre: "Actix",
		tipo: "Framework"
	},
	{
		nombre: "Rocket",
		tipo: "Framework"
	},
	{
		nombre: "Axum",
		tipo: "Framework"
	},
	{
		nombre: "Warp",
		tipo: "Framework"
	},
	{
		nombre: "Tide",
		tipo: "Framework"
	},
	{
		nombre: "Yew",
		tipo: "Framework"
	},
	{
		nombre: "Leptos",
		tipo: "Framework"
	},
	{
		nombre: "Phoenix",
		tipo: "Framework"
	},
	{
		nombre: "Nerves",
		tipo: "Framework"
	},
	{
		nombre: "Ktor",
		tipo: "Framework"
	},
	{
		nombre: "Javalin",
		tipo: "Framework"
	},
	{
		nombre: "SwiftUI",
		tipo: "Framework"
	},
	{
		nombre: "UIKit",
		tipo: "Framework"
	},
	{
		nombre: "Vapor",
		tipo: "Framework"
	},
	{
		nombre: "Kitura",
		tipo: "Framework"
	},
	{
		nombre: "Perfect",
		tipo: "Framework"
	},
	{
		nombre: "Flutter",
		tipo: "Framework"
	},
	{
		nombre: "React Native",
		tipo: "Framework"
	},
	{
		nombre: "Ionic",
		tipo: "Framework"
	},
	{
		nombre: "Capacitor",
		tipo: "Framework"
	},
	{
		nombre: "Cordova",
		tipo: "Framework"
	},
	{
		nombre: "NativeScript",
		tipo: "Framework"
	},
	{
		nombre: "Electron",
		tipo: "Framework"
	},
	{
		nombre: "Tauri",
		tipo: "Framework"
	},
	{
		nombre: "Qt",
		tipo: "Framework"
	},
	{
		nombre: "GTK",
		tipo: "Framework"
	},
	{
		nombre: "wxWidgets",
		tipo: "Framework"
	},
	{
		nombre: "Tkinter",
		tipo: "Framework"
	},
	{
		nombre: "PyQt",
		tipo: "Framework"
	},
	{
		nombre: "Kivy",
		tipo: "Framework"
	},
	{
		nombre: "Django REST Framework",
		tipo: "Framework"
	},
	{
		nombre: "Celery",
		tipo: "Framework"
	},
	{
		nombre: "Scrapy",
		tipo: "Framework"
	},
	{
		nombre: "TensorFlow",
		tipo: "Framework"
	},
	{
		nombre: "PyTorch",
		tipo: "Framework"
	},
	{
		nombre: "Keras",
		tipo: "Framework"
	},
	{
		nombre: "Scikit-learn",
		tipo: "Framework"
	},
	{
		nombre: "Pandas",
		tipo: "Framework"
	},
	{
		nombre: "NumPy",
		tipo: "Framework"
	},
	{
		nombre: "JAX",
		tipo: "Framework"
	},
	{
		nombre: "Streamlit",
		tipo: "Framework"
	},
	{
		nombre: "Gradio",
		tipo: "Framework"
	},
	{
		nombre: "Dash",
		tipo: "Framework"
	},
	{
		nombre: "Plotly",
		tipo: "Framework"
	},
	{
		nombre: "Bootstrap",
		tipo: "Framework"
	},
	{
		nombre: "Tailwind CSS",
		tipo: "Framework"
	},
	{
		nombre: "Material UI",
		tipo: "Framework"
	},
	{
		nombre: "Ant Design",
		tipo: "Framework"
	},
	{
		nombre: "Chakra UI",
		tipo: "Framework"
	},
	{
		nombre: "Semantic UI",
		tipo: "Framework"
	},
	{
		nombre: "Bulma",
		tipo: "Framework"
	},
	{
		nombre: "Foundation",
		tipo: "Framework"
	},
	{
		nombre: "Materialize",
		tipo: "Framework"
	},
	{
		nombre: "UIKit (CSS)",
		tipo: "Framework"
	},
	{
		nombre: "Pure.css",
		tipo: "Framework"
	},
	{
		nombre: "Vuetify",
		tipo: "Framework"
	},
	{
		nombre: "Quasar",
		tipo: "Framework"
	},
	{
		nombre: "PrimeVue",
		tipo: "Framework"
	},
	{
		nombre: "PrimeReact",
		tipo: "Framework"
	},
	{
		nombre: "PrimeNG",
		tipo: "Framework"
	},
	{
		nombre: "shadcn/ui",
		tipo: "Framework"
	},
	{
		nombre: "Radix UI",
		tipo: "Framework"
	},
	{
		nombre: "Headless UI",
		tipo: "Framework"
	},
	{
		nombre: "daisyUI",
		tipo: "Framework"
	},
	{
		nombre: "SvelteKit",
		tipo: "Framework"
	},
	{
		nombre: "HTMX",
		tipo: "Framework"
	},
	{
		nombre: "Hotwire",
		tipo: "Framework"
	},
	{
		nombre: "Turbo",
		tipo: "Framework"
	},
	{
		nombre: "Nitro",
		tipo: "Framework"
	},
	{
		nombre: "Analog",
		tipo: "Framework"
	},
	{
		nombre: "Vike",
		tipo: "Framework"
	},
	{
		nombre: "Hono",
		tipo: "Framework"
	},
	{
		nombre: "tRPC",
		tipo: "Framework"
	},
	{
		nombre: "Drizzle ORM",
		tipo: "Framework"
	},
	{
		nombre: "Prisma",
		tipo: "Framework"
	},
	{
		nombre: "TypeORM",
		tipo: "Framework"
	},
	{
		nombre: "Sequelize",
		tipo: "Framework"
	},
	{
		nombre: "MikroORM",
		tipo: "Framework"
	},
	{
		nombre: "Objection.js",
		tipo: "Framework"
	},
	{
		nombre: "Knex.js",
		tipo: "Framework"
	},
	{
		nombre: "Kysely",
		tipo: "Framework"
	},
	{
		nombre: "Payload CMS",
		tipo: "Framework"
	},
	{
		nombre: "KeystoneJS",
		tipo: "Framework"
	},
	{
		nombre: "RedwoodJS",
		tipo: "Framework"
	},
	{
		nombre: "Blitz.js",
		tipo: "Framework"
	},
	{
		nombre: "Fresh",
		tipo: "Framework"
	},
	{
		nombre: "Elysia",
		tipo: "Framework"
	},
	{
		nombre: "ElysiaJS",
		tipo: "Framework"
	},
	{
		nombre: "Trpc",
		tipo: "Framework"
	},
	{
		nombre: "SQLAlchemy",
		tipo: "Framework"
	},
	{
		nombre: "Pydantic",
		tipo: "Framework"
	},
	{
		nombre: "Reflex",
		tipo: "Framework"
	},
	{
		nombre: "Nicegui",
		tipo: "Framework"
	},
	{
		nombre: "Flet",
		tipo: "Framework"
	},
	{
		nombre: "Livewire",
		tipo: "Framework"
	},
	{
		nombre: "Inertia.js",
		tipo: "Framework"
	},
	{
		nombre: "Alpine.js",
		tipo: "Framework"
	},
	{
		nombre: "Mithril",
		tipo: "Framework"
	},
	{
		nombre: "Marko",
		tipo: "Framework"
	},
	{
		nombre: "Solid Start",
		tipo: "Framework"
	},
	{
		nombre: "Dioxus",
		tipo: "Framework"
	},
	{
		nombre: "Sycamore",
		tipo: "Framework"
	},
	{
		nombre: "Phoenix LiveView",
		tipo: "Framework"
	},
	{
		nombre: "LiveView",
		tipo: "Framework"
	},
	{
		nombre: "Hibernate",
		tipo: "Framework"
	},
	{
		nombre: "JPA",
		tipo: "Framework"
	},
	{
		nombre: "MyBatis",
		tipo: "Framework"
	},
	{
		nombre: "GORM",
		tipo: "Framework"
	},
	{
		nombre: "Beego ORM",
		tipo: "Framework"
	},
	{
		nombre: "Diesel",
		tipo: "Framework"
	},
	{
		nombre: "SeaORM",
		tipo: "Framework"
	},
	{
		nombre: "Ecto",
		tipo: "Framework"
	},
	{
		nombre: "ActiveRecord",
		tipo: "Framework"
	},
	{
		nombre: "Godot",
		tipo: "Framework"
	},
	{
		nombre: "Unity",
		tipo: "Framework"
	},
	{
		nombre: "Unreal Engine",
		tipo: "Framework"
	},
	{
		nombre: "Phaser",
		tipo: "Framework"
	},
	{
		nombre: "PixiJS",
		tipo: "Framework"
	},
	{
		nombre: "Babylon.js",
		tipo: "Framework"
	},
	{
		nombre: "Cocos2d",
		tipo: "Framework"
	},
	{
		nombre: "Love2D",
		tipo: "Framework"
	},
	{
		nombre: "Bevy",
		tipo: "Framework"
	},
	{
		nombre: "Amethyst",
		tipo: "Framework"
	},
	{
		nombre: "MonoGame",
		tipo: "Framework"
	},
	{
		nombre: "LibGDX",
		tipo: "Framework"
	},
	{
		nombre: "Pygame",
		tipo: "Framework"
	},
	{
		nombre: "Arcade",
		tipo: "Framework"
	},
	{
		nombre: "Panda3D",
		tipo: "Framework"
	},
	{
		nombre: "Apache Beam",
		tipo: "Framework"
	},
	{
		nombre: "Apache Flink",
		tipo: "Framework"
	},
	{
		nombre: "Apache Storm",
		tipo: "Framework"
	},
	{
		nombre: "Apache Airflow",
		tipo: "Framework"
	},
	{
		nombre: "Prefect",
		tipo: "Framework"
	},
	{
		nombre: "Dagster",
		tipo: "Framework"
	},
	{
		nombre: "Kedro",
		tipo: "Framework"
	},
	{
		nombre: "Metaflow",
		tipo: "Framework"
	},
	{
		nombre: "Luigi",
		tipo: "Framework"
	},
	{
		nombre: "Ray",
		tipo: "Framework"
	},
	{
		nombre: "Dask",
		tipo: "Framework"
	},
	{
		nombre: "Vaex",
		tipo: "Framework"
	},
	{
		nombre: "Polars",
		tipo: "Framework"
	},
	{
		nombre: "Modin",
		tipo: "Framework"
	},
	{
		nombre: "Hugging Face",
		tipo: "Framework"
	},
	{
		nombre: "LlamaIndex",
		tipo: "Framework"
	},
	{
		nombre: "Haystack",
		tipo: "Framework"
	},
	{
		nombre: "LangFlow",
		tipo: "Framework"
	},
	{
		nombre: "FastChat",
		tipo: "Framework"
	},
	{
		nombre: "vLLM",
		tipo: "Framework"
	},
	{
		nombre: "Semantic Kernel",
		tipo: "Framework"
	},
	{
		nombre: "AutoGen",
		tipo: "Framework"
	},
	{
		nombre: "CrewAI",
		tipo: "Framework"
	},
	{
		nombre: "LangGraph",
		tipo: "Framework"
	},
	{
		nombre: "Chainlit",
		tipo: "Framework"
	},
	{
		nombre: "jQuery",
		tipo: "Library"
	},
	{
		nombre: "Lodash",
		tipo: "Library"
	},
	{
		nombre: "Underscore.js",
		tipo: "Library"
	},
	{
		nombre: "Moment.js",
		tipo: "Library"
	},
	{
		nombre: "Day.js",
		tipo: "Library"
	},
	{
		nombre: "Date-fns",
		tipo: "Library"
	},
	{
		nombre: "Axios",
		tipo: "Library"
	},
	{
		nombre: "Fetch API",
		tipo: "Library"
	},
	{
		nombre: "RxJS",
		tipo: "Library"
	},
	{
		nombre: "Ramda",
		tipo: "Library"
	},
	{
		nombre: "Immutable.js",
		tipo: "Library"
	},
	{
		nombre: "Three.js",
		tipo: "Library"
	},
	{
		nombre: "D3.js",
		tipo: "Library"
	},
	{
		nombre: "Chart.js",
		tipo: "Library"
	},
	{
		nombre: "Socket.io",
		tipo: "Library"
	},
	{
		nombre: "Passport.js",
		tipo: "Library"
	},
	{
		nombre: "Joi",
		tipo: "Library"
	},
	{
		nombre: "Yup",
		tipo: "Library"
	},
	{
		nombre: "Zod",
		tipo: "Library"
	},
	{
		nombre: "Winston",
		tipo: "Library"
	},
	{
		nombre: "Morgan",
		tipo: "Library"
	},
	{
		nombre: "Multer",
		tipo: "Library"
	},
	{
		nombre: "Sharp",
		tipo: "Library"
	},
	{
		nombre: "Bcrypt",
		tipo: "Library"
	},
	{
		nombre: "JWT",
		tipo: "Library"
	},
	{
		nombre: "Stripe",
		tipo: "Library"
	},
	{
		nombre: "PayPal SDK",
		tipo: "Library"
	},
	{
		nombre: "Nodemailer",
		tipo: "Library"
	},
	{
		nombre: "Twilio",
		tipo: "Library"
	},
	{
		nombre: "Requests",
		tipo: "Library"
	},
	{
		nombre: "Beautiful Soup",
		tipo: "Library"
	},
	{
		nombre: "Matplotlib",
		tipo: "Library"
	},
	{
		nombre: "Seaborn",
		tipo: "Library"
	},
	{
		nombre: "SciPy",
		tipo: "Library"
	},
	{
		nombre: "Pillow",
		tipo: "Library"
	},
	{
		nombre: "OpenCV",
		tipo: "Library"
	},
	{
		nombre: "NLTK",
		tipo: "Library"
	},
	{
		nombre: "spaCy",
		tipo: "Library"
	},
	{
		nombre: "Transformers",
		tipo: "Library"
	},
	{
		nombre: "LangChain",
		tipo: "Library"
	},
	{
		nombre: "Pytest",
		tipo: "Library"
	},
	{
		nombre: "Jest",
		tipo: "Library"
	},
	{
		nombre: "Mocha",
		tipo: "Library"
	},
	{
		nombre: "Chai",
		tipo: "Library"
	},
	{
		nombre: "Jasmine",
		tipo: "Library"
	},
	{
		nombre: "Cypress",
		tipo: "Library"
	},
	{
		nombre: "Playwright",
		tipo: "Library"
	},
	{
		nombre: "Puppeteer",
		tipo: "Library"
	},
	{
		nombre: "Selenium",
		tipo: "Library"
	},
	{
		nombre: "WebdriverIO",
		tipo: "Library"
	},
	{
		nombre: "Testing Library",
		tipo: "Library"
	},
	{
		nombre: "Enzyme",
		tipo: "Library"
	},
	{
		nombre: "Vitest",
		tipo: "Library"
	},
	{
		nombre: "Supertest",
		tipo: "Library"
	},
	{
		nombre: "MSW",
		tipo: "Library"
	},
	{
		nombre: "Storybook",
		tipo: "Library"
	},
	{
		nombre: "Framer Motion",
		tipo: "Library"
	},
	{
		nombre: "GSAP",
		tipo: "Library"
	},
	{
		nombre: "Anime.js",
		tipo: "Library"
	},
	{
		nombre: "Lottie",
		tipo: "Library"
	},
	{
		nombre: "SWR",
		tipo: "Library"
	},
	{
		nombre: "React Query",
		tipo: "Library"
	},
	{
		nombre: "Redux",
		tipo: "Library"
	},
	{
		nombre: "MobX",
		tipo: "Library"
	},
	{
		nombre: "Zustand",
		tipo: "Library"
	},
	{
		nombre: "Jotai",
		tipo: "Library"
	},
	{
		nombre: "Recoil",
		tipo: "Library"
	},
	{
		nombre: "Valtio",
		tipo: "Library"
	},
	{
		nombre: "Pinia",
		tipo: "Library"
	},
	{
		nombre: "Vuex",
		tipo: "Library"
	},
	{
		nombre: "NgRx",
		tipo: "Library"
	},
	{
		nombre: "TanStack Query",
		tipo: "Library"
	},
	{
		nombre: "TanStack Router",
		tipo: "Library"
	},
	{
		nombre: "TanStack Table",
		tipo: "Library"
	},
	{
		nombre: "TanStack Virtual",
		tipo: "Library"
	},
	{
		nombre: "XState",
		tipo: "Library"
	},
	{
		nombre: "Immer",
		tipo: "Library"
	},
	{
		nombre: "React Hook Form",
		tipo: "Library"
	},
	{
		nombre: "Formik",
		tipo: "Library"
	},
	{
		nombre: "React Spring",
		tipo: "Library"
	},
	{
		nombre: "Motion One",
		tipo: "Library"
	},
	{
		nombre: "Recharts",
		tipo: "Library"
	},
	{
		nombre: "Victory",
		tipo: "Library"
	},
	{
		nombre: "Visx",
		tipo: "Library"
	},
	{
		nombre: "Luxon",
		tipo: "Library"
	},
	{
		nombre: "Valibot",
		tipo: "Library"
	},
	{
		nombre: "Effect",
		tipo: "Library"
	},
	{
		nombre: "fp-ts",
		tipo: "Library"
	},
	{
		nombre: "io-ts",
		tipo: "Library"
	},
	{
		nombre: "Nanoid",
		tipo: "Library"
	},
	{
		nombre: "UUID",
		tipo: "Library"
	},
	{
		nombre: "Faker.js",
		tipo: "Library"
	},
	{
		nombre: "Chance.js",
		tipo: "Library"
	},
	{
		nombre: "Polished",
		tipo: "Library"
	},
	{
		nombre: "Styled Components",
		tipo: "Library"
	},
	{
		nombre: "Emotion",
		tipo: "Library"
	},
	{
		nombre: "Stitches",
		tipo: "Library"
	},
	{
		nombre: "Vanilla Extract",
		tipo: "Library"
	},
	{
		nombre: "Panda CSS",
		tipo: "Library"
	},
	{
		nombre: "Tamagui",
		tipo: "Library"
	},
	{
		nombre: "NativeWind",
		tipo: "Library"
	},
	{
		nombre: "Expo Router",
		tipo: "Library"
	},
	{
		nombre: "React Navigation",
		tipo: "Library"
	},
	{
		nombre: "Tanstack Start",
		tipo: "Library"
	},
	{
		nombre: "Wouter",
		tipo: "Library"
	},
	{
		nombre: "React Router",
		tipo: "Library"
	},
	{
		nombre: "Vue Router",
		tipo: "Library"
	},
	{
		nombre: "Hookstate",
		tipo: "Library"
	},
	{
		nombre: "Nanostores",
		tipo: "Library"
	},
	{
		nombre: "Legend State",
		tipo: "Library"
	},
	{
		nombre: "Signals",
		tipo: "Library"
	},
	{
		nombre: "Effector",
		tipo: "Library"
	},
	{
		nombre: "GetX",
		tipo: "Library"
	},
	{
		nombre: "Provider",
		tipo: "Library"
	},
	{
		nombre: "Riverpod",
		tipo: "Library"
	},
	{
		nombre: "Bloc",
		tipo: "Library"
	},
	{
		nombre: "MobX",
		tipo: "Library"
	},
	{
		nombre: "Hydrated Bloc",
		tipo: "Library"
	},
	{
		nombre: "Hive",
		tipo: "Library"
	},
	{
		nombre: "Isar",
		tipo: "Library"
	},
	{
		nombre: "Drift",
		tipo: "Library"
	},
	{
		nombre: "Web3.js",
		tipo: "Library"
	},
	{
		nombre: "Ethers.js",
		tipo: "Library"
	},
	{
		nombre: "Viem",
		tipo: "Library"
	},
	{
		nombre: "Wagmi",
		tipo: "Library"
	},
	{
		nombre: "RainbowKit",
		tipo: "Library"
	},
	{
		nombre: "ConnectKit",
		tipo: "Library"
	},
	{
		nombre: "Apollo Client",
		tipo: "Library"
	},
	{
		nombre: "Urql",
		tipo: "Library"
	},
	{
		nombre: "GraphQL Request",
		tipo: "Library"
	},
	{
		nombre: "Relay",
		tipo: "Library"
	},
	{
		nombre: "Sidekiq",
		tipo: "Library"
	},
	{
		nombre: "Bull",
		tipo: "Library"
	},
	{
		nombre: "BullMQ",
		tipo: "Library"
	},
	{
		nombre: "Agenda",
		tipo: "Library"
	},
	{
		nombre: "Bee Queue",
		tipo: "Library"
	},
	{
		nombre: "Dotenv",
		tipo: "Library"
	},
	{
		nombre: "Envalid",
		tipo: "Library"
	},
	{
		nombre: "Config",
		tipo: "Library"
	},
	{
		nombre: "Convict",
		tipo: "Library"
	},
	{
		nombre: "Debug",
		tipo: "Library"
	},
	{
		nombre: "Pino",
		tipo: "Library"
	},
	{
		nombre: "Bunyan",
		tipo: "Library"
	},
	{
		nombre: "Log4js",
		tipo: "Library"
	},
	{
		nombre: "Chalk",
		tipo: "Library"
	},
	{
		nombre: "Ora",
		tipo: "Library"
	},
	{
		nombre: "Inquirer",
		tipo: "Library"
	},
	{
		nombre: "Commander",
		tipo: "Library"
	},
	{
		nombre: "Yargs",
		tipo: "Library"
	},
	{
		nombre: "Meow",
		tipo: "Library"
	},
	{
		nombre: "Minimist",
		tipo: "Library"
	},
	{
		nombre: "Clack",
		tipo: "Library"
	},
	{
		nombre: "Prompts",
		tipo: "Library"
	},
	{
		nombre: "Boxen",
		tipo: "Library"
	},
	{
		nombre: "Figlet",
		tipo: "Library"
	},
	{
		nombre: "Listr",
		tipo: "Library"
	},
	{
		nombre: "Execa",
		tipo: "Library"
	},
	{
		nombre: "Zx",
		tipo: "Library"
	},
	{
		nombre: "ShellJS",
		tipo: "Library"
	},
	{
		nombre: "Glob",
		tipo: "Library"
	},
	{
		nombre: "Globby",
		tipo: "Library"
	},
	{
		nombre: "Fast-glob",
		tipo: "Library"
	},
	{
		nombre: "Chokidar",
		tipo: "Library"
	},
	{
		nombre: "Nodemon",
		tipo: "Library"
	},
	{
		nombre: "Concurrently",
		tipo: "Library"
	},
	{
		nombre: "Npm-run-all",
		tipo: "Library"
	},
	{
		nombre: "Rimraf",
		tipo: "Library"
	},
	{
		nombre: "Fs-extra",
		tipo: "Library"
	},
	{
		nombre: "Graceful-fs",
		tipo: "Library"
	},
	{
		nombre: "Mkdirp",
		tipo: "Library"
	},
	{
		nombre: "Cheerio",
		tipo: "Library"
	},
	{
		nombre: "JSDOM",
		tipo: "Library"
	},
	{
		nombre: "PDF.js",
		tipo: "Library"
	},
	{
		nombre: "PDFKit",
		tipo: "Library"
	},
	{
		nombre: "jsPDF",
		tipo: "Library"
	},
	{
		nombre: "Puppeteer-core",
		tipo: "Library"
	},
	{
		nombre: "PDFMake",
		tipo: "Library"
	},
	{
		nombre: "ExcelJS",
		tipo: "Library"
	},
	{
		nombre: "XLSX",
		tipo: "Library"
	},
	{
		nombre: "SheetJS",
		tipo: "Library"
	},
	{
		nombre: "CSV-parser",
		tipo: "Library"
	},
	{
		nombre: "PapaParse",
		tipo: "Library"
	},
	{
		nombre: "Fast-csv",
		tipo: "Library"
	},
	{
		nombre: "Archiver",
		tipo: "Library"
	},
	{
		nombre: "Adm-zip",
		tipo: "Library"
	},
	{
		nombre: "JSZip",
		tipo: "Library"
	},
	{
		nombre: "Compression",
		tipo: "Library"
	},
	{
		nombre: "Jimp",
		tipo: "Library"
	},
	{
		nombre: "Sharp",
		tipo: "Library"
	},
	{
		nombre: "Pica",
		tipo: "Library"
	},
	{
		nombre: "Image-size",
		tipo: "Library"
	},
	{
		nombre: "QRCode",
		tipo: "Library"
	},
	{
		nombre: "Barcode",
		tipo: "Library"
	},
	{
		nombre: "Tesseract.js",
		tipo: "Library"
	},
	{
		nombre: "Face-api.js",
		tipo: "Library"
	},
	{
		nombre: "MediaPipe",
		tipo: "Library"
	},
	{
		nombre: "TensorFlow.js",
		tipo: "Library"
	},
	{
		nombre: "ONNX.js",
		tipo: "Library"
	},
	{
		nombre: "Brain.js",
		tipo: "Library"
	},
	{
		nombre: "ML5.js",
		tipo: "Library"
	},
	{
		nombre: "Synaptic",
		tipo: "Library"
	},
	{
		nombre: "Danfojs",
		tipo: "Library"
	},
	{
		nombre: "Simple-statistics",
		tipo: "Library"
	},
	{
		nombre: "Math.js",
		tipo: "Library"
	},
	{
		nombre: "Decimal.js",
		tipo: "Library"
	},
	{
		nombre: "Big.js",
		tipo: "Library"
	},
	{
		nombre: "Bignumber.js",
		tipo: "Library"
	},
	{
		nombre: "Crypto-js",
		tipo: "Library"
	},
	{
		nombre: "Bcryptjs",
		tipo: "Library"
	},
	{
		nombre: "Argon2",
		tipo: "Library"
	},
	{
		nombre: "Jsonwebtoken",
		tipo: "Library"
	},
	{
		nombre: "Jose",
		tipo: "Library"
	},
	{
		nombre: "Otplib",
		tipo: "Library"
	},
	{
		nombre: "Speakeasy",
		tipo: "Library"
	},
	{
		nombre: "Iron-session",
		tipo: "Library"
	},
	{
		nombre: "Next-auth",
		tipo: "Library"
	},
	{
		nombre: "Better-auth",
		tipo: "Library"
	},
	{
		nombre: "Lucia",
		tipo: "Library"
	},
	{
		nombre: "MongoDB",
		tipo: "Database"
	},
	{
		nombre: "PostgreSQL",
		tipo: "Database"
	},
	{
		nombre: "MySQL",
		tipo: "Database"
	},
	{
		nombre: "MariaDB",
		tipo: "Database"
	},
	{
		nombre: "Redis",
		tipo: "Database"
	},
	{
		nombre: "SQLite",
		tipo: "Database"
	},
	{
		nombre: "Oracle Database",
		tipo: "Database"
	},
	{
		nombre: "Microsoft SQL Server",
		tipo: "Database"
	},
	{
		nombre: "Cassandra",
		tipo: "Database"
	},
	{
		nombre: "DynamoDB",
		tipo: "Database"
	},
	{
		nombre: "CouchDB",
		tipo: "Database"
	},
	{
		nombre: "Neo4j",
		tipo: "Database"
	},
	{
		nombre: "InfluxDB",
		tipo: "Database"
	},
	{
		nombre: "TimescaleDB",
		tipo: "Database"
	},
	{
		nombre: "Elasticsearch",
		tipo: "Database"
	},
	{
		nombre: "Memcached",
		tipo: "Database"
	},
	{
		nombre: "Firebase Realtime Database",
		tipo: "Database"
	},
	{
		nombre: "Firestore",
		tipo: "Database"
	},
	{
		nombre: "Supabase",
		tipo: "Database"
	},
	{
		nombre: "PlanetScale",
		tipo: "Database"
	},
	{
		nombre: "Neon",
		tipo: "Database"
	},
	{
		nombre: "CockroachDB",
		tipo: "Database"
	},
	{
		nombre: "ScyllaDB",
		tipo: "Database"
	},
	{
		nombre: "RocksDB",
		tipo: "Database"
	},
	{
		nombre: "LevelDB",
		tipo: "Database"
	},
	{
		nombre: "etcd",
		tipo: "Database"
	},
	{
		nombre: "ArangoDB",
		tipo: "Database"
	},
	{
		nombre: "OrientDB",
		tipo: "Database"
	},
	{
		nombre: "Dgraph",
		tipo: "Database"
	},
	{
		nombre: "TiDB",
		tipo: "Database"
	},
	{
		nombre: "YugabyteDB",
		tipo: "Database"
	},
	{
		nombre: "VoltDB",
		tipo: "Database"
	},
	{
		nombre: "H2",
		tipo: "Database"
	},
	{
		nombre: "Apache Derby",
		tipo: "Database"
	},
	{
		nombre: "FaunaDB",
		tipo: "Database"
	},
	{
		nombre: "Realm",
		tipo: "Database"
	},
	{
		nombre: "Couchbase",
		tipo: "Database"
	},
	{
		nombre: "Riak",
		tipo: "Database"
	},
	{
		nombre: "HBase",
		tipo: "Database"
	},
	{
		nombre: "Clickhouse",
		tipo: "Database"
	},
	{
		nombre: "Turso",
		tipo: "Database"
	},
	{
		nombre: "Xata",
		tipo: "Database"
	},
	{
		nombre: "EdgeDB",
		tipo: "Database"
	},
	{
		nombre: "SurrealDB",
		tipo: "Database"
	},
	{
		nombre: "Milvus",
		tipo: "Database"
	},
	{
		nombre: "Weaviate",
		tipo: "Database"
	},
	{
		nombre: "Pinecone",
		tipo: "Database"
	},
	{
		nombre: "Qdrant",
		tipo: "Database"
	},
	{
		nombre: "Chroma",
		tipo: "Database"
	},
	{
		nombre: "LanceDB",
		tipo: "Database"
	},
	{
		nombre: "Typesense",
		tipo: "Database"
	},
	{
		nombre: "Sonic",
		tipo: "Database"
	},
	{
		nombre: "Manticore Search",
		tipo: "Database"
	},
	{
		nombre: "RethinkDB",
		tipo: "Database"
	},
	{
		nombre: "MinIO",
		tipo: "Database"
	},
	{
		nombre: "Dolt",
		tipo: "Database"
	},
	{
		nombre: "D1",
		tipo: "Database"
	},
	{
		nombre: "ImmuDB",
		tipo: "Database"
	},
	{
		nombre: "IndexedDB",
		tipo: "Database"
	},
	{
		nombre: "LocalStorage",
		tipo: "Database"
	},
	{
		nombre: "PouchDB",
		tipo: "Database"
	},
	{
		nombre: "LowDB",
		tipo: "Database"
	},
	{
		nombre: "NeDB",
		tipo: "Database"
	},
	{
		nombre: "WatermelonDB",
		tipo: "Database"
	},
	{
		nombre: "RxDB",
		tipo: "Database"
	},
	{
		nombre: "Gun",
		tipo: "Database"
	},
	{
		nombre: "Dexie",
		tipo: "Database"
	},
	{
		nombre: "Node.js",
		tipo: "Server"
	},
	{
		nombre: "Deno",
		tipo: "Server"
	},
	{
		nombre: "Bun",
		tipo: "Server"
	},
	{
		nombre: "Apache HTTP Server",
		tipo: "Server"
	},
	{
		nombre: "Nginx",
		tipo: "Server"
	},
	{
		nombre: "Apache Tomcat",
		tipo: "Server"
	},
	{
		nombre: "IIS",
		tipo: "Server"
	},
	{
		nombre: "Caddy",
		tipo: "Server"
	},
	{
		nombre: "Lighttpd",
		tipo: "Server"
	},
	{
		nombre: "Traefik",
		tipo: "Server"
	},
	{
		nombre: "HAProxy",
		tipo: "Server"
	},
	{
		nombre: "Uvicorn",
		tipo: "Server"
	},
	{
		nombre: "Gunicorn",
		tipo: "Server"
	},
	{
		nombre: "uWSGI",
		tipo: "Server"
	},
	{
		nombre: "Puma",
		tipo: "Server"
	},
	{
		nombre: "Passenger",
		tipo: "Server"
	},
	{
		nombre: "Unicorn",
		tipo: "Server"
	},
	{
		nombre: "WildFly",
		tipo: "Server"
	},
	{
		nombre: "JBoss",
		tipo: "Server"
	},
	{
		nombre: "GlassFish",
		tipo: "Server"
	},
	{
		nombre: "Jetty",
		tipo: "Server"
	},
	{
		nombre: "Undertow",
		tipo: "Server"
	},
	{
		nombre: "Netty",
		tipo: "Server"
	},
	{
		nombre: "OpenResty",
		tipo: "Server"
	},
	{
		nombre: "Cherokee",
		tipo: "Server"
	},
	{
		nombre: "Mongoose",
		tipo: "Server"
	},
	{
		nombre: "H2O",
		tipo: "Server"
	},
	{
		nombre: "Tengine",
		tipo: "Server"
	},
	{
		nombre: "Envoy",
		tipo: "Server"
	},
	{
		nombre: "Linkerd",
		tipo: "Server"
	},
	{
		nombre: "Kong",
		tipo: "Server"
	},
	{
		nombre: "Docker",
		tipo: "Tool"
	},
	{
		nombre: "Kubernetes",
		tipo: "Tool"
	},
	{
		nombre: "Terraform",
		tipo: "Tool"
	},
	{
		nombre: "Ansible",
		tipo: "Tool"
	},
	{
		nombre: "Jenkins",
		tipo: "Tool"
	},
	{
		nombre: "GitLab CI",
		tipo: "Tool"
	},
	{
		nombre: "GitHub Actions",
		tipo: "Tool"
	},
	{
		nombre: "CircleCI",
		tipo: "Tool"
	},
	{
		nombre: "Travis CI",
		tipo: "Tool"
	},
	{
		nombre: "Webpack",
		tipo: "Tool"
	},
	{
		nombre: "Vite",
		tipo: "Tool"
	},
	{
		nombre: "Rollup",
		tipo: "Tool"
	},
	{
		nombre: "Parcel",
		tipo: "Tool"
	},
	{
		nombre: "esbuild",
		tipo: "Tool"
	},
	{
		nombre: "Turbopack",
		tipo: "Tool"
	},
	{
		nombre: "Babel",
		tipo: "Tool"
	},
	{
		nombre: "SWC",
		tipo: "Tool"
	},
	{
		nombre: "ESLint",
		tipo: "Tool"
	},
	{
		nombre: "Prettier",
		tipo: "Tool"
	},
	{
		nombre: "Husky",
		tipo: "Tool"
	},
	{
		nombre: "Lint-staged",
		tipo: "Tool"
	},
	{
		nombre: "Commitlint",
		tipo: "Tool"
	},
	{
		nombre: "Stylelint",
		tipo: "Tool"
	},
	{
		nombre: "npm",
		tipo: "Tool"
	},
	{
		nombre: "Yarn",
		tipo: "Tool"
	},
	{
		nombre: "pnpm",
		tipo: "Tool"
	},
	{
		nombre: "pip",
		tipo: "Tool"
	},
	{
		nombre: "Poetry",
		tipo: "Tool"
	},
	{
		nombre: "Pipenv",
		tipo: "Tool"
	},
	{
		nombre: "Conda",
		tipo: "Tool"
	},
	{
		nombre: "Maven",
		tipo: "Tool"
	},
	{
		nombre: "Gradle",
		tipo: "Tool"
	},
	{
		nombre: "Composer",
		tipo: "Tool"
	},
	{
		nombre: "RubyGems",
		tipo: "Tool"
	},
	{
		nombre: "Bundler",
		tipo: "Tool"
	},
	{
		nombre: "Cargo",
		tipo: "Tool"
	},
	{
		nombre: "NuGet",
		tipo: "Tool"
	},
	{
		nombre: "CocoaPods",
		tipo: "Tool"
	},
	{
		nombre: "Carthage",
		tipo: "Tool"
	},
	{
		nombre: "Swift Package Manager",
		tipo: "Tool"
	},
	{
		nombre: "Git",
		tipo: "Tool"
	},
	{
		nombre: "Mercurial",
		tipo: "Tool"
	},
	{
		nombre: "SVN",
		tipo: "Tool"
	},
	{
		nombre: "Postman",
		tipo: "Tool"
	},
	{
		nombre: "Insomnia",
		tipo: "Tool"
	},
	{
		nombre: "Grafana",
		tipo: "Tool"
	},
	{
		nombre: "Prometheus",
		tipo: "Tool"
	},
	{
		nombre: "Datadog",
		tipo: "Tool"
	},
	{
		nombre: "New Relic",
		tipo: "Tool"
	},
	{
		nombre: "Sentry",
		tipo: "Tool"
	},
	{
		nombre: "LogRocket",
		tipo: "Tool"
	},
	{
		nombre: "Splunk",
		tipo: "Tool"
	},
	{
		nombre: "Kibana",
		tipo: "Tool"
	},
	{
		nombre: "Logstash",
		tipo: "Tool"
	},
	{
		nombre: "Jaeger",
		tipo: "Tool"
	},
	{
		nombre: "Zipkin",
		tipo: "Tool"
	},
	{
		nombre: "OpenTelemetry",
		tipo: "Tool"
	},
	{
		nombre: "Vagrant",
		tipo: "Tool"
	},
	{
		nombre: "Helm",
		tipo: "Tool"
	},
	{
		nombre: "Istio",
		tipo: "Tool"
	},
	{
		nombre: "Consul",
		tipo: "Tool"
	},
	{
		nombre: "Vault",
		tipo: "Tool"
	},
	{
		nombre: "Nomad",
		tipo: "Tool"
	},
	{
		nombre: "RabbitMQ",
		tipo: "Tool"
	},
	{
		nombre: "Apache Kafka",
		tipo: "Tool"
	},
	{
		nombre: "Pulsar",
		tipo: "Tool"
	},
	{
		nombre: "NATS",
		tipo: "Tool"
	},
	{
		nombre: "ActiveMQ",
		tipo: "Tool"
	},
	{
		nombre: "ZeroMQ",
		tipo: "Tool"
	},
	{
		nombre: "Biome",
		tipo: "Tool"
	},
	{
		nombre: "Oxlint",
		tipo: "Tool"
	},
	{
		nombre: "Ruff",
		tipo: "Tool"
	},
	{
		nombre: "Black",
		tipo: "Tool"
	},
	{
		nombre: "Mypy",
		tipo: "Tool"
	},
	{
		nombre: "Pyright",
		tipo: "Tool"
	},
	{
		nombre: "Turborepo",
		tipo: "Tool"
	},
	{
		nombre: "Nx",
		tipo: "Tool"
	},
	{
		nombre: "Lerna",
		tipo: "Tool"
	},
	{
		nombre: "Changesets",
		tipo: "Tool"
	},
	{
		nombre: "Renovate",
		tipo: "Tool"
	},
	{
		nombre: "Dependabot",
		tipo: "Tool"
	},
	{
		nombre: "Snyk",
		tipo: "Tool"
	},
	{
		nombre: "SonarQube",
		tipo: "Tool"
	},
	{
		nombre: "Codecov",
		tipo: "Tool"
	},
	{
		nombre: "Coveralls",
		tipo: "Tool"
	},
	{
		nombre: "k6",
		tipo: "Tool"
	},
	{
		nombre: "Locust",
		tipo: "Tool"
	},
	{
		nombre: "Artillery",
		tipo: "Tool"
	},
	{
		nombre: "WireMock",
		tipo: "Tool"
	},
	{
		nombre: "Mockoon",
		tipo: "Tool"
	},
	{
		nombre: "Minikube",
		tipo: "Tool"
	},
	{
		nombre: "k3s",
		tipo: "Tool"
	},
	{
		nombre: "k3d",
		tipo: "Tool"
	},
	{
		nombre: "Kind",
		tipo: "Tool"
	},
	{
		nombre: "MicroK8s",
		tipo: "Tool"
	},
	{
		nombre: "Rancher",
		tipo: "Tool"
	},
	{
		nombre: "OpenFaaS",
		tipo: "Tool"
	},
	{
		nombre: "Knative",
		tipo: "Tool"
	},
	{
		nombre: "Flux",
		tipo: "Tool"
	},
	{
		nombre: "ArgoCD",
		tipo: "Tool"
	},
	{
		nombre: "Skaffold",
		tipo: "Tool"
	},
	{
		nombre: "Tilt",
		tipo: "Tool"
	},
	{
		nombre: "Telepresence",
		tipo: "Tool"
	},
	{
		nombre: "Pulumi",
		tipo: "Tool"
	},
	{
		nombre: "CDK",
		tipo: "Tool"
	},
	{
		nombre: "Crossplane",
		tipo: "Tool"
	},
	{
		nombre: "Waypoint",
		tipo: "Tool"
	},
	{
		nombre: "Packer",
		tipo: "Tool"
	},
	{
		nombre: "Chef",
		tipo: "Tool"
	},
	{
		nombre: "Puppet",
		tipo: "Tool"
	},
	{
		nombre: "SaltStack",
		tipo: "Tool"
	},
	{
		nombre: "Bruno",
		tipo: "Tool"
	},
	{
		nombre: "Hoppscotch",
		tipo: "Tool"
	},
	{
		nombre: "HTTPie",
		tipo: "Tool"
	},
	{
		nombre: "Encore",
		tipo: "Tool"
	},
	{
		nombre: "Dagger",
		tipo: "Tool"
	},
	{
		nombre: "Earthly",
		tipo: "Tool"
	},
	{
		nombre: "Bazel",
		tipo: "Tool"
	},
	{
		nombre: "Pants",
		tipo: "Tool"
	},
	{
		nombre: "Meson",
		tipo: "Tool"
	},
	{
		nombre: "CMake",
		tipo: "Tool"
	},
	{
		nombre: "Make",
		tipo: "Tool"
	},
	{
		nombre: "Task",
		tipo: "Tool"
	},
	{
		nombre: "Just",
		tipo: "Tool"
	},
	{
		nombre: "Lefthook",
		tipo: "Tool"
	},
	{
		nombre: "OpenAPI",
		tipo: "Tool"
	},
	{
		nombre: "Swagger",
		tipo: "Tool"
	},
	{
		nombre: "Redoc",
		tipo: "Tool"
	},
	{
		nombre: "Scalar",
		tipo: "Tool"
	},
	{
		nombre: "tRPC Panel",
		tipo: "Tool"
	},
	{
		nombre: "Expo",
		tipo: "Tool"
	},
	{
		nombre: "EAS",
		tipo: "Tool"
	},
	{
		nombre: "Fastlane",
		tipo: "Tool"
	},
	{
		nombre: "App Center",
		tipo: "Tool"
	},
	{
		nombre: "Shorebird",
		tipo: "Tool"
	},
	{
		nombre: "Codemagic",
		tipo: "Tool"
	},
	{
		nombre: "Bitrise",
		tipo: "Tool"
	},
	{
		nombre: "Lighthouse",
		tipo: "Tool"
	},
	{
		nombre: "WebPageTest",
		tipo: "Tool"
	},
	{
		nombre: "BundlePhobia",
		tipo: "Tool"
	},
	{
		nombre: "Bundle Analyzer",
		tipo: "Tool"
	},
	{
		nombre: "Size-limit",
		tipo: "Tool"
	},
	{
		nombre: "Chromatic",
		tipo: "Tool"
	},
	{
		nombre: "Percy",
		tipo: "Tool"
	},
	{
		nombre: "Applitools",
		tipo: "Tool"
	},
	{
		nombre: "BackstopJS",
		tipo: "Tool"
	},
	{
		nombre: "Visual Regression Tracker",
		tipo: "Tool"
	},
	{
		nombre: "Compodoc",
		tipo: "Tool"
	},
	{
		nombre: "JSDoc",
		tipo: "Tool"
	},
	{
		nombre: "TypeDoc",
		tipo: "Tool"
	},
	{
		nombre: "Docusaurus",
		tipo: "Tool"
	},
	{
		nombre: "VitePress",
		tipo: "Tool"
	},
	{
		nombre: "Nextra",
		tipo: "Tool"
	},
	{
		nombre: "MkDocs",
		tipo: "Tool"
	},
	{
		nombre: "Sphinx",
		tipo: "Tool"
	},
	{
		nombre: "Read the Docs",
		tipo: "Tool"
	},
	{
		nombre: "GitBook",
		tipo: "Tool"
	},
	{
		nombre: "Mintlify",
		tipo: "Tool"
	},
	{
		nombre: "DBeaver",
		tipo: "Tool"
	},
	{
		nombre: "TablePlus",
		tipo: "Tool"
	},
	{
		nombre: "DataGrip",
		tipo: "Tool"
	},
	{
		nombre: "Beekeeper Studio",
		tipo: "Tool"
	},
	{
		nombre: "pgAdmin",
		tipo: "Tool"
	},
	{
		nombre: "Robo 3T",
		tipo: "Tool"
	},
	{
		nombre: "MongoDB Compass",
		tipo: "Tool"
	},
	{
		nombre: "Redis Insight",
		tipo: "Tool"
	},
	{
		nombre: "VS Code",
		tipo: "Tool"
	},
	{
		nombre: "IntelliJ IDEA",
		tipo: "Tool"
	},
	{
		nombre: "WebStorm",
		tipo: "Tool"
	},
	{
		nombre: "PyCharm",
		tipo: "Tool"
	},
	{
		nombre: "Cursor",
		tipo: "Tool"
	},
	{
		nombre: "Zed",
		tipo: "Tool"
	},
	{
		nombre: "Sublime Text",
		tipo: "Tool"
	},
	{
		nombre: "Vim",
		tipo: "Tool"
	},
	{
		nombre: "Neovim",
		tipo: "Tool"
	},
	{
		nombre: "Emacs",
		tipo: "Tool"
	},
	{
		nombre: "Atom",
		tipo: "Tool"
	},
	{
		nombre: "Fleet",
		tipo: "Tool"
	},
	{
		nombre: "Nova",
		tipo: "Tool"
	},
	{
		nombre: "CodeSandbox",
		tipo: "Tool"
	},
	{
		nombre: "StackBlitz",
		tipo: "Tool"
	},
	{
		nombre: "Replit",
		tipo: "Tool"
	},
	{
		nombre: "Gitpod",
		tipo: "Tool"
	},
	{
		nombre: "GitHub Codespaces",
		tipo: "Tool"
	},
	{
		nombre: "DevPod",
		tipo: "Tool"
	},
	{
		nombre: "SonarLint",
		tipo: "Tool"
	},
	{
		nombre: "CodeClimate",
		tipo: "Tool"
	},
	{
		nombre: "Codebeat",
		tipo: "Tool"
	},
	{
		nombre: "DeepSource",
		tipo: "Tool"
	},
	{
		nombre: "Semgrep",
		tipo: "Tool"
	},
	{
		nombre: "CodeQL",
		tipo: "Tool"
	},
	{
		nombre: "Trivy",
		tipo: "Tool"
	},
	{
		nombre: "Grype",
		tipo: "Tool"
	},
	{
		nombre: "OSV-Scanner",
		tipo: "Tool"
	},
	{
		nombre: "OWASP ZAP",
		tipo: "Tool"
	},
	{
		nombre: "Burp Suite",
		tipo: "Tool"
	},
	{
		nombre: "Apache Spark",
		tipo: "Tool"
	},
	{
		nombre: "MLflow",
		tipo: "Tool"
	},
	{
		nombre: "Jupyter",
		tipo: "Tool"
	},
	{
		nombre: "JupyterLab",
		tipo: "Tool"
	},
	{
		nombre: "Databricks",
		tipo: "Tool"
	},
	{
		nombre: "Weights & Biases",
		tipo: "Tool"
	},
	{
		nombre: "Neptune.ai",
		tipo: "Tool"
	},
	{
		nombre: "Comet ML",
		tipo: "Tool"
	},
	{
		nombre: "AWS",
		tipo: "Platform"
	},
	{
		nombre: "Azure",
		tipo: "Platform"
	},
	{
		nombre: "Google Cloud",
		tipo: "Platform"
	},
	{
		nombre: "DigitalOcean",
		tipo: "Platform"
	},
	{
		nombre: "Heroku",
		tipo: "Platform"
	},
	{
		nombre: "Vercel",
		tipo: "Platform"
	},
	{
		nombre: "Netlify",
		tipo: "Platform"
	},
	{
		nombre: "Railway",
		tipo: "Platform"
	},
	{
		nombre: "Render",
		tipo: "Platform"
	},
	{
		nombre: "Fly.io",
		tipo: "Platform"
	},
	{
		nombre: "Cloudflare",
		tipo: "Platform"
	},
	{
		nombre: "Cloudflare Workers",
		tipo: "Platform"
	},
	{
		nombre: "Cloudflare Pages",
		tipo: "Platform"
	},
	{
		nombre: "Firebase",
		tipo: "Platform"
	},
	{
		nombre: "Supabase",
		tipo: "Platform"
	},
	{
		nombre: "PlanetScale",
		tipo: "Platform"
	},
	{
		nombre: "MongoDB Atlas",
		tipo: "Platform"
	},
	{
		nombre: "AWS Lambda",
		tipo: "Platform"
	},
	{
		nombre: "AWS EC2",
		tipo: "Platform"
	},
	{
		nombre: "AWS S3",
		tipo: "Platform"
	},
	{
		nombre: "AWS RDS",
		tipo: "Platform"
	},
	{
		nombre: "AWS DynamoDB",
		tipo: "Platform"
	},
	{
		nombre: "AWS CloudFront",
		tipo: "Platform"
	},
	{
		nombre: "Azure Functions",
		tipo: "Platform"
	},
	{
		nombre: "Azure DevOps",
		tipo: "Platform"
	},
	{
		nombre: "Google Cloud Functions",
		tipo: "Platform"
	},
	{
		nombre: "Google Cloud Run",
		tipo: "Platform"
	},
	{
		nombre: "Google App Engine",
		tipo: "Platform"
	},
	{
		nombre: "GitHub",
		tipo: "Platform"
	},
	{
		nombre: "GitLab",
		tipo: "Platform"
	},
	{
		nombre: "Bitbucket",
		tipo: "Platform"
	},
	{
		nombre: "Jira",
		tipo: "Platform"
	},
	{
		nombre: "Confluence",
		tipo: "Platform"
	},
	{
		nombre: "Notion",
		tipo: "Platform"
	},
	{
		nombre: "Linear",
		tipo: "Platform"
	},
	{
		nombre: "Figma",
		tipo: "Platform"
	},
	{
		nombre: "Sketch",
		tipo: "Platform"
	},
	{
		nombre: "Adobe XD",
		tipo: "Platform"
	},
	{
		nombre: "InVision",
		tipo: "Platform"
	},
	{
		nombre: "Miro",
		tipo: "Platform"
	},
	{
		nombre: "Slack",
		tipo: "Platform"
	},
	{
		nombre: "Discord",
		tipo: "Platform"
	},
	{
		nombre: "Teams",
		tipo: "Platform"
	},
	{
		nombre: "Zoom",
		tipo: "Platform"
	},
	{
		nombre: "Stripe",
		tipo: "Platform"
	},
	{
		nombre: "PayPal",
		tipo: "Platform"
	},
	{
		nombre: "Twilio",
		tipo: "Platform"
	},
	{
		nombre: "SendGrid",
		tipo: "Platform"
	},
	{
		nombre: "Mailgun",
		tipo: "Platform"
	},
	{
		nombre: "Auth0",
		tipo: "Platform"
	},
	{
		nombre: "Okta",
		tipo: "Platform"
	},
	{
		nombre: "Clerk",
		tipo: "Platform"
	},
	{
		nombre: "Sanity",
		tipo: "Platform"
	},
	{
		nombre: "Contentful",
		tipo: "Platform"
	},
	{
		nombre: "Strapi",
		tipo: "Platform"
	},
	{
		nombre: "Algolia",
		tipo: "Platform"
	},
	{
		nombre: "Meilisearch",
		tipo: "Platform"
	},
	{
		nombre: "Convex",
		tipo: "Platform"
	},
	{
		nombre: "Appwrite",
		tipo: "Platform"
	},
	{
		nombre: "Pocketbase",
		tipo: "Platform"
	},
	{
		nombre: "Deta",
		tipo: "Platform"
	},
	{
		nombre: "Koyeb",
		tipo: "Platform"
	},
	{
		nombre: "Zeabur",
		tipo: "Platform"
	},
	{
		nombre: "Coolify",
		tipo: "Platform"
	},
	{
		nombre: "CapRover",
		tipo: "Platform"
	},
	{
		nombre: "Porter",
		tipo: "Platform"
	},
	{
		nombre: "Qovery",
		tipo: "Platform"
	},
	{
		nombre: "Nhost",
		tipo: "Platform"
	},
	{
		nombre: "Hasura",
		tipo: "Platform"
	},
	{
		nombre: "Directus",
		tipo: "Platform"
	},
	{
		nombre: "Ghost",
		tipo: "Platform"
	},
	{
		nombre: "WordPress",
		tipo: "Platform"
	},
	{
		nombre: "Drupal",
		tipo: "Platform"
	},
	{
		nombre: "Webflow",
		tipo: "Platform"
	},
	{
		nombre: "Bubble",
		tipo: "Platform"
	},
	{
		nombre: "Retool",
		tipo: "Platform"
	},
	{
		nombre: "Airplane",
		tipo: "Platform"
	},
	{
		nombre: "Neon",
		tipo: "Platform"
	},
	{
		nombre: "Xata",
		tipo: "Platform"
	},
	{
		nombre: "Upstash",
		tipo: "Platform"
	},
	{
		nombre: "Grafbase",
		tipo: "Platform"
	},
	{
		nombre: "StepZen",
		tipo: "Platform"
	},
	{
		nombre: "WunderGraph",
		tipo: "Platform"
	},
	{
		nombre: "SST",
		tipo: "Platform"
	},
	{
		nombre: "Serverless Framework",
		tipo: "Platform"
	},
	{
		nombre: "Architect",
		tipo: "Platform"
	},
	{
		nombre: "Stacktape",
		tipo: "Platform"
	},
	{
		nombre: "Doppler",
		tipo: "Platform"
	},
	{
		nombre: "Infisical",
		tipo: "Platform"
	},
	{
		nombre: "Segment",
		tipo: "Platform"
	},
	{
		nombre: "Mixpanel",
		tipo: "Platform"
	},
	{
		nombre: "Amplitude",
		tipo: "Platform"
	},
	{
		nombre: "PostHog",
		tipo: "Platform"
	},
	{
		nombre: "Plausible",
		tipo: "Platform"
	},
	{
		nombre: "Umami",
		tipo: "Platform"
	},
	{
		nombre: "Fathom",
		tipo: "Platform"
	},
	{
		nombre: "Vercel Analytics",
		tipo: "Platform"
	},
	{
		nombre: "Aptible",
		tipo: "Platform"
	},
	{
		nombre: "Platform.sh",
		tipo: "Platform"
	},
	{
		nombre: "Northflank",
		tipo: "Platform"
	},
	{
		nombre: "Resend",
		tipo: "Platform"
	},
	{
		nombre: "Postmark",
		tipo: "Platform"
	},
	{
		nombre: "Amazon SES",
		tipo: "Platform"
	},
	{
		nombre: "Mailtrap",
		tipo: "Platform"
	},
	{
		nombre: "Mailchimp",
		tipo: "Platform"
	},
	{
		nombre: "Brevo",
		tipo: "Platform"
	},
	{
		nombre: "ConvertKit",
		tipo: "Platform"
	},
	{
		nombre: "Customer.io",
		tipo: "Platform"
	},
	{
		nombre: "Vonage",
		tipo: "Platform"
	},
	{
		nombre: "MessageBird",
		tipo: "Platform"
	},
	{
		nombre: "Plivo",
		tipo: "Platform"
	},
	{
		nombre: "Bandwidth",
		tipo: "Platform"
	},
	{
		nombre: "Telnyx",
		tipo: "Platform"
	},
	{
		nombre: "Stream",
		tipo: "Platform"
	},
	{
		nombre: "Agora",
		tipo: "Platform"
	},
	{
		nombre: "Daily.co",
		tipo: "Platform"
	},
	{
		nombre: "Whereby",
		tipo: "Platform"
	},
	{
		nombre: "100ms",
		tipo: "Platform"
	},
	{
		nombre: "Livekit",
		tipo: "Platform"
	},
	{
		nombre: "Mux",
		tipo: "Platform"
	},
	{
		nombre: "Cloudinary",
		tipo: "Platform"
	},
	{
		nombre: "Imgix",
		tipo: "Platform"
	},
	{
		nombre: "ImageKit",
		tipo: "Platform"
	},
	{
		nombre: "Uploadcare",
		tipo: "Platform"
	},
	{
		nombre: "Cloudimage",
		tipo: "Platform"
	},
	{
		nombre: "Bunny CDN",
		tipo: "Platform"
	},
	{
		nombre: "Fastly",
		tipo: "Platform"
	},
	{
		nombre: "KeyCDN",
		tipo: "Platform"
	},
	{
		nombre: "StackPath",
		tipo: "Platform"
	},
	{
		nombre: "Akamai",
		tipo: "Platform"
	},
	{
		nombre: "Shopify",
		tipo: "Platform"
	},
	{
		nombre: "WooCommerce",
		tipo: "Platform"
	},
	{
		nombre: "Magento",
		tipo: "Platform"
	},
	{
		nombre: "BigCommerce",
		tipo: "Platform"
	},
	{
		nombre: "Medusa",
		tipo: "Platform"
	},
	{
		nombre: "Saleor",
		tipo: "Platform"
	},
	{
		nombre: "CommerceJS",
		tipo: "Platform"
	},
	{
		nombre: "Swell",
		tipo: "Platform"
	},
	{
		nombre: "Vendure",
		tipo: "Platform"
	},
	{
		nombre: "Elastic Path",
		tipo: "Platform"
	},
	{
		nombre: "Intercom",
		tipo: "Platform"
	},
	{
		nombre: "Zendesk",
		tipo: "Platform"
	},
	{
		nombre: "Freshdesk",
		tipo: "Platform"
	},
	{
		nombre: "HubSpot",
		tipo: "Platform"
	},
	{
		nombre: "Salesforce",
		tipo: "Platform"
	},
	{
		nombre: "Pipedrive",
		tipo: "Platform"
	},
	{
		nombre: "Monday.com",
		tipo: "Platform"
	},
	{
		nombre: "Asana",
		tipo: "Platform"
	},
	{
		nombre: "ClickUp",
		tipo: "Platform"
	},
	{
		nombre: "Airtable",
		tipo: "Platform"
	},
	{
		nombre: "Coda",
		tipo: "Platform"
	},
	{
		nombre: "Basecamp",
		tipo: "Platform"
	},
	{
		nombre: "Trello",
		tipo: "Platform"
	},
	{
		nombre: "Height",
		tipo: "Platform"
	},
	{
		nombre: "Plane",
		tipo: "Platform"
	},
	{
		nombre: "Snowflake",
		tipo: "Platform"
	},
	{
		nombre: "Databricks",
		tipo: "Platform"
	},
	{
		nombre: "MEAN",
		tipo: "Stack",
		componentes: [
			{
				nombre: "MongoDB",
				tipo: "Database"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "Angular",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "MERN",
		tipo: "Stack",
		componentes: [
			{
				nombre: "MongoDB",
				tipo: "Database"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "MEVN",
		tipo: "Stack",
		componentes: [
			{
				nombre: "MongoDB",
				tipo: "Database"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "Vue.js",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "LAMP",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Linux",
				tipo: "Platform"
			},
			{
				nombre: "Apache HTTP Server",
				tipo: "Server"
			},
			{
				nombre: "MySQL",
				tipo: "Database"
			},
			{
				nombre: "PHP",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "LEMP",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Linux",
				tipo: "Platform"
			},
			{
				nombre: "Nginx",
				tipo: "Server"
			},
			{
				nombre: "MySQL",
				tipo: "Database"
			},
			{
				nombre: "PHP",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "WAMP",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Windows",
				tipo: "Platform"
			},
			{
				nombre: "Apache HTTP Server",
				tipo: "Server"
			},
			{
				nombre: "MySQL",
				tipo: "Database"
			},
			{
				nombre: "PHP",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "XAMPP",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Apache HTTP Server",
				tipo: "Server"
			},
			{
				nombre: "MySQL",
				tipo: "Database"
			},
			{
				nombre: "PHP",
				tipo: "Language"
			},
			{
				nombre: "Perl",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "JAMstack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "JavaScript",
				tipo: "Language"
			},
			{
				nombre: "APIs",
				tipo: "Tool"
			},
			{
				nombre: "Markup",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "PERN",
		tipo: "Stack",
		componentes: [
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "TALL",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Tailwind CSS",
				tipo: "Framework"
			},
			{
				nombre: "Alpine.js",
				tipo: "Framework"
			},
			{
				nombre: "Laravel",
				tipo: "Framework"
			},
			{
				nombre: "Livewire",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "T3",
		tipo: "Stack",
		componentes: [
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "tRPC",
				tipo: "Framework"
			},
			{
				nombre: "Tailwind CSS",
				tipo: "Framework"
			},
			{
				nombre: "Next.js",
				tipo: "Framework"
			},
			{
				nombre: "Prisma",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "ELK",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Elasticsearch",
				tipo: "Database"
			},
			{
				nombre: "Logstash",
				tipo: "Tool"
			},
			{
				nombre: "Kibana",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "TICK",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Telegraf",
				tipo: "Tool"
			},
			{
				nombre: "InfluxDB",
				tipo: "Database"
			},
			{
				nombre: "Chronograf",
				tipo: "Tool"
			},
			{
				nombre: "Kapacitor",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "SMACK",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Spark",
				tipo: "Tool"
			},
			{
				nombre: "Mesos",
				tipo: "Tool"
			},
			{
				nombre: "Akka",
				tipo: "Framework"
			},
			{
				nombre: "Cassandra",
				tipo: "Database"
			},
			{
				nombre: "Apache Kafka",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "GRAND",
		tipo: "Stack",
		componentes: [
			{
				nombre: "GraphQL",
				tipo: "Language"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "Apollo",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			},
			{
				nombre: "Database",
				tipo: "Database"
			}
		]
	},
	{
		nombre: ".NET Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "C#",
				tipo: "Language"
			},
			{
				nombre: "ASP.NET Core",
				tipo: "Framework"
			},
			{
				nombre: "Entity Framework",
				tipo: "Framework"
			},
			{
				nombre: "SQL Server",
				tipo: "Database"
			},
			{
				nombre: "Azure",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "Spring Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Java",
				tipo: "Language"
			},
			{
				nombre: "Spring Boot",
				tipo: "Framework"
			},
			{
				nombre: "Spring MVC",
				tipo: "Framework"
			},
			{
				nombre: "Hibernate",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			}
		]
	},
	{
		nombre: "Django Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Python",
				tipo: "Language"
			},
			{
				nombre: "Django",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Nginx",
				tipo: "Server"
			},
			{
				nombre: "Gunicorn",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "Rails Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Ruby",
				tipo: "Language"
			},
			{
				nombre: "Ruby on Rails",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Redis",
				tipo: "Database"
			},
			{
				nombre: "Sidekiq",
				tipo: "Library"
			}
		]
	},
	{
		nombre: "Serverless Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "AWS Lambda",
				tipo: "Platform"
			},
			{
				nombre: "API Gateway",
				tipo: "Platform"
			},
			{
				nombre: "DynamoDB",
				tipo: "Database"
			},
			{
				nombre: "S3",
				tipo: "Platform"
			},
			{
				nombre: "CloudFront",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "FANG",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Firebase",
				tipo: "Platform"
			},
			{
				nombre: "Angular",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			},
			{
				nombre: "GraphQL",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "NERP",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Node.js",
				tipo: "Server"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			}
		]
	},
	{
		nombre: "PEAN",
		tipo: "Stack",
		componentes: [
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "Angular",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "SEAN",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Svelte",
				tipo: "Framework"
			},
			{
				nombre: "Express.js",
				tipo: "Framework"
			},
			{
				nombre: "Angular",
				tipo: "Framework"
			},
			{
				nombre: "Node.js",
				tipo: "Server"
			}
		]
	},
	{
		nombre: "Microservices Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Docker",
				tipo: "Tool"
			},
			{
				nombre: "Kubernetes",
				tipo: "Tool"
			},
			{
				nombre: "Istio",
				tipo: "Tool"
			},
			{
				nombre: "Apache Kafka",
				tipo: "Tool"
			},
			{
				nombre: "gRPC",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "Edge Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Cloudflare Workers",
				tipo: "Platform"
			},
			{
				nombre: "Deno",
				tipo: "Server"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Edge Functions",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "Web3 Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Solidity",
				tipo: "Language"
			},
			{
				nombre: "Ethereum",
				tipo: "Platform"
			},
			{
				nombre: "Web3.js",
				tipo: "Library"
			},
			{
				nombre: "IPFS",
				tipo: "Platform"
			},
			{
				nombre: "Hardhat",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "Mobile Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "React Native",
				tipo: "Framework"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Expo",
				tipo: "Framework"
			},
			{
				nombre: "Firebase",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "Cloud Native Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Kubernetes",
				tipo: "Tool"
			},
			{
				nombre: "Docker",
				tipo: "Tool"
			},
			{
				nombre: "Prometheus",
				tipo: "Tool"
			},
			{
				nombre: "Grafana",
				tipo: "Tool"
			},
			{
				nombre: "Helm",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "AI/ML Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Python",
				tipo: "Language"
			},
			{
				nombre: "PyTorch",
				tipo: "Framework"
			},
			{
				nombre: "TensorFlow",
				tipo: "Framework"
			},
			{
				nombre: "Jupyter",
				tipo: "Tool"
			},
			{
				nombre: "MLflow",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "Rust Web Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Rust",
				tipo: "Language"
			},
			{
				nombre: "Actix",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Diesel",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "Go Web Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Go",
				tipo: "Language"
			},
			{
				nombre: "Gin",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "GORM",
				tipo: "Framework"
			},
			{
				nombre: "Redis",
				tipo: "Database"
			}
		]
	},
	{
		nombre: "Flutter Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Dart",
				tipo: "Language"
			},
			{
				nombre: "Flutter",
				tipo: "Framework"
			},
			{
				nombre: "Firebase",
				tipo: "Platform"
			},
			{
				nombre: "GetX",
				tipo: "Library"
			}
		]
	},
	{
		nombre: "Next.js Full Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Next.js",
				tipo: "Framework"
			},
			{
				nombre: "Prisma",
				tipo: "Tool"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Vercel",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "SvelteKit Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Svelte",
				tipo: "Framework"
			},
			{
				nombre: "SvelteKit",
				tipo: "Framework"
			},
			{
				nombre: "Tailwind CSS",
				tipo: "Framework"
			},
			{
				nombre: "Supabase",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "Remix Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Remix",
				tipo: "Framework"
			},
			{
				nombre: "Prisma",
				tipo: "Tool"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "Fly.io",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "Astro Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Astro",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "Tailwind CSS",
				tipo: "Framework"
			},
			{
				nombre: "Netlify",
				tipo: "Platform"
			}
		]
	},
	{
		nombre: "Elixir Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Elixir",
				tipo: "Language"
			},
			{
				nombre: "Phoenix",
				tipo: "Framework"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			},
			{
				nombre: "LiveView",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "BETH Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Bun",
				tipo: "Server"
			},
			{
				nombre: "Elysia",
				tipo: "Framework"
			},
			{
				nombre: "Turso",
				tipo: "Database"
			},
			{
				nombre: "HTMX",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "PETAL Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Phoenix",
				tipo: "Framework"
			},
			{
				nombre: "Elixir",
				tipo: "Language"
			},
			{
				nombre: "Tailwind CSS",
				tipo: "Framework"
			},
			{
				nombre: "Alpine.js",
				tipo: "Framework"
			},
			{
				nombre: "LiveView",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "Tauri Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Rust",
				tipo: "Language"
			},
			{
				nombre: "Tauri",
				tipo: "Framework"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "React",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "Fresh Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Deno",
				tipo: "Server"
			},
			{
				nombre: "Fresh",
				tipo: "Framework"
			},
			{
				nombre: "Preact",
				tipo: "Framework"
			},
			{
				nombre: "Tailwind CSS",
				tipo: "Framework"
			}
		]
	},
	{
		nombre: "Hono Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Hono",
				tipo: "Framework"
			},
			{
				nombre: "Cloudflare Workers",
				tipo: "Platform"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "D1",
				tipo: "Database"
			}
		]
	},
	{
		nombre: "Redwood Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "RedwoodJS",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "Prisma",
				tipo: "Framework"
			},
			{
				nombre: "GraphQL",
				tipo: "Language"
			},
			{
				nombre: "PostgreSQL",
				tipo: "Database"
			}
		]
	},
	{
		nombre: "Blitz Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Blitz.js",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "Prisma",
				tipo: "Framework"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "Ionic Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Ionic",
				tipo: "Framework"
			},
			{
				nombre: "Angular",
				tipo: "Framework"
			},
			{
				nombre: "Capacitor",
				tipo: "Framework"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "NativeScript Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "NativeScript",
				tipo: "Framework"
			},
			{
				nombre: "Angular",
				tipo: "Framework"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			}
		]
	},
	{
		nombre: "Electron Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Electron",
				tipo: "Framework"
			},
			{
				nombre: "React",
				tipo: "Framework"
			},
			{
				nombre: "TypeScript",
				tipo: "Language"
			},
			{
				nombre: "Webpack",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "MLOps Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Python",
				tipo: "Language"
			},
			{
				nombre: "MLflow",
				tipo: "Tool"
			},
			{
				nombre: "Airflow",
				tipo: "Framework"
			},
			{
				nombre: "Kubernetes",
				tipo: "Tool"
			}
		]
	},
	{
		nombre: "Data Engineering Stack",
		tipo: "Stack",
		componentes: [
			{
				nombre: "Python",
				tipo: "Language"
			},
			{
				nombre: "Apache Spark",
				tipo: "Tool"
			},
			{
				nombre: "Apache Airflow",
				tipo: "Framework"
			},
			{
				nombre: "Snowflake",
				tipo: "Platform"
			}
		]
	}
];
var tecnologiasAutocompletado = {
	_metadata: _metadata,
	tecnologias: tecnologias
};

export { tecnologiasAutocompletado as catalog };
