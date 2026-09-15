import { ArchetypeFacet, LiturgicTimeItem, ProjectItem, MotherhoodReflection, ResilienceTranslation } from '../types';

export const APP_IMAGES = {
  logoEmblem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkIDasQVNc6042tDuZ2UIhCtMwKL6VKMfFhZpzBt0D9hCKjtfnCLG_oBzNBeQbaNRKajrwwmpVzNJEOaLUGHnhXLxq4PJicpuXK7Aw5SeLM1hwBXb3PT7N2ld34KNGGEDdUjpQbrQ9i1EVHsVk-UDrZtff9PZYw52x67PynP2T72UJLXU2QH3JWqqTTUuk6gbKLJ8oYGQGHO0tJdQz_EUnI_fvekCHekxjzdBfEr_pIhpjel6_qcEUOw',
  portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2oZeTUK7vyAgMGjvgh7KR-XMwcLbeynXKdjjVPU8vWiBNY_oxospD5fYt0rcDVHHIJtChxNJBlXiRPqGfYxki3wac2tpUnS-RN-xv2N5tYZvyuFRAa1u4TCXFsPx-3Cz3JKfes2oe-qSDHtxp18_kWweAvFKbr_tRVVGw-WdREfj7AtfhWinzuwOxIYaQh4F9NvXUgDpkFXExayQM0IHpPSdlqPZkKM4r-u4XtIXmWEck2TtV1gas4w'
};

export const ARCHETYPES: ArchetypeFacet[] = [
  {
    id: 'maternidad',
    title: 'La Maternidad',
    badge: 'Propósito',
    badgeColor: 'text-tertiary bg-tertiary-container/30',
    icon: 'search_off', // As in the user's template
    iconBg: 'bg-primary-container',
    iconColor: 'text-on-primary shadow-[0_0_12px_rgba(128,0,32,0.4)]',
    description: 'Lo que ser madre me enseñó sobre la resolución de incidentes en tiempo real, empatía inquebrantable y una resiliencia inagotable.',
    quote: '“Ser madre no pausó mis metas técnicas; les dio un propósito mayor.”',
    details: 'Cada noche cuidando de mi hija me enseñó más sobre la tolerancia a fallos que cualquier manual de ingeniería. No hay margen de error cuando un ser humano vulnerable depende de tu presencia; esa disciplina la traslado a cada arquitectura que diseño.'
  },
  {
    id: 'sistemas',
    title: 'Ingeniería en Sistemas',
    badge: 'Backend',
    badgeColor: 'text-secondary bg-secondary-container/30',
    icon: 'terminal',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-secondary',
    description: 'Fascinación por la lógica discreta, la memoria y edificar arquitecturas complejas a partir de la nada. Una estudiante rompiendo sesgos con rigor en el ecosistema STEM.',
    quote: '“El código compilado es como una letanía: debe ser exacto, elegante e implacable.”',
    details: 'Especializándome en sistemas operativos, manejo de memoria a bajo nivel, estructuras de datos concurrentes y bases de datos relacionales normalizadas.'
  },
  {
    id: 'gotica',
    title: 'Identidad Gótica',
    badge: 'Estética',
    badgeColor: 'text-primary-fixed bg-primary-container/40',
    icon: 'church',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-primary',
    description: 'El refugio sagrado en el arte sombrío, la sublime belleza de la melancolía victoriana y la elegancia del terciopelo carmesí. No es un disfraz temporal; es mi lenguaje ontológico y estético.',
    quote: '“En la oscuridad encontramos el contraste que hace relucir cada chispa de entendimiento.”',
    details: 'Inspirada por el romanticismo oscuro del siglo XIX, la literatura gótica de Mary Shelley y Bram Stoker, y el darkwave analógico contemporáneo.'
  }
];

