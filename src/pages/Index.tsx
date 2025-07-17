import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const sections = [
    {
      title: "Vistas y Proyecciones",
      description: "Fundamentos de representación ortogonal, isométrica y perspectiva",
      icon: "Eye",
      topics: ["Vistas principales", "Proyecciones auxiliares", "Perspectiva isométrica"]
    },
    {
      title: "Cortes y Secciones", 
      description: "Técnicas de representación de elementos internos",
      icon: "Scissors",
      topics: ["Cortes totales", "Cortes parciales", "Secciones abatidas"]
    },
    {
      title: "Acotación y Tolerancias",
      description: "Dimensionado y especificación de tolerancias",
      icon: "Ruler",
      topics: ["Acotación funcional", "Tolerancias dimensionales", "Tolerancias geométricas"]
    },
    {
      title: "Cálculos Mecánicos",
      description: "Diseño y cálculo de elementos mecánicos",
      icon: "Calculator",
      topics: ["Ruedas dentadas", "Sistemas de correas", "Ejes y chavetas"]
    }
  ];

  const practiceItems = [
    { name: "Ejercicios de Vistas", difficulty: "Básico", icon: "FileText" },
    { name: "Problemas de Cortes", difficulty: "Intermedio", icon: "Layers" },
    { name: "Tolerancias Geométricas", difficulty: "Avanzado", icon: "Target" },
    { name: "Cálculo de Engranajes", difficulty: "Experto", icon: "Gear" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Compass" size={28} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Ingeniería Gráfica</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">INICIO</a>
              <a href="#teoria" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">TEORÍA</a>
              <a href="#practica" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">PRÁCTICA</a>
              <a href="#contactos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CONTACTOS</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Comenzar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Para Ingenieros Mecánicos
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Representación Gráfica 
                <span className="text-blue-600 block">Técnica</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Domina los fundamentos de la representación gráfica técnica: vistas, cortes, 
                acotación, tolerancias y cálculos mecánicos especializados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Empezar Curso
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={20} className="mr-2" />
                  Descargar Material
                </Button>
              </div>
            </div>
            <div className="lg:block">
              <img 
                src="/img/71d30386-b4ea-4aed-8af3-df2f787f4107.jpg" 
                alt="Herramientas de dibujo técnico" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Theory Section */}
      <section id="teoria" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Módulos Teóricos</h2>
            <p className="text-lg text-gray-600">Fundamentos esenciales de la representación gráfica técnica</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon name={section.icon} size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {index === 1 && (
                    <div className="mb-4">
                      <img 
                        src="/img/e426698a-69cd-4f2b-83e3-5895c5c664c6.jpg" 
                        alt="Cortes técnicos" 
                        className="rounded-lg w-full h-40 object-cover"
                      />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mb-4">
                      <img 
                        src="/img/5b95a8dd-64f3-41e7-a811-81efc4ca5537.jpg" 
                        alt="Cálculos mecánicos" 
                        className="rounded-lg w-full h-40 object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-500" />
                        <span className="text-sm text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Ver Contenido
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practica" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ejercicios Prácticos</h2>
            <p className="text-lg text-gray-600">Aplica tus conocimientos con ejercicios progresivos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge variant={item.difficulty === 'Básico' ? 'secondary' : 
                                item.difficulty === 'Intermedio' ? 'default' : 
                                item.difficulty === 'Avanzado' ? 'destructive' : 'outline'}>
                    {item.difficulty}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Comenzar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactos" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-600 rounded-full">
                <Icon name="Mail" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">info@ingenieria-grafica.edu</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-600 rounded-full">
                <Icon name="Phone" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-600 rounded-full">
                <Icon name="MapPin" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-gray-300">Facultad de Ingeniería</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Compass" size={24} className="text-blue-400" />
            <span className="text-lg font-semibold">Ingeniería Gráfica</span>
          </div>
          <p className="text-gray-400">© 2024 Curso de Representación Gráfica. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;