export const LITURGIC_TIMELINE: LiturgicTimeItem[] = [
  {
    id: 't-0630',
    time: '06:30',
    tag: '// ALBA FAMILIAR',
    dotColor: 'bg-tertiary',
    description: 'Desayuno artesanal y juegos matutinos con mi pequeña flor nocturna.',
    extendedNotes: 'La luz del amanecer filtrándose entre cortinas de terciopelo. Calentando té negro y preparando frutas mientras cantamos rimas infantiles con armonías melancólicas.'
  },
  {
    id: 't-0900',
    time: '09:00',
    tag: '// ACADEMIA STEM',
    dotColor: 'bg-primary animate-pulse',
    description: 'Cátedras de Ingeniería: Sistemas Operativos, hilos de ejecución y normalización de Bases de Datos.',
    extendedNotes: 'Inmersión en álgebra relacional, sincronización de mutexes y diseño de llamadas al sistema (syscalls). Interviniendo activamente en debates técnicos de la facultad.'
  },
  {
    id: 't-1500',
    time: '15:00',
    tag: '// AIRE LIBRE & SOUNDTRACK',
    dotColor: 'bg-secondary',
    description: 'Paseo por el parque, tareas de preescolar y melodías darkwave envolviendo el ambiente.',
    extendedNotes: 'Observar hojas secas caer mientras escucho Clan of Xymox o Lebanon Hanover. Conversaciones con mi hija sobre cómo funcionan las estrellas y las hormigas.'
  },
  {
    id: 't-2000',
    time: '20:00',
    tag: '// RITUAL NOCTURNO',
    dotColor: 'bg-tertiary',
    description: 'Cuento ilustrado bajo luces tenues para mecer sus sueños en calma.',
    extendedNotes: 'Lectura compartida de cuentos clásicos ilustrados. Una taza de manzanilla tibia y susurros de tranquilidad hasta que el sueño profundo la cobija.'
  },
  {
    id: 't-2130',
    time: '21:30',
    tag: '// LA VIGILIA DEL CÓDIGO',
    dotColor: 'bg-primary-container',
    description: 'Terminal abierta, commits de Git sincronizándose, taza de café negro sin azúcar y compilación serena a la luz de las velas.',
    extendedNotes: 'El momento en que el silencio reina. Teclado mecánico resonando suavemente, Neovim en modo oscuro y el susurro de las velas consumiéndose lentamente.'
  }
];

export const TECH_STACK = [
  { name: 'Java', dotColor: 'bg-primary', level: 'Avanzado', note: 'Spring Boot, JVM internals' },
  { name: 'Python', dotColor: 'bg-tertiary', level: 'Avanzado', note: 'Scripting de sistemas & ML básico' },
  { name: 'Git / GitHub', dotColor: 'bg-secondary', level: 'Dominio', note: 'Flujos trunk & ramas protegidas' },
  { name: 'SQL / Relacional', dotColor: 'bg-primary-fixed', level: 'Sólido', note: 'PostgreSQL, normalización BCNF' },
  { name: 'Linux & Bash', dotColor: 'bg-primary-container', level: 'Entorno Nativo', note: 'Arch/Debian, shell scripting' },
  { name: 'Next.js', dotColor: 'bg-on-tertiary-container', level: 'Moderno', note: 'SSR & React arquitecturas' }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nocturna-kernel',
    title: 'Nocturna OS Thread Monitor',
    subtitle: 'Módulo de telemetría de hilos y concurrencia en Linux',
    category: 'Sistemas & Kernel',
    status: 'Producción',
    description: 'Herramienta de bajo nivel para auditar cambios de contexto (context switches), contención de mutexes y estado de colas de planificación en tiempo real con salida enriquecida para terminales oscuras.',
    stack: ['C', 'Linux Kernel 6.2', 'Bash', 'eBPF'],
    metrics: '< 1.2% CPU Overhead // Latencia < 5µs',
    githubUrl: 'https://github.com/nocturna-code/thread-telemetry',
    demoSnippet: `/* nocturna_tracer.c - Context switch monitor */
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/sched.h>

static int __init nocturna_init(void) {
    pr_info("Nocturna: Kernel telemetry active at candle-light\\n");
    return 0;
}`
  },
  {
    id: 'alquimia-sql',
    title: 'Alquimia Relational Normalizer',
    subtitle: 'Motor de verificación y descomposición a 3NF y BCNF',
    category: 'Bases de Datos',
    status: 'Producción',
    description: 'Sistema algebraico para calcular clausuras de atributos, dependencias funcionales mínimas y sugerir descomposiciones preservando dependencias sin pérdidas de información.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JUnit 5'],
    metrics: '99.8% Test Coverage // 0 pérdidas de dependencias',
    githubUrl: 'https://github.com/nocturna-code/alquimia-sql',
    demoSnippet: `public class FunctionalDependencyGraph {
    public Set<Attribute> computeClosure(Set<Attribute> X, Set<FD> F) {
        Set<Attribute> closure = new HashSet<>(X);
        boolean changed;
        do {
            changed = false;
            for (FD fd : F) {
                if (closure.containsAll(fd.lhs()) && !closure.containsAll(fd.rhs())) {
                    closure.addAll(fd.rhs());
                    changed = true;
                }
            }
        } while (changed);
        return closure;
    }
}`
  },
  {
    id: 'vampire-synth',
    title: 'Crimson Velvet Synth Engine',
    subtitle: 'Sintetizador web polifónico de ondas osciladoras oscuras',
    category: 'Audio & Web',
    status: 'Producción',
    description: 'Motor de audio sintetizado en el navegador con osciladores diente de sierra, filtro pasa-bajos de 24dB resonante y envolvente ADSR emulando sintetizadores analógicos de los años 80.',
    stack: ['Web Audio API', 'TypeScript', 'Tailwind CSS'],
    metrics: 'Audio Latency ~10ms // 100% Web Nativo',
    githubUrl: 'https://github.com/nocturna-code/velvet-synth',
    demoSnippet: `const ctx = new AudioContext();
const osc = ctx.createOscillator();
const filter = ctx.createBiquadFilter();
osc.type = "sawtooth";
filter.type = "lowpass";
filter.frequency.value = 440;`
  },
  {
    id: 'maternal-scheduler',
    title: 'Maternal Priority Task Engine',
    subtitle: 'Algoritmo de planificación no expulsiva para vida dev y crianza',
    category: 'Algoritmos',
    status: 'Académico',
    description: 'Modelo formal de asignación de bloques cognitivos basado en colas de prioridad estricta para sincronizar horas de concentración técnica profunda sin descuidar ni un minuto la atención y calidez hacia los hijos.',
    stack: ['Python 3.12', 'SimPy', 'Math / Optimización'],
    metrics: 'Equilibrio comprobado: 100% Amor // 100% Rigor',
    githubUrl: 'https://github.com/nocturna-code/maternal-scheduler',
    demoSnippet: `class MaternalPriorityQueue:
    def push_critical_incident(self, event):
        # La infancia y el bienestar no se posponen nunca
        return self.heap.insert_at_head(event, priority=0)`
  }
];

export const RESILIENCE_MATRIX: ResilienceTranslation[] = [
  {
    maternalSkill: 'Despertares nocturnos & calma ante fiebre alta',
    engineeringSkill: 'Gestión de Incidentes Críticos P1 en Producción',
    explanation: 'Mantener la mente serena, el pulso firme y el razonamiento lúcido a las 3:45 AM mientras se mitigan crisis sin entrar en pánico.'
  },
  {
    maternalSkill: 'Cocinar, vigilar pasos, cantar y atender dudas',
    engineeringSkill: 'Concurrencia, Multithreading & Context-Switching',
    explanation: 'Cambiar el hilo de atención de inmediato sin perder el puntero de instrucción del proceso principal ni corromper el estado compartido.'
  },
  {
    maternalSkill: 'Entender un llanto sin palabras y acompañar la rabieta',
    engineeringSkill: 'Empatía Inquebrantable & Arquitectura Centrada en el Usuario',
    explanation: 'Descifrar la causa raíz detrás de síntomas desconcertantes a través de la escucha atenta y la compasión activa.'
  },
  {
    maternalSkill: 'Organización rigurosa de mochilas, ropa y meriendas',
    engineeringSkill: 'CI/CD Pipelines & Verificación Determinista',
    explanation: 'Diseñar procesos a prueba de fallos donde cada paso se ejecuta con precisión para que la rutina matutina arranque sin downtime.'
  }
];

export const MOTHERHOOD_REFLECTIONS: MotherhoodReflection[] = [
  {
    id: 'ref-1',
    date: '12 de Octubre',
    title: 'El teorema de los pequeños pasos',
    excerpt: 'Hoy mientras mi hija aprendía a abotonar su abrigo, comprendí que la maestría técnica no es un relámpago, sino la repetición paciente.',
    fullText: 'En el mundo de la ingeniería se nos vende a menudo la ilusión del prodigio solitario que programa sin pestañear durante cuarenta horas. Pero la maternidad me ha demostrado que los cimientos más indestructibles se fraguan en la constancia apacible. Cuando una niña pequeña ensaya veinte veces hasta atar sus zapatos sin frustrarse, te recuerda que depurar un fallo en el kernel requiere la misma infinita gentileza.',
    lesson: 'La paciencia no es pasividad; es la forma más feroz de persistencia.'
  },
  {
    id: 'ref-2',
    date: '3 de Noviembre',
    title: 'Por qué no temo a los sesgos en la facultad',
    excerpt: 'Entrar a un aula de ingeniería siendo mujer, madre y vistiendo terciopelo gótico desconcierta a muchos. Esa extrañeza es mi mayor fortaleza.',
    fullText: 'Durante mucho tiempo hubo quienes creían que la maternidad representaba una pausa intelectual o una pérdida de competitividad. Qué ciegos estaban. Cuando has sostenido la vida entre tus brazos, la opinión superficial de quienes juzgan por estereotipos se vuelve completamente inocua. Estudio con una tenacidad de hierro porque sé qué legado quiero dejarle a mi hija: una mujer que nunca pidió permiso para ser ella misma.',
    lesson: 'La autenticidad es un filtro natural que aparta el ruido y congrega a los semejantes.'
  },
  {
    id: 'ref-3',
    date: '28 de Enero',
    title: 'Luz de velas y pantallas de fósforo',
    excerpt: 'El ritual de sentarme frente al monitor a las 10 de la noche, con una vela aromática de mirra y café negro humeante.',
    fullText: 'La estética gótica no es una pose; es un cobijo íntimo. Para mí, programar es un oficio artesanal muy parecido a coser una prenda victoriana o encuadernar a mano un tomo de poemas. El código backend tiene una cadencia casi mística cuando logras que miles de registros dancen en perfecta armonía relacional.',
    lesson: 'La belleza y la lógica nunca fueron enemigas; son dos caras de la misma devoción.'
  }
];

export const GOTHIC_QUOTES = [
  {
    quote: "La vida y la muerte me parecían límites ideales que yo debía traspasar.",
    author: "Mary Shelley",
    work: "Frankenstein (1818)"
  },
  {
    quote: "Ese motor analítico teje patrones algebraicos tal como el telar de Jacquard teje flores y hojas.",
    author: "Ada Lovelace",
    work: "Notas sobre la Máquina Analítica (1843)"
  },
  {
    quote: "Todo lo que vemos o parecemos no es más que un sueño dentro de un sueño.",
    author: "Edgar Allan Poe",
    work: "A Dream Within a Dream (1849)"
  },
  {
    quote: "Ser madre me enseñó que la ternura no resta filo a la mente, sino que afila el propósito.",
    author: "Elena Vance",
    work: "Bitácora de Sistemas"
  }
];
